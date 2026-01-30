/*

STEP 1: Grab DOM elements
├── #hamburger (the button)
├── #navMenu (the menu)
├── #overlay (dark background)
└── #menuStatus (status text)

*/

let hamburger = document.getElementById("hamburger");
let navMenu = document.getElementById("navMenu");
let overlay = document.getElementById("overlay");
let menuStatus = document.getElementById("menuStatus");

/*
STEP 2: Add click listener to #hamburger
│
└── When clicked:
    ├── Toggle 'active' class on hamburger (animates to X)
    ├── Toggle 'active' class on navMenu (slides in)
    ├── Toggle 'active' class on overlay (shows backdrop)
    │
    └── Update status text:
        ├── Check if menu has 'active' class
        ├── If yes → "Open" + add 'open' class to status
        └── If no → "Closed" + remove 'open' class

*/

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuStatus.classList.add("open");
    menuStatus.textContent = "Open"
  } else {
    menuStatus.classList.remove("open");
    menuStatus.textContent = "Closed"
  }
});

/*
STEP 3 (BONUS): Click overlay to close
│
└── Add click listener to #overlay
    ├── Remove 'active' from hamburger
    ├── Remove 'active' from navMenu
    ├── Remove 'active' from overlay
    └── Update status to "Closed"

*/

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
  menuStatus.classList.remove("open");
  menuStatus.textContent = "Closed";
});
