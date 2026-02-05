export const API_CONFIG = {
  BASE_URL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
  CACHE_TTL: 1000 * 60 * 30, // 30 minutes
  TIMEOUT: 8000,
};

export const STORAGE_KEYS = {
  HISTORY: "dictionarius_history",
  FAVORITES: "dictionarius_favorites",
  THEME: "dictionarius_theme",
  SIDEBAR: "dictionarius_sidebar",
  VIEW: "dictionarius_view",
  SORT: "dictionarius_sort",
};

export const DOM = {
  SEARCH_FORM: "#search-form",
  SEARCH_INPUT: "#search-input",
  SEARCH_RESULT: "#main-definition",
  SUGGESTIONS_LIST: "#suggestions-list",

  CARDS_CONTAINER: "#cards-container",
  GRID_SECTION: "#grid-section",

  SIDEBAR: "#sidebar",
  TOGGLE_SIDEBAR: "#toggle-sidebar",
  SIDEBAR_OVERLAY: "#sidebar-overlay",
  MOBILE_MENU_BTN: "#mobile-menu-btn",
  CLOSE_SIDEBAR_MOBILE: "#close-sidebar-mobile",

  MENU_ITEMS: ".menu-item",

  BTN_GRID: "#btn-grid",
  BTN_LIST: "#btn-list",

  SORT_TRIGGER: "#sort-trigger",
  SORT_OPTIONS: "#sort-options",
  CURRENT_SORT: "#current-sort",

  THEME_BTNS: ".theme-btn",

  INDEX_OVERLAY: "#index-overlay",
  CLOSE_INDEX_BTN: "#close-index-btn",
  ALPHABET_NAV: "#alphabet-nav",
  INDEX_CONTENT: "#index-content",

  CLEAR_HISTORY_BTN: "#clear-history-btn",
  TOAST_CONTAINER: "#toast-container",
  LIVE_REGION: "#live-region",
};

export const WOTD_WORDS = [
  "serendipity",
  "ephemeral",
  "eloquent",
  "resilience",
  "luminous",
  "enigma",
  "ethereal",
  "cascade",
  "paradigm",
  "quintessential",
  "ubiquitous",
  "benevolent",
  "mellifluous",
  "ineffable",
  "sanguine",
  "evanescent",
  "labyrinth",
  "zenith",
  "nebulous",
  "perspicacious",
  "capricious",
  "diaphanous",
  "petrichor",
  "sonorous",
  "verdant",
  "incandescent",
  "halcyon",
  "numinous",
  "aplomb",
  "redolent",
  "vivacious",
];

export const STARTER_WORDS = [
  "curious",
  "wonder",
  "dream",
  "journey",
  "harmony",
  "reverie",
  "cosmos",
  "velvet",
];
