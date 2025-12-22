/*

SIMPLE CALCULATOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1: Grab DOM Elements
├── input#num1 (first number)
├── input#num2 (second number)
├── All .operator buttons
└── span#result (display area)

STEP 2: Listen for clicks on operator buttons
├── Use querySelectorAll for all buttons
├── Loop through each button
└── Add click event to each

STEP 3: On click, perform calculation
├── Get values from both inputs
├── Convert strings to numbers → parseFloat()
├── Get operator from data-op attribute
├── Use if/else or switch to calculate
│   ├── "+" → num1 + num2
│   ├── "-" → num1 - num2
│   ├── "*" → num1 * num2
│   └── "/" → num1 / num2 (handle ÷ by 0!)
└── Display result

**NEW CONCEPTS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Get custom data attributes
element.dataset.op    // Gets data-op value

// Convert string to number
parseFloat("42.5")    // → 42.5

// Loop through NodeList
buttons.forEach(btn => { ... })

// Switch statement (alternative to if/else)
switch(operator) {
  case "+": result = a + b; break;
  case "-": result = a - b; break;
}

*/

let firstNum = document.getElementById("num1");
let secondNum = document.getElementById("num2");
let operation = document.querySelectorAll(".operator");
let finalResult = document.getElementById("result");

operation.forEach((btn) => {
  btn.addEventListener("click", () => {
    let number1 = parseFloat(firstNum.value);
    let number2 = parseFloat(secondNum.value);
    let operator = btn.dataset.op;
    let result = 0;
    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        if (number2 === 0) {
          finalResult.textContent = "Error: Can't divide by 0!";
          return; // ← EXIT the function early!
        }
        result = number1 / number2;
        break;
    }
    finalResult.textContent = result;
  });
});
