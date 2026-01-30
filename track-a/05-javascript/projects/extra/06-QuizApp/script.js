/*

QUIZ APP

**NEW CONCEPTS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Array of objects
const questions = [
  { question: "...", options: [...], correct: "a" },
  { question: "...", options: [...], correct: "c" }
];

// Access array item
questions[currentQuestion]

// Access object property
questions[currentQuestion].question
questions[currentQuestion].options[0]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1: Create questions array (data)
├── Array of objects
├── Each object has:
│   ├── question: "What is...?"
│   ├── options: ["a", "b", "c", "d"]
│   └── correct: "a" (the correct answer)
└── Example:
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", ...],
      correct: "a"
    }

*/

const questions = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Mode",
      "Digital Output Machine",
    ],
    correct: "a",
  },
  {
    question: "Which method selects an element by its ID?",
    options: [
      "document.querySelector()",
      "document.getElementById()",
      "document.getElement()",
      "document.selectById()",
    ],
    correct: "b",
  },
  {
    question: "How do you declare a variable that CAN be changed later?",
    options: [
      "const name = 'John'",
      "let name = 'John'",
      "fixed name = 'John'",
      "static name = 'John'",
    ],
    correct: "b",
  },
  {
    question: "What does === compare in JavaScript?",
    options: ["Only values", "Only types", "Both value AND type", "Neither"],
    correct: "c",
  },
  {
    question: "Which property changes an element's text content?",
    options: [
      "element.innerHTML",
      "element.textContent",
      "element.innerText",
      "All of the above",
    ],
    correct: "d",
  },
];

/*

STEP 2: Grab DOM Elements
├── #question (display question text)
├── All .option buttons
├── #feedback (show correct/wrong)
├── #next-btn
├── #current-q, #total-q, #progress-fill
├── #score-box, #final-score
└── #restart-btn

*/

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const currentQEl = document.getElementById("current-q");
const totalQEl = document.getElementById("total-q");
const progressFill = document.getElementById("progress-fill");
const scoreBox = document.getElementById("score-box");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

// These are needed for hiding/showing sections later
const questionBox = document.querySelector(".question-box");
const navButtons = document.querySelector(".nav-buttons");
const progressSection = document.querySelector(".progress");

/*

STEP 3: Track state with variables
├── let currentQuestion = 0
├── let score = 0
└── let answered = false

*/

let currentQuestion = 0;
let score = 0;
let answered = false;

/*

STEP 4: Create loadQuestion() function
├── Get current question from array
├── Update question text
├── Update option button texts
├── Update progress (current-q, progress-fill)
├── Reset button states
└── Hide feedback, disable next button

*/

function loadQuestion() {
  const current = questions[currentQuestion];

  questionEl.textContent = current.question;

  optionBtns.forEach((btn, i) => {
    btn.textContent = current.options[i];
  });

  currentQEl.textContent = currentQuestion + 1;
  totalQEl.textContent = questions.length;

  const percent = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = percent + "%";

  answered = false;
  nextBtn.disabled = true;
  feedbackEl.className = "feedback";

  // Reset all option button
  optionBtns.forEach((btn) => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
}

/*

STEP 5: Handle option click
├── Loop through all option buttons
├── On click:
│   ├── Check if already answered → return
│   ├── Get clicked answer (data-answer)
│   ├── Get correct answer from current question
│   ├── If correct:
│   │   ├── Add "correct" class to button
│   │   ├── Show "Correct!" feedback
│   │   └── score++
│   ├── If wrong:
│   │   ├── Add "wrong" class to clicked
│   │   └── Add "correct" class to right answer
│   ├── Disable all options
│   ├── Enable next button
│   └── Set answered = true

*/

optionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (answered) return;

    const selected = btn.dataset.answer;
    const correct = questions[currentQuestion].correct;

    if (selected === correct) {
      btn.classList.add("correct");
      feedbackEl.textContent = "✅ Correct!";
      feedbackEl.className = "feedback correct";
      score++;
    } else {
      btn.classList.add("wrong");
      feedbackEl.textContent = "❌ Wrong! The correct answer is highlighted.";
      feedbackEl.className = "feedback wrong";

      // Highlight the correct answer
      optionBtns.forEach((optBtn) => {
        if (optBtn.dataset.answer === correct) {
          optBtn.classList.add("correct");
        }
      });
    }

    // Disable all options after answering
    optionBtns.forEach((optBtn) => {
      optBtn.disabled = true;
    });

    // Enable next button
    nextBtn.disabled = false;
    answered = true;
  });
});

/*

STEP 6: Handle Next button
├── currentQuestion++
├── If more questions → loadQuestion()
├── If no more → showScore()

*/

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    // More questions remaining
    loadQuestion();
  } else {
    // Quiz complete!
    showScore();
  }
});

/*

STEP 7: Create showScore() function
├── Hide question-box, nav-buttons, progress
├── Show score-box
└── Display final score

*/

function showScore() {
  questionBox.classList.add("hide");
  navButtons.classList.add("hide");
  progressSection.classList.add("hide");
  feedbackEl.className = "feedback";

  scoreBox.classList.add("show");
  finalScoreEl.textContent = score;
  maxScoreEl.textContent = questions.length;
}

/*

STEP 8: Handle Restart button
├── Reset: currentQuestion = 0, score = 0
├── Show question-box, nav-buttons, progress
├── Hide score-box
└── Call loadQuestion()

*/

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;

  questionBox.classList.remove("hide");
  navButtons.classList.remove("hide");
  progressSection.classList.remove("hide");

  scoreBox.classList.remove("show");
  loadQuestion();
});

loadQuestion();
