/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🆕 NEW CONCEPT: localStorage
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

localStorage lets you save data in the browser that
persists even after page refresh!

KEY METHODS:
├── data = localStorage.setItem("key", "value")  → Save data
├── data = localStorage.getItem("key")           → Get data
├── data = localStorage.removeItem("key")        → Delete data
├── JSON.stringify() object -> string     → Convert objects ↔ strings
└── JSON.parse() string -> object         → Convert objects ↔ strings

IMPORTANT: localStorage only stores STRINGS!
├── SAVING:   Array  →  JSON.stringify(data)  →  String  →  localStorage
└── LOADING:  localStorage  →  String  →  JSON.parse(data)  →  Array

*/

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1: Grab all elements
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── Form element (to listen for submit)
├── Site name input
├── Site URL input
├── Bookmarks list container
└── Empty message element

*/

let submit = document.getElementById("bookmark-form");
let siteName = document.getElementById("site-name");
let siteURL = document.getElementById("site-url");
let bookmarksList = document.getElementById("bookmarks-list");
let emptyMessage = document.getElementById("empty-message");

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2: Set up bookmarks array
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── TRY to get bookmarks from localStorage
├── IF exists → parse it into array
└── ELSE → create empty array []

HINT:
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

*/

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3: Create "saveBookmarks" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: Save the bookmarks array to localStorage

└── localStorage.setItem("bookmarks", JSON.stringify(bookmarks))

*/

function saveBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4: Create "renderBookmarks" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: Display all bookmarks on the page

├── IF bookmarks array is empty
│   └── Show empty message, hide list items
│
└── ELSE
    ├── Hide empty message
    ├── Clear current list (except empty message)
    └── Loop through bookmarks array
        └── For EACH bookmark, create HTML:

            <div class="bookmark-item" data-id="UNIQUE_ID">
              <div class="bookmark-info">
                <h3>SITE_NAME</h3>
                <a href="URL" target="_blank">URL</a>
              </div>
              <div class="bookmark-actions">
                <button class="visit-btn">Visit</button>
                <button class="delete-btn">Delete</button>
              </div>
            </div>

        └── Append to bookmarks list

*/

function renderBookmarks() {
  const existingItems = bookmarksList.querySelectorAll(".bookmark-item");
  existingItems.forEach((item) => item.remove());

  if (bookmarks.length === 0) {
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";

  bookmarks.forEach((bookmark) => {
    const item = document.createElement("div");
    item.className = "bookmark-item";
    item.dataset.id = bookmark.id;

    item.innerHTML = `
      <div class="bookmark-info">
        <h3>${bookmark.name}</h3>
        <a href="${bookmark.url}" target="_blank">${bookmark.url}</a>
      </div>
      <div class="bookmark-actions">
        <button class="visit-btn">Visit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    bookmarksList.appendChild(item);
  });
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5: Create "addBookmark" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: Add new bookmark to array

├── Get values from inputs (name, url)
├── Create bookmark object:
│   {
│     id: Date.now(),    ← unique ID using timestamp
│     name: siteName,
│     url: siteUrl
│   }
├── Push object to bookmarks array
├── Save to localStorage (call saveBookmarks)
├── Re-render the list (call renderBookmarks)
└── Clear the input fields

*/

function addBookmark() {
  let Sname = siteName.value;
  let Surl = siteURL.value;

  const bookmark = {
    id: Date.now(),
    name: Sname,
    url: Surl,
  };

  bookmarks.push(bookmark);
  saveBookmarks();
  renderBookmarks();
  siteName.value = "";
  siteURL.value = "";
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 6: Create "deleteBookmark" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: Remove bookmark by ID

├── Receive ID as parameter
├── Filter out the bookmark with matching ID
│   bookmarks = bookmarks.filter(b => b.id !== id)
├── Save to localStorage
└── Re-render the list

*/

function deleteBookmark(id) {
  bookmarks = bookmarks.filter((b) => b.id !== id);
  saveBookmarks();
  renderBookmarks();
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 7: Create "visitBookmark" function
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PURPOSE: Open bookmark URL in new tab

├── Receive URL as parameter
└── window.open(url, "_blank")

*/

function visitBookmark(url) {
  window.open(url, "_blank");
}

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 8: Add event listeners
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FORM SUBMIT:
├── Listen for "submit" event on form
├── Prevent default (stops page refresh)
└── Call addBookmark function

BUTTON CLICKS (Event Delegation):
├── Listen for "click" on bookmarks-list container
├── IF clicked element has class "delete-btn"
│   ├── Get the bookmark ID from parent's data-id
│   └── Call deleteBookmark(id)
└── IF clicked element has class "visit-btn"
    ├── Get the URL from sibling anchor tag
    └── Call visitBookmark(url)

*/

submit.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookmark();
});

bookmarksList.addEventListener("click", (ev) => {
  const bookmarkItem = ev.target.closest(".bookmark-item");
  if (!bookmarkItem) return;

  if (ev.target.classList.contains("delete-btn")) {
    const id = parseInt(bookmarkItem.dataset.id);
    deleteBookmark(id);
  }

  if (ev.target.classList.contains("visit-btn")) {
    const url = bookmarkItem.querySelector("a").href;
    visitBookmark(url);
  }
});

/*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 9: Initialize
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
└── Call renderBookmarks() on page load
    (displays any saved bookmarks)

*/

renderBookmarks();
