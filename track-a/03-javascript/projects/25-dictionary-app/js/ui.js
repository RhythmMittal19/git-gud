import { STARTER_WORDS } from "./config.example.js";
import { escapeHTML, timeAgo, highlightMatch } from "./utils.js";
import { isFavorite } from "./storage.js";

/* =================================================================
   DEFINITION
   ================================================================= */

/**
 * @param {object}      data
 * @param {HTMLElement}  container
 * @param {object}      callbacks  { onFav, onShare, onSynonymClick }
 */
export function displayDefinition(data, container, callbacks = {}) {
  container.classList.remove("hidden");
  container.innerHTML = "";

  /* header */
  const header = div("def-header");

  const info = div("word-info");
  info.appendChild(txt("h2", data.word, "word-title"));
  if (data.phonetic) info.appendChild(txt("span", data.phonetic, "phonetics"));
  header.appendChild(info);

  /* action buttons */
  const actions = div("def-actions");

  if (data.audioUrl) {
    const audioBtn = el("button", "audio-btn");
    audioBtn.setAttribute("aria-label", "Play pronunciation");
    audioBtn.innerHTML = speakerSVG;
    audioBtn.addEventListener("click", () => new Audio(data.audioUrl).play());
    actions.appendChild(audioBtn);
  }

  /* favorite button */
  const favBtn = el("button", "fav-btn");
  if (isFavorite(data.word)) favBtn.classList.add("active");
  favBtn.setAttribute("aria-label", "Toggle favorite");
  favBtn.innerHTML = heartSVG;
  favBtn.addEventListener("click", () => {
    favBtn.classList.toggle("active");
    callbacks.onFav?.(data, favBtn.classList.contains("active"));
  });
  actions.appendChild(favBtn);

  /* share button */
  const shareBtn = el("button", "share-btn");
  shareBtn.setAttribute("aria-label", "Share this word");
  shareBtn.innerHTML = shareSVG;
  shareBtn.addEventListener("click", () => callbacks.onShare?.(data));
  actions.appendChild(shareBtn);

  header.appendChild(actions);
  container.appendChild(header);

  /* meanings */
  const meanings = div("meanings-container");

  data.meanings.forEach((m) => {
    const group = div("meaning-group");
    group.appendChild(txt("span", m.partOfSpeech, "pos-tag"));

    m.definitions.forEach((d) => {
      const item = div("definition-item");
      item.appendChild(txt("p", d.definition, "def-text"));
      if (d.example)
        item.appendChild(txt("p", `"${d.example}"`, "example-text"));
      group.appendChild(item);
    });

    /* clickable synonyms */
    if (m.synonyms?.length) {
      const row = div("word-chips-row");
      row.appendChild(txt("span", "Synonyms", "chips-label"));
      m.synonyms.slice(0, 8).forEach((s) => {
        const chip = el("button", "word-chip");
        chip.textContent = s;
        chip.addEventListener("click", () => callbacks.onSynonymClick?.(s));
        row.appendChild(chip);
      });
      group.appendChild(row);
    }

    /* clickable antonyms */
    if (m.antonyms?.length) {
      const row = div("word-chips-row");
      row.appendChild(txt("span", "Antonyms", "chips-label"));
      m.antonyms.slice(0, 6).forEach((a) => {
        const chip = el("button", "word-chip antonym");
        chip.textContent = a;
        chip.addEventListener("click", () => callbacks.onSynonymClick?.(a));
        row.appendChild(chip);
      });
      group.appendChild(row);
    }

    meanings.appendChild(group);
  });

  container.appendChild(meanings);

  /* source */
  if (data.sourceUrls?.length) {
    const src = div("source-row");
    src.innerHTML = `<span class="source-label">Source</span>
      <a class="source-link" href="${escapeHTML(data.sourceUrls[0])}"
         target="_blank" rel="noopener">${escapeHTML(data.sourceUrls[0])}</a>`;
    container.appendChild(src);
  }

  container.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* =================================================================
   LOADING SKELETON
   ================================================================= */

export function showLoading(container) {
  container.classList.remove("hidden");
  container.innerHTML = `
    <div class="skeleton-wrapper">
      <div class="skeleton-line title"></div>
      <div class="skeleton-line short"></div>
      <div style="height:1.5rem"></div>
      <div class="skeleton-line long"></div>
      <div class="skeleton-line medium"></div>
      <div class="skeleton-line long"></div>
      <div class="skeleton-line short"></div>
    </div>`;
}

/* =================================================================
   ERROR
   ================================================================= */

export function showError(message, container) {
  container.classList.remove("hidden");
  container.innerHTML = `
    <div class="error-state">
      <h2>😕 Oops!</h2>
      <p>${escapeHTML(message)}</p>
    </div>`;
}

/* =================================================================
   HISTORY CARDS  (with staggered animation + time-ago + fav badge)
   ================================================================= */

/**
 * @param {Array}       list
 * @param {HTMLElement}  container
 * @param {Function}     onStarterClick  called when a starter chip is clicked
 */
export function displayHistory(list, container, onStarterClick) {
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = emptyState(onStarterClick);
    /* wire starter chips after insert */
    if (onStarterClick) {
      container
        .querySelectorAll(".starter-chip")
        .forEach((chip) =>
          chip.addEventListener("click", () =>
            onStarterClick(chip.dataset.word),
          ),
        );
    }
    return;
  }

  const frag = document.createDocumentFragment();
  list.forEach((w, i) => {
    const card = createCard(w, i);
    frag.appendChild(card);
  });
  container.appendChild(frag);
}

/* =================================================================
   SUGGESTIONS  (autocomplete dropdown)
   ================================================================= */

/**
 * @param {Array}       matches   [{word, partOfSpeech}]
 * @param {string}      query
 * @param {HTMLElement}  listEl
 */
export function showSuggestions(matches, query, listEl) {
  listEl.innerHTML = "";

  if (!matches.length) {
    listEl.classList.remove("open");
    return;
  }

  matches.forEach((m, i) => {
    const li = document.createElement("li");
    li.className = "suggestion-item";
    li.setAttribute("role", "option");
    li.dataset.word = m.word;
    if (i === 0) li.classList.add("active");
    li.innerHTML = `
      <svg class="suggestion-icon" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
      <span class="suggestion-word">${highlightMatch(m.word, query)}</span>
      ${m.partOfSpeech ? `<span class="suggestion-pos">${escapeHTML(m.partOfSpeech)}</span>` : ""}`;
    listEl.appendChild(li);
  });

  listEl.classList.add("open");
}

export function hideSuggestions(listEl) {
  listEl.classList.remove("open");
  listEl.innerHTML = "";
}

/* =================================================================
   INDEX OVERLAY
   ================================================================= */

export function renderIndex(history, contentEl, navEl) {
  const grouped = {};
  history.forEach((item) => {
    const letter = item.word[0].toUpperCase();
    (grouped[letter] ??= []).push(item);
  });

  Object.values(grouped).forEach((arr) =>
    arr.sort((a, b) => a.word.localeCompare(b.word)),
  );

  navEl.innerHTML = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  [...alphabet].forEach((L) => {
    const btn = document.createElement("button");
    btn.className = "alpha-link";
    btn.textContent = L;
    if (grouped[L]) {
      btn.addEventListener("click", () => {
        contentEl
          .querySelector(`#letter-${L}`)
          ?.scrollIntoView({ behavior: "smooth" });
        navEl
          .querySelectorAll(".alpha-link")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    } else {
      btn.classList.add("disabled");
    }
    navEl.appendChild(btn);
  });

  contentEl.innerHTML = "";
  if (!history.length) {
    contentEl.innerHTML = `<div class="empty-state"><h3>No words yet</h3>
      <p>Search for words to build your index</p></div>`;
    return;
  }

  const wrap = div("dictionary-index-list");
  Object.keys(grouped)
    .sort()
    .forEach((L) => {
      const sec = div("letter-section");
      sec.id = `letter-${L}`;
      sec.innerHTML = `<h3 class="letter-header">${L}</h3>`;
      wrap.appendChild(sec);
      grouped[L].forEach((item) => {
        const pos = item.meanings?.[0]?.partOfSpeech || "";
        const def = item.meanings?.[0]?.definitions?.[0]?.definition || "";
        const row = div("dictionary-entry");
        row.dataset.word = item.word;
        row.innerHTML = `
          <span class="entry-word">${escapeHTML(item.word)}</span>
          <span class="entry-pos">${escapeHTML(pos)}</span>
          <span class="entry-def">${escapeHTML(def)}</span>`;
        wrap.appendChild(row);
      });
    });
  contentEl.appendChild(wrap);
}

/* =================================================================
   CONFIRM DIALOG
   ================================================================= */

export function showConfirm(title, message) {
  return new Promise((resolve) => {
    const backdrop = div("confirm-backdrop");
    backdrop.innerHTML = `
      <div class="confirm-dialog">
        <h3>${escapeHTML(title)}</h3>
        <p>${escapeHTML(message)}</p>
        <div class="confirm-actions">
          <button class="confirm-cancel">Cancel</button>
          <button class="confirm-danger">Delete All</button>
        </div>
      </div>`;

    document.body.appendChild(backdrop);

    const cancel = backdrop.querySelector(".confirm-cancel");
    const confirm = backdrop.querySelector(".confirm-danger");

    const close = (result) => {
      backdrop.remove();
      resolve(result);
    };

    cancel.addEventListener("click", () => close(false));
    confirm.addEventListener("click", () => close(true));
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) close(false);
    });
    /* trap focus */
    confirm.focus();
  });
}

/* =================================================================
   HELPERS (private)
   ================================================================= */

function el(tag, cls) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  return n;
}
const div = (cls) => el("div", cls);
function txt(tag, text, cls) {
  const n = el(tag, cls);
  n.textContent = text;
  return n;
}

function createCard(w, index) {
  const card = div("word-card");
  card.dataset.word = w.word;
  card.style.setProperty("--i", index);

  const pos = w.meanings?.[0]?.partOfSpeech || "";
  const def = w.meanings?.[0]?.definitions?.[0]?.definition || "";
  const fav = isFavorite(w.word);
  const ago = w.timestamp ? timeAgo(w.timestamp) : "";

  card.innerHTML = `
    ${fav ? `<span class="fav-indicator">${heartSmallSVG}</span>` : ""}
    <button class="delete-btn" data-delete="${escapeHTML(w.word)}"
            aria-label="Remove ${escapeHTML(w.word)}">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
    <div class="card-body">
      <h3 class="card-title">${escapeHTML(w.word)}</h3>
      <p class="card-subtitle">${escapeHTML(def)}</p>
      ${ago ? `<span class="card-meta">${ago}</span>` : ""}
    </div>
    <hr class="divider"/>
    <div class="card-footer">
      <span class="pill"><span class="dot"></span>${escapeHTML(pos)}</span>
    </div>`;
  return card;
}

function emptyState(hasCallback) {
  const chips = STARTER_WORDS.map(
    (w) =>
      `<button class="starter-chip" data-word="${escapeHTML(w)}">${escapeHTML(w)}</button>`,
  ).join("");

  return `
    <div class="empty-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
      <h3>No words yet</h3>
      <p>Search for a word — or try one of these</p>
      ${hasCallback ? `<div class="starter-chips">${chips}</div>` : ""}
    </div>`;
}

/* ---- inline SVGs ---- */

const speakerSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;

const heartSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;

const heartSmallSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
  stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;

const shareSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/>
  <circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`;
