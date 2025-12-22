/* STATE VARIABLES */

let count = 0;

/* DOCUMENT ELEMENTS */

let decreaseBtn = document.getElementById("btn-dec");
let increaseBtn = document.getElementById("btn-inc");
let resetBtn = document.getElementById("btn-reset");

let displayCount = document.getElementById("count-display");

/* FUNCTION */

function resultCount() {
  displayCount.textContent = count;

  countDisplay.style.color = "#FF4500"; // Flash Orange
  setTimeout(() => {
    countDisplay.style.color = "#FFFFFF"; // Back to White
  }, 100);
}

/* EVENT LISTENERS */

decreaseBtn.addEventListener("click", () => {
  count--;
  resultCount();
});

increaseBtn.addEventListener("click", () => {
  count++;
  resultCount();
});

resetBtn.addEventListener("click", () => {
  console.log("reset");
  count = 0;
  resultCount();
});
