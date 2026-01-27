/*

STEP 1: Grab DOM elements
├── #minutesInput
├── #secondsInput
├── #display
├── #status
├── #startBtn
├── #pauseBtn
└── #resetBtn

*/

let minutesInput = document.getElementById("minutesInput");
let secondsInput = document.getElementById("secondsInput");
let display = document.getElementById("display"); //timer
let statusText = document.getElementById("status"); //text "ready to start"
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");

/*

STEP 2: Create variables for state
├── totalSeconds → 0 (total countdown time)
├── remainingSeconds → 0 (current time left)
└── timerInterval → null (stores the interval ID)

*/

let totalSeconds = 0;
let remainingSeconds = 0;
let timerInterval = null;

/*

STEP 3: Helper function to format time
│
└── Function: formatTime(seconds)
    ├── Calculate minutes → Math.floor(seconds / 60)
    ├── Calculate secs → seconds % 60
    ├── Pad both with leading zeros if needed
    └── Return "MM:SS" string

*/

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

/*

STEP 4: Helper function to update display
│
└── Function: updateDisplay()
    ├── Set display.textContent → formatTime(remainingSeconds)
    │
    ├── If remainingSeconds <= 10 AND remainingSeconds > 0
    │   └── Add 'warning' class to display
    ├── Else
    │   └── Remove 'warning' class
    │
    └── If remainingSeconds === 0
        └── Add 'done' class to display

*/

function updateDisplay() {
  display.textContent = formatTime(remainingSeconds);

  if (remainingSeconds <= 10 && remainingSeconds > 0) {
    display.classList.add("warning");
  } else {
    display.classList.remove("warning");
  }
  if (remainingSeconds === 0) {
    display.classList.add("done");
  }
}

/*

STEP 5: Start button logic
│
└── When #startBtn clicked:
    │
    ├── If timerInterval is NOT null → return (already running)
    │
    ├── If remainingSeconds === 0 (fresh start)
    │   ├── Get minutes from input (or 0 if empty)
    │   ├── Get seconds from input (or 0 if empty)
    │   ├── Calculate totalSeconds → (minutes * 60) + seconds
    │   ├── Set remainingSeconds → totalSeconds
    │   └── If totalSeconds === 0 → return (nothing to count)
    │
    ├── Update status → "Running..." + add 'running' class
    ├── Remove 'paused' and 'finished' classes from status
    │
    └── Start interval (runs every 1000ms):
        ├── Decrement remainingSeconds by 1
        ├── Call updateDisplay()
        │
        └── If remainingSeconds === 0:
            ├── Call clearInterval(timerInterval)
            ├── Set timerInterval → null
            ├── Update status → "Time's up!" + add 'finished' class
            └── Remove 'running' class from status

*/

startBtn.addEventListener("click", () => {
  if (!(timerInterval === null)) return;

  if (remainingSeconds === 0) {
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;
    totalSeconds = minutes * 60 + seconds;
    remainingSeconds = totalSeconds;
    if (totalSeconds === 0) return;
  }

  statusText.textContent = "Running...";
  statusText.classList.add("running");
  statusText.classList.remove("paused", "finsihed");

  timerInterval = setInterval(() => {
    remainingSeconds--;
    updateDisplay();

    if (remainingSeconds === 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      statusText.textContent = "Time's up!";
      statusText.classList.add("finished");
      statusText.classList.remove("running");
    }
  }, 1000);
});

/*

STEP 6: Pause button logic
│
└── When #pauseBtn clicked:
    ├── If timerInterval is null → return (nothing to pause)
    ├── Call clearInterval(timerInterval)
    ├── Set timerInterval → null
    ├── Update status → "Paused" + add 'paused' class
    └── Remove 'running' class from status

*/

pauseBtn.addEventListener("click", () => {
  if (timerInterval === null) return;

  clearInterval(timerInterval);
  timerInterval = null;
  statusText.textContent = "Paused";
  statusText.classList.add("paused");
  statusText.classList.remove("running");
});

/*

STEP 7: Reset button logic
│
└── When #resetBtn clicked:
    ├── Call clearInterval(timerInterval)
    ├── Set timerInterval → null
    ├── Set remainingSeconds → 0
    ├── Set display → "00:00"
    ├── Remove all classes from display (warning, done)
    ├── Update status → "Ready to start"
    ├── Remove all status classes
    └── Clear both input fields

*/

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  remainingSeconds = 0;
  display.textContent = "00:00";
  display.classList.remove("warning", "done");
  statusText.textContent = "Ready to start";
  statusText.classList.remove("running", "paused", "finished");
  minutesInput.value = "";
  secondsInput.value = "";
});
