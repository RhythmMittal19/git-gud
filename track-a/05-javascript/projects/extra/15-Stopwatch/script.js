/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STOPWATCH - Complete Pseudocode
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1: Grab DOM elements
├── #display (shows HH:MM:SS)
├── #milliseconds (shows .ms)
├── #startBtn
├── #pauseBtn
├── #lapBtn
├── #resetBtn
└── #lapsList (ul for lap times)

*/

let display = document.getElementById("display");
let milliSeconds = document.getElementById("milliseconds");
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let lapBtn = document.getElementById("lapBtn");
let resetBtn = document.getElementById("resetBtn");
let lapList = document.getElementById("lapsList");

/*

STEP 2: Create state variables
├── elapsedTime → 0 (total milliseconds elapsed)
├── timerInterval → null (stores interval ID)
├── laps → [] (array to store lap times)
└── lastLapTime → 0 (time of last lap for calculating lap duration)

*/

let elapsedTime = 0;
let timerInterval = null;
let laps = [];
let lastLapTime = 0;

/*

STEP 3: Helper function to format time
│
└── Function: formatTime(totalMilliseconds)
    │
    ├── Calculate hours:
    │   └── Math.floor(totalMilliseconds / 3600000)
    │
    ├── Calculate minutes:
    │   └── Math.floor((totalMilliseconds % 3600000) / 60000)
    │
    ├── Calculate seconds:
    │   └── Math.floor((totalMilliseconds % 60000) / 1000)
    │
    ├── Calculate milliseconds:
    │   └── Math.floor((totalMilliseconds % 1000) / 10)
    │
    ├── Pad each value with leading zeros
    │   ├── hours → 2 digits
    │   ├── minutes → 2 digits
    │   ├── seconds → 2 digits
    │   └── ms → 2 digits
    │
    └── Return object: { display: "HH:MM:SS", ms: ".XX" }

*/

function formatTime(totalMilliseconds) {
  const hours = Math.floor(totalMilliseconds / 3600000);
  const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
  const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);

  const fHours = hours.toString().padStart(2, "0");
  const fMinutes = minutes.toString().padStart(2, "0");
  const fSeconds = seconds.toString().padStart(2, "0");
  const fMilliseconds = milliseconds.toString().padStart(2, "0");

  return {
    display: `${fHours}:${fMinutes}:${fSeconds}`,
    ms: `.${fMilliseconds}`,
  };
}

/*

STEP 4: Helper function to update display
│
└── Function: updateDisplay()
    ├── Get formatted time from formatTime(elapsedTime)
    ├── Set display.textContent → formatted.display
    └── Set milliseconds.textContent → formatted.ms

*/

function updateDisplay() {
  const fTime = formatTime(elapsedTime);
  display.textContent = fTime.display;
  milliSeconds.textContent = fTime.ms;
}

/*

STEP 5: Start button logic
│
└── When #startBtn clicked:
    │
    ├── If timerInterval is NOT null → return (already running)
    │
    ├── Add 'running' class to display
    │
    ├── Store current timestamp: startTime = Date.now() - elapsedTime
    │   (This handles resume after pause correctly)
    │
    └── Start interval (every 10ms for smooth milliseconds):
        ├── elapsedTime = Date.now() - startTime
        └── Call updateDisplay()

💡 NOTE: Using Date.now() is more accurate than incrementing
   because setInterval can drift over time!

*/

startBtn.addEventListener("click", () => {
  if (!(timerInterval === null)) return;

  display.classList.add("running");

  let startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
});

/*

STEP 6: Pause button logic
│
└── When #pauseBtn clicked:
    ├── If timerInterval is null → return (not running)
    ├── clearInterval(timerInterval)
    ├── Set timerInterval → null
    └── Remove 'running' class from display

*/

pauseBtn.addEventListener("click", () => {
  if (timerInterval === null) return;
  clearInterval(timerInterval);
  timerInterval = null;
  display.classList.remove("running");
});

/*

STEP 7: Lap button logic
│
└── When #lapBtn clicked:
    │
    ├── If elapsedTime === 0 → return (nothing to lap)
    │
    ├── Calculate lap duration:
    │   └── lapDuration = elapsedTime - lastLapTime
    │
    ├── Create lap object:
    │   └── { number: laps.length + 1, time: elapsedTime, duration: lapDuration }
    │
    ├── Push lap object to laps array
    │
    ├── Update lastLapTime → elapsedTime
    │
    └── Call renderLaps()

*/

lapBtn.addEventListener("click", () => {
  if (elapsedTime === 0) return;

  let lapDuration = elapsedTime - lastLapTime;
  const lap = {
    number: laps.length + 1,
    time: elapsedTime,
    duration: lapDuration,
  };

  laps.push(lap);
  lastLapTime = elapsedTime;
  renderLaps();
});

/*

STEP 8: Render laps function
│
└── Function: renderLaps()
    │
    ├── Clear lapsList innerHTML
    │
    ├── If laps.length === 0 → return
    │
    ├── Find best lap (shortest duration):
    │   └── Use Math.min(...laps.map(lap => lap.duration))
    │
    ├── Find worst lap (longest duration):
    │   └── Use Math.max(...laps.map(lap => lap.duration))
    │
    └── Loop through laps array (reversed for newest on top):
        │
        ├── Create <li> element with class "lap-item"
        │
        ├── If this lap's duration === bestTime AND laps.length > 1
        │   └── Add 'best' class
        │
        ├── If this lap's duration === worstTime AND laps.length > 1
        │   └── Add 'worst' class
        │
        ├── Set innerHTML:
        │   └── <span class="lap-number">Lap X</span>
        │       <span class="lap-time">XX:XX:XX.XX</span>
        │
        └── Append to lapsList

*/

function renderLaps() {
  lapList.innerHTML = "";

  if (laps.length === 0) return;

  const bestTime = Math.min(...laps.map((lap) => lap.duration));
  const worstTime = Math.max(...laps.map((lap) => lap.duration));

  [...laps].reverse().forEach((lap) => {
    const li = document.createElement("li");
    li.classList.add("lap-item");

    if (lap.duration === bestTime && laps.length > 1) {
      li.classList.add("best");
    }
    if (lap.duration === worstTime && laps.length > 1) {
      li.classList.add("worst");
    }

    const formatted = formatTime(lap.duration);

    li.innerHTML = `
      <span class="lap-number">Lap ${lap.number}</span>
      <span class="lap-time">${formatted.display}${formatted.ms}</span>
    `;

    lapList.appendChild(li);
  });
}

/*

STEP 9: Reset button logic
│
└── When #resetBtn clicked:
    ├── clearInterval(timerInterval)
    ├── Set timerInterval → null
    ├── Set elapsedTime → 0
    ├── Set lastLapTime → 0
    ├── Set laps → []
    ├── Update display → "00:00:00"
    ├── Update milliseconds → ".00"
    ├── Remove 'running' class from display
    └── Clear lapsList innerHTML

*/

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  lastLapTime = 0;
  laps = [];
  display.textContent = "00:00:00";
  milliSeconds.textContent = ".00";
  display.classList.remove("running");
  lapList.innerHTML = "";
});
