/* STATE VARIABLES */
let totalSecondsRemaining = 0;
let isRunning = false;
let timerID = null;

/* DOCUMENT REFERENCES */
const minuteInput = document.getElementById("minutesInput");
const secondInput = document.getElementById("secondsInput");
const display = document.getElementById("display");
const statusColor = document.getElementById("status");
const start = document.getElementById("startBtn");
const pause = document.getElementById("pauseBtn");
const reset = document.getElementById("resetBtn");

/* FUNCTIONS */
function updateUI(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  display.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

/* HELPER FUNCTIONS */
function totalSeconds() {
  isRunning = true;
  const minutes = minuteInput.value || 0;
  const seconds = secondInput.value || 0;

  totalSecondsRemaining = Number(minutes) * 60 + Number(seconds);

  if (totalSecondsRemaining > 0) {
    if (totalSecondsRemaining === 0) {
      updateUI(totalSecondsRemaining);
      clearInterval(timerID);
      isRunning = false;
      statusColor.classList.add("finished");
    }
    statusColor.classList.add("running");
    timerID = setInterval(() => {
      updateUI(totalSecondsRemaining);
      totalSecondsRemaining--;
    }, 1000);
    return;
  }
}

/* EVENT LISTENERS */
start.addEventListener("click", (e) => {
  if (isRunning === false) totalSeconds();
  else return;
});
