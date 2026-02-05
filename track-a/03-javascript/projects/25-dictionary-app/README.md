# Dictionarius

A modern, offline-capable dictionary web application built with vanilla
JavaScript. Search any English word, explore definitions, manage
favorites, and build a personal word index — all from a polished,
responsive interface with no frameworks or build tools required.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [API Reference](#api-reference)
- [Configuration](#configuration)
- [Browser Support](#browser-support)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Core

- **Word Search** — fetch definitions, phonetics, pronunciation audio,
  synonyms, antonyms, examples, and source links from the Free
  Dictionary API.
- **Search History** — every looked-up word is saved to localStorage
  with full definition data, surviving page reloads and browser restarts.
- **Favorites** — mark words with a heart icon; view them in a
  dedicated section.
- **A-Z Index** — full-screen overlay that groups all saved words
  alphabetically with sticky letter navigation.
- **Word of the Day** — a curated daily word that rotates through a
  built-in list based on the calendar date.

### User Experience

- **Autocomplete Suggestions** — as you type, matching words from your
  history appear in a dropdown with highlighted matches and keyboard
  navigation (Arrow keys + Enter).
- **Clickable Synonyms and Antonyms** — chips in the definition view
  that trigger a new search on click, enabling chain discovery.
- **Starter Words** — when history is empty, the app suggests a set of
  interesting words to get started.
- **Share** — uses the Web Share API on supported devices, falls back
  to clipboard copy.
- **Toast Notifications** — animated pill-style messages with progress
  bars for success, error, and info events.
- **Confirmation Dialogs** — promise-based modal before destructive
  actions like clearing all history.
- **Time-Ago Stamps** — cards display relative timestamps
  ("2h ago", "3d ago").

### Interface

- **Collapsible Sidebar** — toggles between full and icon-only mode on
  desktop; slide-in drawer with overlay on mobile.
- **Grid and List Views** — switch between card grid and compact list
  layouts.
- **Sorting** — order cards by Recent First, Oldest First, or
  Alphabetical (A-Z).
- **Theme System** — Light, Dark, and System (auto-detect OS
  preference) modes with live switching when the OS theme changes.
- **Skeleton Loading** — animated placeholder blocks appear during API
  fetches.
- **Staggered Card Animations** — cards enter the grid with cascading
  fade-in delays.
- **All preferences persist** — theme, sidebar state, view mode, and
  sort order are saved to localStorage.

### Technical

- **Zero dependencies** — no frameworks, no build step, no npm.
- **ES Modules** — clean `import`/`export` architecture across 7
  focused modules.
- **API Response Cache** — in-memory Map with 30-minute TTL to avoid
  redundant network requests.
- **Request Timeout** — AbortController cancels fetches that exceed 8
  seconds.
- **XSS Protection** — all user-supplied and API-supplied strings are
  escaped before insertion into HTML.
- **Debounced Input** — autocomplete filtering waits 150ms after the
  user stops typing.
- **Event Delegation** — single listeners on parent containers handle
  dynamically created cards and entries.

---

## Demo

Open `index.html` in any modern browser. No server required — the app
runs entirely client-side. For the API to work, you need an internet
connection.

If you want to serve it locally (recommended for ES module support in
some browsers):

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have npx)
npx serve .
```

Then open `http://localhost:8000` in your browser.

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome 90+, Firefox 90+, Safari 15+, Edge 90+)
- An internet connection (for the dictionary API)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/dictionarius.git
cd dictionarius
```

2. Open `index.html` directly in your browser, or start a local server
   as described above.

3. No build step, no package installation, no configuration needed.

### File Layout

```
dictionarius/
  index.html
  style.css
  js/
    config.js
    utils.js
    api.js
    storage.js
    toast.js
    ui.js
    app.js
```

---

## Project Structure

### config.js

Central configuration file. Contains API endpoint, localStorage key
names, DOM selector strings, timeout values, cache TTL, the Word of
the Day word list, and starter words for the empty state.

Changing a selector or storage key here automatically propagates
through the entire application.

### utils.js

Pure utility functions with no side effects and no DOM dependencies
(except `announce` which writes to the live region):

- `debounce(fn, ms)` — rate-limits function calls.
- `escapeHTML(str)` — converts special characters to HTML entities.
- `timeAgo(timestamp)` — converts Unix timestamps to human-readable
  relative strings.
- `announce(msg)` — updates the aria-live region for screen readers.
- `highlightMatch(text, query)` — wraps the matching substring in a
  styled span.

### api.js

Handles all communication with the Free Dictionary API:

- Maintains an in-memory `Map` cache with configurable TTL.
- Uses `AbortController` for request timeouts.
- Normalises the raw API response into a consistent internal shape.
- Returns deep clones to prevent cache mutation.

### storage.js

Abstraction layer over `localStorage`:

- History: get, save (with deduplication), remove, clear.
- Favorites: get, add, remove, check membership.
- Preferences: theme, sidebar state, view mode, sort order.
- Handles storage quota errors and corrupted data gracefully.

### toast.js

Self-contained toast notification system:

- Supports success, error, and info types with distinct colors and
  icons.
- Animated entrance and exit with CSS keyframes.
- Progress bar that visually counts down the auto-dismiss timer.
- Click to dismiss early.
- Limits the visible stack to 3 toasts.

### ui.js

All DOM rendering logic. This module receives data and callback
functions, and produces HTML. It never imports from `app.js`, which
prevents circular dependencies:

- `displayDefinition(data, container, callbacks)` — builds the full
  definition view with audio, favorite, share, synonyms, antonyms.
- `showLoading(container)` — renders a skeleton loading state.
- `showError(message, container)` — renders an error message.
- `displayHistory(list, container, onStarterClick)` — renders word
  cards with staggered animation, time-ago stamps, and favorite
  indicators.
- `showSuggestions(matches, query, listEl)` — renders autocomplete
  dropdown items with highlighted matches.
- `hideSuggestions(listEl)` — closes the autocomplete dropdown.
- `renderIndex(history, contentEl, navEl)` — builds the full A-Z
  index with grouped sections and alphabet navigation.
- `showConfirm(title, message)` — displays a modal confirmation
  dialog and returns a Promise that resolves to true or false.

### app.js

The orchestrator. This is the only module that knows about all other
modules. It:

1. Captures all DOM references at startup.
2. Defines business logic functions (search, favorite toggle, share).
3. Registers all event listeners.
4. Runs the initialization sequence.

---

## Architecture

```
  config.js ─────────────────────────────────┐
      |                                      |
  utils.js ──────────────────────────┐       |
      |                              |       |
  api.js (imports config)            |       |
      |                              |       |
  storage.js (imports config)        |       |
      |                              |       |
  toast.js (standalone)              |       |
      |                              |       |
  ui.js (imports config, utils,      |       |
         storage for isFavorite)     |       |
      |                              |       |
  app.js (imports all above) --------+-------+
```

Data flows in one direction:

```
User Action --> app.js --> api.js (fetch) --> storage.js (persist)
                       --> ui.js (render) --> DOM
                       --> toast.js (notify)
```

No module imports from `app.js`. This ensures there are no circular
dependencies and each module can be tested or replaced independently.

---

## API Reference

This application uses the
[Free Dictionary API](https://dictionaryapi.dev/):

```
GET https://api.dictionaryapi.dev/api/v2/entries/en/{word}
```

- Free, no authentication required.
- Returns JSON with word, phonetics, meanings, definitions, examples,
  synonyms, antonyms, and source URLs.
- Returns HTTP 404 for words not found.
- No rate limiting documented, but the app caches responses for 30
  minutes to be respectful.

---

## Configuration

All configurable values are in `js/config.js`:

| Constant               | Purpose                             | Default                       |
| ---------------------- | ----------------------------------- | ----------------------------- |
| `API_CONFIG.BASE_URL`  | Dictionary API endpoint             | Free Dictionary API           |
| `API_CONFIG.CACHE_TTL` | How long cached responses are valid | 30 minutes                    |
| `API_CONFIG.TIMEOUT`   | Maximum wait time for API response  | 8 seconds                     |
| `STORAGE_KEYS.*`       | localStorage key names              | Prefixed with `dictionarius_` |
| `WOTD_WORDS`           | Word of the Day rotation list       | 31 curated words              |
| `STARTER_WORDS`        | Words shown in empty state          | 8 words                       |

---

## Browser Support

| Browser | Minimum Version |
| ------- | --------------- |
| Chrome  | 90+             |
| Firefox | 90+             |
| Safari  | 15+             |
| Edge    | 90+             |

Required features: ES Modules, `structuredClone`, `AbortController`,
CSS Custom Properties, `localStorage`, optional chaining (`?.`),
nullish coalescing assignment (`??=`).

---

## Keyboard Shortcuts

| Shortcut           | Action                                              |
| ------------------ | --------------------------------------------------- |
| `Ctrl+K` / `Cmd+K` | Focus the search input                              |
| `Escape`           | Close any open overlay, dropdown, or sidebar        |
| `Arrow Down`       | Navigate to next autocomplete suggestion            |
| `Arrow Up`         | Navigate to previous autocomplete suggestion        |
| `Enter`            | Select the active suggestion, or submit the search  |
| `Tab`              | Standard focus navigation (skip link appears first) |

---

## Accessibility

- **Skip Link** — hidden link that appears on first Tab press, jumping
  past the sidebar to the search input.
- **ARIA Live Region** — announces search results and errors to screen
  readers without requiring focus change.
- **ARIA Attributes** — `aria-expanded` on dropdowns, `aria-selected`
  on options, `aria-pressed` on toggle buttons, `role="listbox"` and
  `role="option"` on custom selects and suggestions.
- **Focus Management** — confirmation dialogs auto-focus the action
  button; suggestions are keyboard-navigable.
- **Reduced Motion** — respects `prefers-reduced-motion: reduce` by
  disabling all animations and transitions.
- **Semantic HTML** — `<main>`, `<nav>`, `<aside>`, `<header>`,
  `<form>`, `<button>` used appropriately.

---

## Performance

- **No Build Step** — zero overhead from bundlers, transpilers, or
  framework runtimes.
- **Single DOM Update** — card rendering uses `DocumentFragment` to
  batch all insertions into one DOM operation.
- **Debounced Input** — autocomplete filtering runs at most once per
  150ms, not on every keystroke.
- **API Cache** — repeated lookups of the same word within 30 minutes
  return instantly from memory.
- **Event Delegation** — one click listener on the card container
  handles all card interactions, regardless of how many cards exist.
- **CSS Transitions** — all animations run on the compositor thread
  (transform, opacity) for 60fps performance.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Make your changes. Keep the zero-dependency philosophy.
4. Test in Chrome, Firefox, and Safari.
5. Verify keyboard navigation and screen reader announcements.
6. Submit a pull request with a clear description.

---

## License

This project is released under the MIT License. See the LICENSE file
for details.

---

Built with vanilla HTML, CSS, and JavaScript. No frameworks. No build
tools. Just the platform.
