/*

STEP 1: Grab DOM elements
├── #openBtn (opens the modal)
├── #closeBtn (the X button)
├── #gotItBtn (confirm button inside modal)
├── #modal (the modal box)
└── #overlay (dark background)

*/

let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let gotItBtn = document.getElementById("gotItBtn");
let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay");

/*

STEP 2: Create OPEN function
│
└── Function: openModal()
    ├── Add 'active' class to modal
    └── Add 'active' class to overlay

*/

function openModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

/*
STEP 3: Create CLOSE function
│
└── Function: closeModal()
    ├── Remove 'active' class from modal
    └── Remove 'active' class from overlay

*/

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

/*

STEP 4: Attach event listeners
│
├── #openBtn click → call openModal()
├── #closeBtn click → call closeModal()
├── #gotItBtn click → call closeModal()
└── #overlay click → call closeModal()

*/

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
gotItBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/*

BONUS: Close with Escape key
│
└── Listen for 'keydown' on document
    └── If key is 'Escape' AND modal has 'active' class
        └── Call closeModal()

*/

document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});
