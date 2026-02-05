import { STORAGE_KEYS } from "./config.example.js";

const MAX_HISTORY = 200;

/* ---- generic ---- */
function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch {
    /* storage full — silently fail */
  }
}

/* ============ History ============ */

export function getHistory() {
  return read(STORAGE_KEYS.HISTORY, []);
}

export function saveToHistory(wordData) {
  const list = getHistory();
  const idx = list.findIndex(
    (i) => i.word.toLowerCase() === wordData.word.toLowerCase(),
  );
  if (idx !== -1) list.splice(idx, 1);
  list.unshift(wordData);
  if (list.length > MAX_HISTORY) list.length = MAX_HISTORY;
  write(STORAGE_KEYS.HISTORY, list);
}

export function removeFromHistory(word) {
  write(
    STORAGE_KEYS.HISTORY,
    getHistory().filter((i) => i.word.toLowerCase() !== word.toLowerCase()),
  );
}

export function clearHistory() {
  write(STORAGE_KEYS.HISTORY, []);
}

/* ============ Favorites ============ */

export function getFavorites() {
  return read(STORAGE_KEYS.FAVORITES, []);
}

export function addFavorite(wordData) {
  const list = getFavorites();
  if (list.some((i) => i.word.toLowerCase() === wordData.word.toLowerCase()))
    return;
  list.unshift(wordData);
  write(STORAGE_KEYS.FAVORITES, list);
}

export function removeFavorite(word) {
  write(
    STORAGE_KEYS.FAVORITES,
    getFavorites().filter((i) => i.word.toLowerCase() !== word.toLowerCase()),
  );
}

export function isFavorite(word) {
  return getFavorites().some(
    (i) => i.word.toLowerCase() === word.toLowerCase(),
  );
}

/* ============ Preferences ============ */

export const getTheme = () =>
  localStorage.getItem(STORAGE_KEYS.THEME) || "system";
export const setTheme = (v) => localStorage.setItem(STORAGE_KEYS.THEME, v);

export const getSidebarState = () =>
  localStorage.getItem(STORAGE_KEYS.SIDEBAR) || "expanded";
export const setSidebarState = (v) =>
  localStorage.setItem(STORAGE_KEYS.SIDEBAR, v);

export const getView = () => localStorage.getItem(STORAGE_KEYS.VIEW) || "grid";
export const setView = (v) => localStorage.setItem(STORAGE_KEYS.VIEW, v);

export const getSort = () =>
  localStorage.getItem(STORAGE_KEYS.SORT) || "recent";
export const setSort = (v) => localStorage.setItem(STORAGE_KEYS.SORT, v);
