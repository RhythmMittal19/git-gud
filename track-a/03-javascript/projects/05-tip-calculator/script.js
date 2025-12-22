/*

TIP CALCULATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1: Grab DOM Elements
├── input#bill (bill amount)
├── All .tip-btn buttons
├── input#people (number of people)
├── span#tip-amount (display tip)
├── span#total (display total)
├── span#per-person (display per person)
└── button#reset

*/

let billAmount = document.getElementById("bill");
let tip = document.querySelectorAll(".tip-btn");
let numberOfPeople = document.getElementById("people");
let displayTip = document.getElementById("tip-amount");
let displayTotal = document.getElementById("total");
let displayPerPerson = document.getElementById("per-person");
let resetBtn = document.getElementById("reset");

/*

STEP 2: Track selected tip percentage
├── Create variable: let selectedTip = 0
├── Loop through tip buttons
├── On click:
│   ├── Remove "active" class from ALL buttons
│   ├── Add "active" class to clicked button
│   └── Store tip value: selectedTip = btn.dataset.tip
└── Call calculate function

*/

let selectedTip = 0;
tip.forEach((btn) => {
  btn.addEventListener("click", () => {
    tip.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedTip = btn.dataset.tip;
    billAmount.addEventListener("input", () => {
      if (selectedTip > 0) {
        calculate(selectedTip);
      }
    });

    numberOfPeople.addEventListener("input", () => {
      if (selectedTip > 0) {
        calculate(selectedTip);
      }
    });
  });
});

/*

STEP 3: Create calculate function
├── Get bill amount → parseFloat(bill.value)
├── Get people count → parseFloat(people.value) || 1
├── Calculate:
│   ├── tipAmount = bill * (selectedTip / 100)
│   ├── total = bill + tipAmount
│   └── perPerson = total / people
└── Update display spans

*/

function calculate(tip) {
  let bill = parseFloat(billAmount.value);
  let peopleCount = parseFloat(numberOfPeople.value) || 1;

  let calculatedTip = bill * (tip / 100);
  let calculatedTotal = bill + calculatedTip;
  let calculatedPerPerson = calculatedTotal / peopleCount;

  displayTip.textContent = "$" + calculatedTip.toFixed(2);
  displayTotal.textContent = "$" + calculatedTotal.toFixed(2);
  displayPerPerson.textContent = "$" + calculatedPerPerson.toFixed(2);
}

/*

STEP 4: Reset button
├── Clear all inputs
├── Reset selectedTip to 0
├── Remove "active" from all buttons
└── Reset displays to "$0.00"

**NEW CONCEPTS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Default value if NaN
parseFloat(input.value) || 1

// Format to 2 decimal places
number.toFixed(2)  // 15.5 → "15.50"

// Remove class from ALL buttons
buttons.forEach(b => b.classList.remove("active"))

*/

resetBtn.addEventListener("click", () => {
  selectedTip = 0;
  billAmount.value = "";
  numberOfPeople.value = "";

  tip.forEach((btn) => btn.classList.remove("active"));

  // Reset displays
  displayTip.textContent = "$0.00";
  displayTotal.textContent = "$0.00";
  displayPerPerson.textContent = "$0.00";
});
