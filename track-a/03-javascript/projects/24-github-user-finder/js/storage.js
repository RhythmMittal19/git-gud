// ═══════════════════════════════════════════════════════════════════════════
// STORAGE.JS - LocalStorage functions
// ═══════════════════════════════════════════════════════════════════════════

console.log("✅ storage.js loaded");

/* FUNCTIONS */

function getHistory() {
  return localStorage.getItem(STORAGE_KEYS.HISTORY)
    ? JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY))
    : [];
}

function saveToHistory(user) {
  const history = getHistory();

  const cleanHistory = history.filter((item) => item.login !== user.login);
  cleanHistory.unshift(user);

  const recentHistory = cleanHistory.slice(0, APP_CONFIG.MAX_HISTORY_ITEMS);

  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(recentHistory));
}

function removeFromHistory(user) {
  const history = getHistory();

  const cleanHistory = history.filter((item) => item.login !== user);

  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(cleanHistory));
}

function clearHistory() {
  localStorage.removeItem(STORAGE_KEYS.HISTORY);
}

function getTheme() {
  return localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
}

function setTheme(theme) {
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
}

function toggleTheme() {
  const current = getTheme();
  const newTheme = current === "dark" ? "light" : "dark";
  setTheme(newTheme);
  return newTheme;
}
