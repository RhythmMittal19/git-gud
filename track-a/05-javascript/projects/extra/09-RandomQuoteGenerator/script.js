/*

RANDOM QUOTE GENERATOR

**NEW CONCEPTS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Random number between 0 and array length
const randomIndex = Math.floor(Math.random() * quotes.length);

// Get random item from array
const randomQuote = quotes[randomIndex];

// Copy to clipboard
navigator.clipboard.writeText(text);


RANDOM NUMBER PATTERN:
━━━━━━━━━━━━━━━━━━━━━━
Math.random()           → 0 to 0.999...
Math.random() * 10      → 0 to 9.999...
Math.floor(...)         → 0 to 9 (whole number)

For arrays:
Math.floor(Math.random() * array.length)


CLIPBOARD API:
━━━━━━━━━━━━━━━━━━━━━━
navigator.clipboard.writeText("Hello!")
  .then(() => console.log("Copied!"))


SETTIMEOUT (preview):
━━━━━━━━━━━━━━━━━━━━━━
setTimeout(() => {
  // runs after 2000ms (2 seconds)
}, 2000);

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*/

/*

STEP 1: Grab DOM elements
├── #quote-text
├── #quote-author
├── #new-quote-btn
├── #copy-btn
└── #copy-message

*/

let quoteText = document.getElementById("quote-text");
let quoteAuthor = document.getElementById("quote-author");
let newBtn = document.getElementById("new-quote-btn");
let copyBtn = document.getElementById("copy-btn");
let copyMessage = document.getElementById("copy-message");

/*

STEP 2: Create quotes array
└── Array of objects: { text: "...", author: "..." }
    (Add 6-8 quotes)

Example:
const quotes = [
  { text: "Be yourself; everyone else is taken.", author: "Oscar Wilde" },
  { text: "...", author: "..." },
  ...
];

*/

const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];

/*

STEP 3: Create displayRandomQuote() function
├── Generate random index: Math.floor(Math.random() * quotes.length)
├── Get quote at that index
├── Update quote text (with quotes around it)
└── Update author (with dash before name)

*/

function displayRandomQuote() {
  let index = Math.floor(Math.random() * quotes.length);
  let quote = quotes[index];

  quoteText.textContent = quote.text;
  quoteAuthor.textContent = "~" + quote.author;
}

/*

STEP 4: Create copyToClipboard() function
├── Build string: "quote" - author
├── Use navigator.clipboard.writeText(text)
├── Show copy message
├── Hide message after 2 seconds (setTimeout)

*/

function copyToClipboard() {
  let string = `"${quoteText.innerText}" ${quoteAuthor.innerText}`;

  navigator.clipboard.writeText(string).then(() => console.log("Copied!"));

  copyMessage.classList.add("show");

  setTimeout(() => {
    copyMessage.classList.remove("show");
  }, 2000);
}
/*

STEP 5: Add event listeners
├── new-quote-btn click → displayRandomQuote()
└── copy-btn click → copyToClipboard()

*/

newBtn.addEventListener("click", displayRandomQuote);
copyBtn.addEventListener("click", copyToClipboard);

/*

STEP 6: INITIALIZE IF RELOADED

*/
displayRandomQuote();
