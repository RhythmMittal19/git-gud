/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🆕 NEW CONCEPT: CSS Variables with JavaScript
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CSS Variables are defined in CSS:
    --bg-primary: #ffffff;

Change them with JS:
    document.documentElement.style.setProperty('--bg-primary', '#000');

Or better: Use data attributes!
    <html data-theme="dark" data-accent="blue">

CSS automatically applies based on attribute:
    [data-theme="dark"] { --bg-primary: #0f172a; }


*/

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1: Define Constants
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── THEME_KEY = "theme" (for localStorage)
├── ACCENT_KEY = "accent" (for localStorage)
├── DEFAULT_THEME = "light"
└── DEFAULT_ACCENT = "purple"

*/

const THEME_KEY = "theme";
const ACCENT_KEY = "accent";
const DEFAULT_THEME = "light";
const DEFAULT_ACCENT = "purple";

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2: Grab Elements
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── Theme toggle button
├── Palette grid (container for accent buttons)
├── All palette buttons
└── HTML element (document.documentElement)

*/

let themeBtn = document.getElementById("themeToggle");
let paletteGrid = document.getElementById("paletteGrid");
let paletteBtns = document.querySelectorAll(".palette-btn");
let html = document.documentElement;

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3: Create "getSavedTheme" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: Get theme from localStorage or use default

├── TRY to get from localStorage
├── IF exists → return it
└── ELSE → return DEFAULT_THEME

*/

function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4: Create "getSavedAccent" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: Get accent from localStorage or use default

├── TRY to get from localStorage
├── IF exists → return it
└── ELSE → return DEFAULT_ACCENT

*/

function getSavedAccent() {
  return localStorage.getItem(ACCENT_KEY) || DEFAULT_ACCENT;
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5: Create "applyTheme" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: Apply theme to the page

├── Receive theme as parameter ("light" or "dark")
├── Set data-theme attribute on <html>
│   └── document.documentElement.setAttribute("data-theme", theme)
└── Save to localStorage

*/

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 6: Create "applyAccent" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: Apply accent color to the page

├── Receive accent as parameter ("purple", "blue", etc.)
├── Set data-accent attribute on <html>
│   └── document.documentElement.setAttribute("data-accent", accent)
├── Save to localStorage
├── Remove "active" class from all palette buttons
└── Add "active" class to the clicked button

*/

function applyAccent(accent) {
  html.setAttribute("data-accent", accent);
  localStorage.setItem(ACCENT_KEY, accent);

  paletteBtns.forEach((palette) => {
    palette.classList.remove("active");

    if (palette.dataset.accent === accent) {
      palette.classList.add("active");
    }
  });
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 7: Create "toggleTheme" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: Switch between light and dark

├── Get current theme from <html> data-theme attribute
├── IF current is "light"
│   └── Apply "dark"
└── ELSE
    └── Apply "light"

*/

function toggleTheme() {
  const currentTheme = html.getAttribute("data-theme");

  if ((currentTheme === "light")) applyTheme("dark");
  else applyTheme("light");
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 8: Create "initializeTheme" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: Set up theme when page loads

├── Get saved theme (or default)
├── Get saved accent (or default)
├── Apply theme
├── Apply accent
└── Mark correct palette button as active

*/

function initializeTheme() {
  const saveTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
  const savedAccent = localStorage.getItem(ACCENT_KEY) || DEFAULT_ACCENT;

  applyTheme(saveTheme);
  applyAccent(savedAccent);
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 9: Add Event Listeners
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

THEME TOGGLE:
└── On click → call toggleTheme()

PALETTE GRID (Event Delegation):
├── On click → check if palette-btn was clicked
├── Get data-accent from button
└── Call applyAccent(accent)
*/

themeBtn.addEventListener("click", toggleTheme);
paletteGrid.addEventListener("click", (ev) => {
  const paletteBtn = ev.target.closest(".palette-btn");

  if (!paletteBtn) return;

  const accent = paletteBtn.dataset.accent;
  applyAccent(accent);
});

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 10: Initialize
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
└── Call initializeTheme()

*/

initializeTheme();
