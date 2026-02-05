import { DOM, WOTD_WORDS } from "./config.example.js";
import { fetchDefinition } from "./api.js";
import { debounce, announce } from "./utils.js";
import { showToast } from "./toast.js";
import {
  getHistory,
  saveToHistory,
  removeFromHistory,
  clearHistory,
  getFavorites,
  addFavorite,
  removeFavorite,
  getTheme,
  setTheme,
  getSidebarState,
  setSidebarState,
  getView,
  setView,
  getSort,
  setSort,
} from "./storage.js";
import {
  displayDefinition,
  displayHistory,
  showError,
  showLoading,
  showSuggestions,
  hideSuggestions,
  renderIndex,
  showConfirm,
} from "./ui.js";

/* ---------- helpers ---------- */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* ---------- DOM refs ---------- */
const searchForm = $(DOM.SEARCH_FORM);
const searchInput = $(DOM.SEARCH_INPUT);
const searchResult = $(DOM.SEARCH_RESULT);
const suggestionsList = $(DOM.SUGGESTIONS_LIST);
const cardsContainer = $(DOM.CARDS_CONTAINER);
const gridSection = $(DOM.GRID_SECTION);
const sidebar = $(DOM.SIDEBAR);
const toggleSidebarBtn = $(DOM.TOGGLE_SIDEBAR);
const sidebarOverlay = $(DOM.SIDEBAR_OVERLAY);
const mobileMenuBtn = $(DOM.MOBILE_MENU_BTN);
const closeSidebarMob = $(DOM.CLOSE_SIDEBAR_MOBILE);
const gridBtn = $(DOM.BTN_GRID);
const listBtn = $(DOM.BTN_LIST);
const sortTrigger = $(DOM.SORT_TRIGGER);
const sortOptions = $(DOM.SORT_OPTIONS);
const currentSortEl = $(DOM.CURRENT_SORT);
const themeBtns = $$(DOM.THEME_BTNS);
const menuItems = $$(DOM.MENU_ITEMS);
const indexOverlay = $(DOM.INDEX_OVERLAY);
const closeIndexBtn = $(DOM.CLOSE_INDEX_BTN);
const alphabetNav = $(DOM.ALPHABET_NAV);
const indexContent = $(DOM.INDEX_CONTENT);
const clearHistoryBtn = $(DOM.CLEAR_HISTORY_BTN);

/* ---------- state ---------- */
let currentSortType = getSort();
let currentView = getView();
let currentSection = "home"; // home | favorites
let suggestionsIdx = -1; // keyboard nav index

/* ==============================================================
   SEARCH
   ============================================================== */
async function handleSearch(word) {
  showLoading(searchResult);
  announce(`Searching for ${word}`);
  hideSuggestions(suggestionsList);

  try {
    const data = await fetchDefinition(word);
    data.timestamp = Date.now();

    displayDefinition(data, searchResult, {
      onFav: handleFavToggle,
      onShare: handleShare,
      onSynonymClick: handleSearch,
    });

    saveToHistory(data);
    refreshCards();
    searchInput.value = "";
    announce(`Definition found for ${data.word}`);
  } catch (err) {
    showError(err.message, searchResult);
    announce(err.message);
  }
}

/* ==============================================================
   HISTORY / FAVORITES RENDERING
   ============================================================== */
function refreshCards() {
  const source = currentSection === "favorites" ? getFavorites() : getHistory();
  const sorted = sortList(source, currentSortType);
  displayHistory(sorted, cardsContainer, handleSearch);
  if (currentView === "list") cardsContainer.classList.add("list-view");
}

function sortList(arr, type) {
  const copy = [...arr];
  switch (type) {
    case "recent":
      return copy.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    case "oldest":
      return copy.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
    case "alpha":
      return copy.sort((a, b) => a.word.localeCompare(b.word));
    default:
      return copy;
  }
}

/* ==============================================================
   FAVORITES
   ============================================================== */
function handleFavToggle(data, isNowFav) {
  if (isNowFav) {
    addFavorite(data);
    showToast(`"${data.word}" added to favorites`, "success");
  } else {
    removeFavorite(data.word);
    showToast(`"${data.word}" removed from favorites`, "info");
  }
  refreshCards();
}

/* ==============================================================
   SHARE
   ============================================================== */
async function handleShare(data) {
  const def = data.meanings?.[0]?.definitions?.[0]?.definition || "";
  const text = `${data.word} — ${def}`;

  if (navigator.share) {
    try {
      await navigator.share({ title: data.word, text });
      return;
    } catch {
      /* user cancelled — fall through to clipboard */
    }
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied to clipboard!", "success");
  } catch {
    showToast("Couldn't copy. Try again.", "error");
  }
}

/* ==============================================================
   AUTOCOMPLETE SUGGESTIONS
   ============================================================== */
const onInputChange = debounce((query) => {
  if (!query) {
    hideSuggestions(suggestionsList);
    suggestionsIdx = -1;
    return;
  }

  const q = query.toLowerCase();
  const matches = getHistory()
    .filter((item) => item.word.toLowerCase().includes(q))
    .slice(0, 6)
    .map((item) => ({
      word: item.word,
      partOfSpeech: item.meanings?.[0]?.partOfSpeech || "",
    }));

  suggestionsIdx = -1;
  showSuggestions(matches, query, suggestionsList);
  searchForm.setAttribute("aria-expanded", matches.length ? "true" : "false");
}, 150);

function navigateSuggestions(dir) {
  const items = suggestionsList.querySelectorAll(".suggestion-item");
  if (!items.length) return;
  items.forEach((i) => i.classList.remove("active"));
  suggestionsIdx = (suggestionsIdx + dir + items.length) % items.length;
  items[suggestionsIdx].classList.add("active");
  items[suggestionsIdx].scrollIntoView({ block: "nearest" });
}

function selectActiveSuggestion() {
  const active = suggestionsList.querySelector(".suggestion-item.active");
  if (active) {
    searchInput.value = active.dataset.word;
    hideSuggestions(suggestionsList);
    handleSearch(active.dataset.word);
  }
}

/* ==============================================================
   THEME
   ============================================================== */
function applyTheme(theme) {
  setTheme(theme);
  themeBtns.forEach((b) =>
    b.classList.toggle("active", b.dataset.theme === theme),
  );
  const resolved =
    theme === "system"
      ? matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark"
        : "light"
      : theme;
  document.documentElement.setAttribute("data-theme", resolved);
}

/* ==============================================================
   SIDEBAR
   ============================================================== */
const openMobileSidebar = () => {
  sidebar.classList.add("mobile-open");
  sidebarOverlay.classList.add("active");
  document.body.classList.add("overlay-open");
};

const closeMobileSidebar = () => {
  sidebar.classList.remove("mobile-open");
  sidebarOverlay.classList.remove("active");
  document.body.classList.remove("overlay-open");
};

/* ==============================================================
   INDEX OVERLAY
   ============================================================== */
const openIndex = () => {
  renderIndex(getHistory(), indexContent, alphabetNav);
  indexOverlay.classList.add("active");
  document.body.classList.add("overlay-open");
};

const closeIndex = () => {
  indexOverlay.classList.remove("active");
  document.body.classList.remove("overlay-open");
};

/* ==============================================================
   WORD OF THE DAY
   ============================================================== */
function getWotdWord() {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const day = Math.floor((Date.now() - start) / 86_400_000);
  return WOTD_WORDS[day % WOTD_WORDS.length];
}

/* ==============================================================
   NAV
   ============================================================== */
function activateMenu(action) {
  menuItems.forEach((m) =>
    m.classList.toggle("active", m.dataset.action === action),
  );
}

/* ==============================================================
   EVENT LISTENERS
   ============================================================== */

/* --- search submit --- */
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const word = searchInput.value.trim();
  if (word) handleSearch(word);
});

/* --- search input (suggestions) --- */
searchInput.addEventListener("input", (e) =>
  onInputChange(e.target.value.trim()),
);

searchInput.addEventListener("keydown", (e) => {
  if (!suggestionsList.classList.contains("open")) return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    navigateSuggestions(1);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    navigateSuggestions(-1);
  } else if (e.key === "Enter" && suggestionsIdx >= 0) {
    e.preventDefault();
    selectActiveSuggestion();
  } else if (e.key === "Escape") {
    hideSuggestions(suggestionsList);
  }
});

/* click a suggestion */
suggestionsList.addEventListener("click", (e) => {
  const item = e.target.closest(".suggestion-item");
  if (!item) return;
  searchInput.value = item.dataset.word;
  hideSuggestions(suggestionsList);
  handleSearch(item.dataset.word);
});

/* close suggestions on outside click */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) hideSuggestions(suggestionsList);
});

/* --- card clicks (delegated) --- */
cardsContainer.addEventListener("click", (e) => {
  const del = e.target.closest(".delete-btn");
  if (del) {
    e.stopPropagation();
    const word = del.dataset.delete;
    if (currentSection === "favorites") {
      removeFavorite(word);
      showToast(`Removed "${word}"`, "info");
    } else {
      removeFromHistory(word);
      showToast(`"${word}" removed from history`, "info");
    }
    refreshCards();
    return;
  }

  const card = e.target.closest(".word-card");
  if (card) {
    const source =
      currentSection === "favorites" ? getFavorites() : getHistory();
    const data = source.find(
      (i) => i.word.toLowerCase() === card.dataset.word.toLowerCase(),
    );
    if (data)
      displayDefinition(data, searchResult, {
        onFav: handleFavToggle,
        onShare: handleShare,
        onSynonymClick: handleSearch,
      });
  }
});

/* --- index entry clicks --- */
indexContent.addEventListener("click", (e) => {
  const entry = e.target.closest(".dictionary-entry");
  if (!entry) return;
  closeIndex();
  const data = getHistory().find(
    (i) => i.word.toLowerCase() === entry.dataset.word.toLowerCase(),
  );
  if (data)
    displayDefinition(data, searchResult, {
      onFav: handleFavToggle,
      onShare: handleShare,
      onSynonymClick: handleSearch,
    });
  else handleSearch(entry.dataset.word);
});

/* --- sidebar toggle (desktop) --- */
toggleSidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  setSidebarState(
    sidebar.classList.contains("collapsed") ? "collapsed" : "expanded",
  );
});

/* --- mobile sidebar --- */
mobileMenuBtn.addEventListener("click", openMobileSidebar);
closeSidebarMob.addEventListener("click", closeMobileSidebar);
sidebarOverlay.addEventListener("click", closeMobileSidebar);

/* --- sidebar nav --- */
menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    const action = item.dataset.action;
    activateMenu(action);
    closeMobileSidebar();

    switch (action) {
      case "home":
        currentSection = "home";
        searchResult.classList.add("hidden");
        searchResult.innerHTML = "";
        gridSection.style.display = "";
        refreshCards();
        break;
      case "wotd":
        currentSection = "home";
        gridSection.style.display = "";
        handleSearch(getWotdWord());
        break;
      case "favorites":
        currentSection = "favorites";
        searchResult.classList.add("hidden");
        searchResult.innerHTML = "";
        gridSection.style.display = "";
        refreshCards();
        break;
      case "index":
        openIndex();
        break;
    }
  }),
);

/* --- close index --- */
closeIndexBtn.addEventListener("click", closeIndex);

/* --- view toggle --- */
gridBtn.addEventListener("click", () => {
  currentView = "grid";
  setView("grid");
  cardsContainer.classList.remove("list-view");
  gridBtn.classList.add("active");
  gridBtn.setAttribute("aria-pressed", "true");
  listBtn.classList.remove("active");
  listBtn.setAttribute("aria-pressed", "false");
});

listBtn.addEventListener("click", () => {
  currentView = "list";
  setView("list");
  cardsContainer.classList.add("list-view");
  listBtn.classList.add("active");
  listBtn.setAttribute("aria-pressed", "true");
  gridBtn.classList.remove("active");
  gridBtn.setAttribute("aria-pressed", "false");
});

/* --- sort dropdown --- */
sortTrigger.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = sortOptions.classList.toggle("open");
  sortTrigger.setAttribute("aria-expanded", open);
});

sortOptions.addEventListener("click", (e) => {
  const opt = e.target.closest(".option");
  if (!opt) return;
  currentSortType = opt.dataset.value;
  setSort(currentSortType);
  currentSortEl.textContent = opt.textContent.trim();
  sortOptions.querySelectorAll(".option").forEach((o) => {
    const sel = o === opt;
    o.classList.toggle("selected", sel);
    o.setAttribute("aria-selected", sel);
  });
  sortOptions.classList.remove("open");
  sortTrigger.setAttribute("aria-expanded", "false");
  refreshCards();
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".custom-select-container")) {
    sortOptions.classList.remove("open");
    sortTrigger.setAttribute("aria-expanded", "false");
  }
});

/* --- clear history --- */
clearHistoryBtn.addEventListener("click", async () => {
  const source = currentSection === "favorites" ? "favorites" : "history";
  const count =
    currentSection === "favorites"
      ? getFavorites().length
      : getHistory().length;

  if (!count) {
    showToast(`No ${source} to clear`, "info");
    return;
  }

  const confirmed = await showConfirm(
    `Clear all ${source}?`,
    `This will remove ${count} word${count !== 1 ? "s" : ""}. This action cannot be undone.`,
  );

  if (!confirmed) return;

  if (currentSection === "favorites") {
    getFavorites().forEach((f) => removeFavorite(f.word));
  } else {
    clearHistory();
  }
  refreshCards();
  showToast(`All ${source} cleared`, "success");
});

/* --- theme --- */
themeBtns.forEach((btn) =>
  btn.addEventListener("click", () => applyTheme(btn.dataset.theme)),
);

matchMedia("(prefers-color-scheme:dark)").addEventListener("change", () => {
  if (getTheme() === "system") applyTheme("system");
});

/* --- global keyboard --- */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (indexOverlay.classList.contains("active")) closeIndex();
    if (sortOptions.classList.contains("open")) {
      sortOptions.classList.remove("open");
      sortTrigger.setAttribute("aria-expanded", "false");
    }
    hideSuggestions(suggestionsList);
    closeMobileSidebar();
  }

  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
});

/* ==============================================================
   INIT
   ============================================================== */
(function init() {
  applyTheme(getTheme());

  if (window.innerWidth > 768 && getSidebarState() === "collapsed")
    sidebar.classList.add("collapsed");

  if (currentView === "list") {
    cardsContainer.classList.add("list-view");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
    listBtn.setAttribute("aria-pressed", "true");
    gridBtn.setAttribute("aria-pressed", "false");
  }

  const labels = {
    recent: "Recent First",
    alpha: "Alphabetical (A-Z)",
    oldest: "Oldest First",
  };
  currentSortEl.textContent = labels[currentSortType] ?? "Recent First";
  sortOptions.querySelectorAll(".option").forEach((o) => {
    const sel = o.dataset.value === currentSortType;
    o.classList.toggle("selected", sel);
    o.setAttribute("aria-selected", sel);
  });

  refreshCards();
})();
