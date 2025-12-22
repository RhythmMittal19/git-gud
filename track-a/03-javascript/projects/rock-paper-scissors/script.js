// ============ STATE VARIABLES ============
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

let playerInput = "";
let computerInput = "";

// ============ DOM ELEMENTS ============
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultMessageEl = document.getElementById("result-message");
const gameOverOverlay = document.getElementById("game-over-overlay");
const winnerTextEl = document.getElementById("winner-text");
const finalScoreEl = document.getElementById("final-score");
const resetBtn = document.getElementById("reset-btn");
const weaponBtns = document.querySelectorAll(".weapon-btn");

// ============ FUNCTIONS ============

function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerChoice) {
  // const computerChoice = getComputerChoice();
  // if (playerChoice == "rock" && computerChoice == "scissors") playerScore++;
  // else if (playerChoice == "paper" && computerChoice == "");
}

function updateScore() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function checkGameOver() {
  return playerScore === winningScore
    ? "player"
    : computerScore === winningScore
      ? "computer"
      : false;
}

function endGame(winner) {
  gameOverOverlay.classList.add("show");
  winnerTextEl.textContent =
    winner === "player" ? "🎉 You Win!" : "😢 You Lose!";
  finalScoreEl.textContent = `Final Score: ${playerScore} - ${computerScore}`;
  weaponBtns.forEach((btn) => {
    btn.disabled = true;
  });
}

// 6. Reset everything to play again
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  resultMessageEl.textContent = "Choose your weapon!";
  gameOverOverlay.classList.remove("show");
  weaponBtns.forEach((btn) => {
    btn.disabled = false;
  });
}

// ============ EVENT LISTENERS ============
// User clicks "Rock" -> playRound("rock")
// User clicks "Paper" -> playRound("paper")
// User clicks "Scissors" -> playRound("scissors")
// User clicks "Play Again" -> resetGame()
