/**
 * Debounce: delays invocation until `ms` after the last call.
 */
export function debounce(fn, ms = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

/**
 * Escape HTML entities to prevent XSS.
 */
export function escapeHTML(str) {
  const el = document.createElement("span");
  el.textContent = str ?? "";
  return el.innerHTML;
}

/**
 * Human-readable relative timestamp.
 */
export function timeAgo(ts) {
  const sec = Math.floor((Date.now() - ts) / 1000);
  if (sec < 60) return "just now";
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hrs = Math.floor(min / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(ts).toLocaleDateString();
}

/**
 * Announce a message to screen readers via an aria-live region.
 */
export function announce(msg) {
  const region = document.getElementById("live-region");
  if (region) {
    region.textContent = "";
    requestAnimationFrame(() => (region.textContent = msg));
  }
}

/**
 * Highlight the matching portion of `text` for the given `query`.
 */
export function highlightMatch(text, query) {
  if (!query) return escapeHTML(text);
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return escapeHTML(text);
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);
  return `${escapeHTML(before)}<span class="suggestion-match">${escapeHTML(match)}</span>${escapeHTML(after)}`;
}
