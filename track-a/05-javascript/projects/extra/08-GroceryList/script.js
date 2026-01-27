/*
GROCERY LIST - Similar to Todo but with Edit feature!

NEW CONCEPTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Confirm dialog (returns true/false)
if (confirm("Delete this item?")) {
  // User clicked OK
}

// Prompt dialog (returns string or null)
const newName = prompt("Edit item:", "current value");
if (newName !== null && newName.trim() !== "") {
  // User entered something
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

// STEP 1: Grab DOM elements
// #grocery-input, #add-btn, #grocery-list
// #count, #empty-message, #clear-btn

let groceryInput = document.getElementById("grocery-input");
let addBtn = document.getElementById("add-btn");
let groceryList = document.getElementById("grocery-list");
let itemCount = document.getElementById("count");
let emptyMessage = document.getElementById("empty-message");
let clearBtn = document.getElementById("clear-btn");

// STEP 2: Create state
// let items = []
// Each item: { id: Date.now(), name: "..." }

let items = [];

// STEP 3: addItem() function
// - Get input value, validate
// - Create item object, push to array
// - Render, clear input

function addItem() {
  let grocery = groceryInput.value;

  if (grocery.trim() === "") return;

  const item = { id: Date.now(), name: grocery };

  items.push(item);
  renderItems();
  groceryInput.value = "";
}

// STEP 4: renderItems() function
// ├── Clear list (innerHTML = '')
// ├── Loop through items
// ├── For each: create li, add class, set data-id
// ├── innerHTML with: span + ✏️ edit-btn + 🗑️ delete-btn
// ├── Append to list
// ├── Update count
// └── Show/hide empty message

function renderItems() {
  groceryList.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");

    li.classList.add("grocery-item");
    li.setAttribute("data-id", item.id);

    li.innerHTML = `
    <span>${item.name}</span>
    <button class="edit-btn">✏️</button>
    <button class="delete-btn">🗑️</button>
    `;

    groceryList.appendChild(li);
  });

  itemCount.textContent = items.length;

  if (items.length === 0) {
    emptyMessage.classList.remove("hide");
  } else {
    emptyMessage.classList.add("hide");
  }
}

// STEP 5: Handle clicks with event delegation
// - If delete-btn: confirm() then remove
// - If edit-btn: prompt() for new name, update item

groceryList.addEventListener("click", (e) => {
  // DELETE
  if (e.target.classList.contains("delete-btn")) {
    if (confirm("Delete this item?")) {
      const li = e.target.closest(".grocery-item");
      const id = Number(li.getAttribute("data-id"));
      items = items.filter((item) => item.id !== id);
      renderItems();
    }
  }

  // EDIT
  if (e.target.classList.contains("edit-btn")) {
    const li = e.target.closest(".grocery-item");
    const id = Number(li.getAttribute("data-id"));
    const item = items.find((item) => item.id === id);

    const newName = prompt("Edit item:", item.name); // ← Shows current name

    if (newName !== null && newName.trim() !== "") {
      item.name = newName;
      renderItems();
    }
  }
});

// STEP 6: Event listeners
// - add-btn click
// - Enter key
// - clear-btn (with confirm!)
// - grocery-list click delegation

addBtn.addEventListener("click", addItem);
groceryInput.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") return addItem();
});
clearBtn.addEventListener("click", () => {
  if (items.length === 0) return;

  if (confirm("Delete all items?")) {
    items = [];
    renderItems();
  }
});

// STEP 7: Initialize
// - renderItems()

renderItems();
