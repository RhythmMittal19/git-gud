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
  const currentHistory = getHistory();
  let filteredHistory = currentHistory.filter((item) => item.login !== user);
}

function removeFromHistory() {}

function clearHistory() {}

function getTheme() {}

function setTheme() {}

function toggleTheme() {}
