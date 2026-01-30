/*

PASSWORD TOGGLE

**NEW CONCEPT**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Change input type dynamically
passwordInput.type = 'text';    // Shows password
passwordInput.type = 'password'; // Hides password

// Check current type
if (passwordInput.type === 'password') { ... }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*/

/*
STEP 1: Grab DOM elements
├── #password (the input)
├── #toggle-btn (the eye button)
└── #status (optional, for feedback)
*/

const passwordInput = document.getElementById("passwordInput");
const toggleBtn = document.getElementById("toggleBtn");
const eyeShow = document.getElementById("eyeShow");
const eyeHide = document.getElementById("eyeHide");
const statusIcon = document.getElementById("statusIcon");
const statusText = document.getElementById("statusText");
const strengthContainer = document.getElementById("strengthContainer");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

/*
STEP 2: Create togglePassword() function
├── Check if password input type is 'password'
│   ├── If yes → change to 'text', update icon to 🙈
│   └── If no → change to 'password', update icon to 👁️
*/

toggleBtn.addEventListener("click", function () {
  // Check current input type
  const isPassword = passwordInput.type === "password";

  // Toggle the type
  if (isPassword) {
    // Show password
    passwordInput.type = "text";
    eyeShow.classList.add("hidden");
    eyeHide.classList.remove("hidden");
    statusIcon.textContent = "🔓";
    statusText.textContent = "Password Visible";
  } else {
    // Hide password
    passwordInput.type = "password";
    eyeShow.classList.remove("hidden");
    eyeHide.classList.add("hidden");
    statusIcon.textContent = "🔒";
    statusText.textContent = "Password Hidden";
  }
});

/*
STEP 3: Add event listener
└── toggle-btn click → togglePassword()
*/

passwordInput.addEventListener("input", function () {
  const password = this.value;

  // Show strength indicator when typing
  if (password.length > 0) {
    strengthContainer.classList.remove("hidden");
    const strength = checkPasswordStrength(password);
    updateStrengthUI(strength);
  } else {
    strengthContainer.classList.add("hidden");
  }
});

// Check password strength
function checkPasswordStrength(password) {
  let score = 0;

  // Length checks
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;

  // Character type checks
  if (/[a-z]/.test(password)) score++; // lowercase
  if (/[A-Z]/.test(password)) score++; // uppercase
  if (/[0-9]/.test(password)) score++; // numbers
  if (/[^a-zA-Z0-9]/.test(password)) score++; // special chars

  // Return strength level
  if (score <= 2)
    return { level: "weak", color: "bg-red-500", text: "Weak", percent: 33 };
  if (score <= 4)
    return {
      level: "medium",
      color: "bg-yellow-500",
      text: "Medium",
      percent: 66,
    };
  return {
    level: "strong",
    color: "bg-green-500",
    text: "Strong",
    percent: 100,
  };
}

// Update the UI based on strength
function updateStrengthUI(strength) {
  strengthBar.className = `h-full transition-all duration-300 ${strength.color}`;
  strengthBar.style.width = `${strength.percent}%`;
  strengthText.textContent = strength.text;
  strengthText.className = `text-xs font-medium ${strength.color.replace(
    "bg-",
    "text-"
  )}`;
}

/*
BONUS: Prevent form submission (for demo)
└── form submit → preventDefault, show "Login clicked!" in status
*/

document.addEventListener("keydown", function (e) {
  // Ctrl/Cmd + Shift + H to toggle
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "H") {
    e.preventDefault();
    toggleBtn.click(); // Trigger the toggle button
  }
});
