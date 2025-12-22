/*

STEP 1: Grab DOM elements
├── textarea#text-input (where user types)
├── span#current (shows current count)
└── span#maximum (shows max limit - optional)

STEP 2: Listen for "input" event on textarea
├── Fires on EVERY keystroke
├── Unlike "click", this tracks typing
└── Works for paste, delete, etc.

STEP 3: On each input, update the display
├── Get the length → textarea.value.length
├── Update span#current with that length
└── BONUS: Add warning/danger classes
    ├── 120+ chars → "warning" (yellow)
    ├── 140+ chars → "danger" (red)
    └── Below 120 → remove classes (green)

**HINT**

// Input event (fires every keystroke)
element.addEventListener("input", () => { });

// Remove multiple classes at once
element.classList.remove("warning", "danger");

*/

let inputTyped = document.getElementById("text-input");
let currentCount = document.getElementById("current");
let maxLimit = document.getElementById("maximum");

inputTyped.addEventListener("input", () => {
  let value = inputTyped.value.length;
  currentCount.textContent = value;

  currentCount.classList.remove("danger", "warning");

  if (value > 140) {
    currentCount.classList.add("danger");
  } else if (value > 120) {
    currentCount.classList.add("warning");
    currentCount.classList.remove("danger");
  }
  else {
    currentCount.classList.remove("danger", "warning")
  }
});
