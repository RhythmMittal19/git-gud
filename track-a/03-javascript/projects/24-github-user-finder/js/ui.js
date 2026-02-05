// ═══════════════════════════════════════════════════════════════════════════
// UI.JS - UI component functions (modals, toasts, dropdowns)
// ═══════════════════════════════════════════════════════════════════════════

console.log("✅ ui.js loaded");

/* FUNCTIONS */

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");

    document.body.style.overflow = "hidden"; // Prevent the background from scrolling while looking at the modal
  }
}

function closeAllModals() {
  const activeModals = document.querySelectorAll(".modal-overlay.active");
  activeModals.forEach((modal) => modal.classList.remove("active"));
  document.body.style.overflow = "";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    const activeModals = document.querySelectorAll(".modal-overlay.active");
    if (activeModals.length === 0) {
      document.body.style.overflow = "";
    }
  }
}

/* FILTER / SORT */

function toggleDropdown(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const isOpen = container.classList.contains("open");

  // Close all other dropdowns first
  closeAllDropdowns();

  // If it wasn't open before, open it now
  if (!isOpen) {
    container.classList.add("open");
  }
}

function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-container.open").forEach((dropdown) => {
    dropdown.classList.remove("open");
  });
}

/* TOAST LOGIC */

/*
 * Creates and shows a temporary notification
 * @param {string} message - The text to display
 * @param {string} type - success | error | info | warning
 */

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  // 1. Create the toast element
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  // 2. Determine the icon based on type
  const icons = {
    success: "check_circle",
    error: "error",
    info: "info",
    warning: "warning",
  };

  // 3. Build the inner HTML
  toast.innerHTML = `
    <span class="material-symbols-outlined toast-icon">${icons[type]}</span>
    <div class="toast-content">
      <p class="toast-message">${message}</p>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">
      <span class="material-symbols-outlined">close</span>
    </button>
    <div class="toast-progress"></div>
  `;

  // 4. Add to screen
  container.appendChild(toast);

  // 5. Automatically remove after duration
  setTimeout(() => {
    toast.classList.add("leaving");
    // Wait for the slide-out animation to finish before deleting the DOM node
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, APP_CONFIG.TOAST_DURATION);
}

/* RIPPLE EFFECT */

/**
 * Creates a visual ripple effect at a mouse position
 */
function createRipple(e) {
  const container = document.getElementById("rippleContainer");
  if (!container) return;

  const ripple = document.createElement("div");
  ripple.className = "ripple";

  // Position it exactly where the user clicked
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;

  container.appendChild(ripple);

  // Clean up the DOM after animation
  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}
