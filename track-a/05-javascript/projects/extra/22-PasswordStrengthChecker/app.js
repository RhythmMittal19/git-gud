// ========================================
// 1. DOM REFERENCES
// ========================================
const passInput = document.getElementById("password-input");
const toggleBtn = document.getElementById("toggle-btn");
const strengthMeter = document.querySelector(".strength-meter");
const strengthText = document.getElementById("strength-text");
const requirements = document.querySelectorAll(".requirement");
const submitBtn = document.getElementById("submit-btn");
const feedbackMessage = document.getElementById("feedback-message");

// ========================================
// 2. REGEX PATTERNS
// ========================================
const patterns = {
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /\d/,
  special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
};

// ========================================
// 3. CHECK PASSWORD FUNCTION
// ========================================
function checkPassword(password) {
  return {
    length: password.length >= 8,
    uppercase: patterns.uppercase.test(password),
    lowercase: patterns.lowercase.test(password),
    number: patterns.number.test(password),
    special: patterns.special.test(password),
  };
}

// ========================================
// 4. UPDATE REQUIREMENTS UI
// ========================================
function updateRequirementsUI(results) {
  requirements.forEach((req) => {
    const type = req.dataset.requirement;
    if (results[type]) {
      req.classList.add("met");
    } else {
      req.classList.remove("met");
    }
  });
}

// ========================================
// 5. CALCULATE STRENGTH
// ========================================
function calculateStrength(results) {
  const count = Object.values(results).filter((v) => v === true).length;

  if (count === 0) return null;
  if (count <= 2) return "weak";
  if (count === 3) return "fair";
  if (count === 4) return "good";
  return "strong";
}

// ========================================
// 6. UPDATE STRENGTH METER
// ========================================
function updateStrengthMeter(strength) {
  if (strength === null) {
    strengthMeter.removeAttribute("data-strength");
    strengthText.textContent = "Enter a password";
  } else {
    strengthMeter.dataset.strength = strength;
    const labels = {
      weak: "Weak password",
      fair: "Fair password",
      good: "Good password",
      strong: "Strong password",
    };
    strengthText.textContent = labels[strength];
  }
}

// ========================================
// 7. UPDATE BUTTON STATE
// ========================================
function updateButtonState(results) {
  const allMet = Object.values(results).every((v) => v === true);
  submitBtn.disabled = !allMet;
}

// ========================================
// 8. TOGGLE VISIBILITY
// ========================================
function toggleVisibility() {
  if (passInput.type === "password") {
    passInput.type = "text";
    toggleBtn.classList.add("active");
  } else {
    passInput.type = "password";
    toggleBtn.classList.remove("active");
  }
}

// ========================================
// 9. MAIN HANDLER
// ========================================
function handlePasswordInput() {
  const password = passInput.value;
  const results = checkPassword(password);

  updateRequirementsUI(results);
  const strength = calculateStrength(results);
  updateStrengthMeter(strength);
  updateButtonState(results);
}

// ========================================
// 10. HANDLE SUBMIT
// =======================================
function handleSubmit() {
  feedbackMessage.hidden = false;
  passInput.disabled = true;
  toggleBtn.disabled = true;
  submitBtn.hidden = true;
}

// ========================================
// 11. EVENT LISTENERS
// ========================================
passInput.addEventListener("input", handlePasswordInput);
toggleBtn.addEventListener("click", toggleVisibility);
submitBtn.addEventListener("click", handleSubmit);
