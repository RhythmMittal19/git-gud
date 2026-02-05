const MAX_TOASTS = 3;

const ICONS = {
  success: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  error: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  info: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
};

/**
 * Show a toast notification.
 * @param {string} message
 * @param {"success"|"error"|"info"} type
 * @param {number} duration  ms
 */
export function showToast(message, type = "success", duration = 3000) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  /* limit stack */
  while (container.children.length >= MAX_TOASTS) {
    container.firstElementChild.remove();
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.style.setProperty("--toast-duration", `${duration}ms`);
  toast.innerHTML = `
    ${ICONS[type] || ""}
    <span>${message}</span>
    <div class="toast-progress"></div>`;

  container.appendChild(toast);

  /* auto-dismiss */
  const timer = setTimeout(() => dismiss(toast), duration);

  /* click to dismiss early */
  toast.addEventListener("click", () => {
    clearTimeout(timer);
    dismiss(toast);
  });
}

function dismiss(el) {
  el.classList.add("removing");
  el.addEventListener("animationend", () => el.remove(), { once: true });
}
