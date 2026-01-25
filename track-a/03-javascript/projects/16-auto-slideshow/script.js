/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1: Grab all elements
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── All slides (collection)
├── All dots (collection)
├── Previous button
├── Next button
└── Play/Pause button

*/

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let playpauseBtn = document.getElementById("playPauseBtn");

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2: Set up state variables
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── currentIndex = 0 (tracks which slide is showing)
├── isPlaying = true (tracks auto-play state)
└── intervalId = null (stores interval reference for clearing)

*/

let currentIndex = 0;
let isPlaying = true;
let intervalId = null;

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3: Create "showSlide" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: Display specific slide by index

├── Remove "active" class from ALL slides
├── Remove "active" class from ALL dots
├── Add "active" class to slide at given index
└── Add "active" class to dot at given index

*/

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4: Create "nextSlide" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── Increment currentIndex
├── IF currentIndex >= total slides
│   └── Reset to 0 (loop back to first)
└── Call showSlide(currentIndex)

*/

function nextSlide() {
  currentIndex++;

  if (currentIndex >= slides.length) currentIndex = 0;

  showSlide(currentIndex);
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5: Create "prevSlide" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── Decrement currentIndex
├── IF currentIndex < 0
│   └── Set to last slide index (total - 1)
└── Call showSlide(currentIndex)

*/

function prevSlide() {
  currentIndex--;

  if (currentIndex < 0) currentIndex = slides.length - 1;

  showSlide(currentIndex);
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 6: Create "startAutoPlay" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── Use setInterval to call nextSlide every 3 seconds
└── Store interval ID in intervalId variable

*/

function startAutoPlay() {
  intervalId = setInterval(() => {
    nextSlide();
  }, 3000);
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 7: Create "stopAutoPlay" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
└── Use clearInterval(intervalId) to stop

*/

function stopAutoPlay() {
  clearInterval(intervalId);
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 8: Create "togglePlayPause" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── IF isPlaying is true
│   ├── Stop auto-play
│   ├── Change button to ▶️
│   └── Set isPlaying = false
└── ELSE
    ├── Start auto-play
    ├── Change button to ⏸️
    └── Set isPlaying = true

*/

function togglePlayPause() {
  if (isPlaying === true) {
    stopAutoPlay();
    playpauseBtn.textContent = "▶️";
    isPlaying = false;
  } else {
    startAutoPlay();
    playpauseBtn.textContent = "⏸️";
    isPlaying = true;
  }
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 9: Add event listeners
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── Next button → call nextSlide
├── Prev button → call prevSlide
├── Play/Pause button → call togglePlayPause
└── Each dot → when clicked, show that slide index
    └── HINT: Use data-index attribute to get index

*/

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
playpauseBtn.addEventListener("click", togglePlayPause);
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.dataset.index);
    showSlide(currentIndex);
  });
});

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 10: Initialize
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
└── Call startAutoPlay() to begin slideshow on page load

*/

startAutoPlay();
