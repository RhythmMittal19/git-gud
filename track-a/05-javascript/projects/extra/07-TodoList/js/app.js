// TASK LIST EVENTS (Event Delegation)

DOM.taskList.addEventListener("click", (e) => {
  const taskCard = e.target.closest(".task-card");
  if (!taskCard) return;

  const taskId = taskCard.dataset.id;

  // Ctrl/Cmd + Click for selection
  if (
    (e.ctrlKey || e.metaKey) &&
    !e.target.classList.contains("task-checkbox")
  ) {
    e.preventDefault();
    State.toggleSelection(taskId);
    UI.renderTasks();
    return;
  }

  // Checkbox click - Toggle completion
  if (e.target.classList.contains("task-checkbox")) {
    State.toggleTask(taskId);
    UI.renderTasks();

    const task = State.getTaskById(taskId);
    if (task?.completed) {
      UI.showToast("Task completed! 🎉", "success");
    }
    return;
  }

  // Delete button
  if (e.target.closest(".delete-btn")) {
    DOM.deleteTaskId.value = taskId;
    UI.openModal(DOM.deleteConfirmModal);
    return;
  }

  // Edit button
  if (e.target.closest(".edit-btn")) {
    const task = State.getTaskById(taskId);
    if (task) {
      UI.populateEditModal(task);
      UI.openModal(DOM.editTaskModal);
      DOM.editTitleInput.focus();
    }
    return;
  }

  // Priority/Flag button
  if (e.target.closest(".priority-btn")) {
    const isNowUrgent = State.toggleUrgent(taskId);
    UI.renderTasks();
    UI.showToast(
      isNowUrgent ? "Marked as urgent!" : "Removed urgent flag",
      "success",
    );
    return;
  }

  // Undo button (on completed tasks)
  if (e.target.closest(".undo-btn")) {
    State.toggleTask(taskId);
    UI.renderTasks();
    UI.showToast("Task restored!", "success");
    return;
  }
});

// ADD TASK MODAL

// Open modal
DOM.addTaskBtn.addEventListener("click", () => {
  UI.openModal(DOM.addTaskModal);
  DOM.taskTitleInput.focus();
});

DOM.emptyAddBtn.addEventListener("click", () => {
  UI.openModal(DOM.addTaskModal);
  DOM.taskTitleInput.focus();
});

// Close modal
DOM.addModalClose.addEventListener("click", () => {
  UI.closeModal(DOM.addTaskModal);
  DOM.addTaskForm.reset();
  resetQuickTags();
});

DOM.cancelAddBtn.addEventListener("click", () => {
  UI.closeModal(DOM.addTaskModal);
  DOM.addTaskForm.reset();
  resetQuickTags();
});

// Form submission
DOM.addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = DOM.taskTitleInput.value.trim();

  if (!title) {
    UI.showToast("Please enter a task title!", "error");
    DOM.taskTitleInput.focus();
    return;
  }

  const taskData = {
    title: title,
    description: DOM.taskDescriptionInput.value,
    time: DOM.taskTimeInput.value,
    date: DOM.taskDateInput.value,
    project: DOM.taskProjectInput.value,
    urgent: DOM.taskUrgentToggle.checked,
  };

  State.addTask(taskData);
  UI.renderTasks();
  UI.closeModal(DOM.addTaskModal);
  DOM.addTaskForm.reset();
  resetQuickTags();
  UI.showToast("Task added successfully!", "success");
});

// Character counter
DOM.taskTitleInput.addEventListener("input", () => {
  UI.updateCharCounter();
});

// Quick tags
DOM.quickTags.addEventListener("click", (e) => {
  const tag = e.target.closest(".quick-tag");
  if (!tag) return;

  const project = tag.dataset.project;
  DOM.taskProjectInput.value = project;

  // Toggle active state
  document.querySelectorAll(".quick-tag").forEach((t) => {
    t.classList.remove("active");
  });
  tag.classList.add("active");
});

function resetQuickTags() {
  document.querySelectorAll(".quick-tag").forEach((t) => {
    t.classList.remove("active");
  });
  UI.updateCharCounter();
}

// EDIT TASK MODAL

DOM.editModalClose.addEventListener("click", () => {
  UI.closeModal(DOM.editTaskModal);
});

DOM.cancelEditBtn.addEventListener("click", () => {
  UI.closeModal(DOM.editTaskModal);
});

DOM.deleteFromEditBtn.addEventListener("click", () => {
  const taskId = DOM.editTaskId.value;
  DOM.deleteTaskId.value = taskId;
  UI.closeModal(DOM.editTaskModal);
  UI.openModal(DOM.deleteConfirmModal);
});

DOM.editTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskId = DOM.editTaskId.value;
  const title = DOM.editTitleInput.value.trim();

  if (!title) {
    UI.showToast("Please enter a task title!", "error");
    DOM.editTitleInput.focus();
    return;
  }

  const updates = {
    title: title,
    description: DOM.editDescriptionInput.value,
    time: DOM.editTimeInput.value,
    date: DOM.editDateInput.value,
    project: DOM.editProjectInput.value,
    urgent: DOM.editUrgentToggle.checked,
  };

  State.updateTask(taskId, updates);
  UI.renderTasks();
  UI.closeModal(DOM.editTaskModal);
  UI.showToast("Task updated!", "success");
});

// DELETE CONFIRMATION MODAL

DOM.confirmDeleteBtn.addEventListener("click", () => {
  const taskId = DOM.deleteTaskId.value;
  State.deleteTask(taskId);
  UI.renderTasks();
  UI.closeModal(DOM.deleteConfirmModal);

  UI.showToast("Task deleted!", "success", () => {
    if (State.undoDelete()) {
      UI.renderTasks();
      UI.showToast("Task restored!", "success");
    }
  });
});

DOM.cancelDeleteBtn.addEventListener("click", () => {
  UI.closeModal(DOM.deleteConfirmModal);
});

// CLEAR COMPLETED MODAL

DOM.clearCompletedBtn.addEventListener("click", () => {
  const counts = State.getCounts();
  DOM.clearConfirmCount.textContent = counts.completed;
  UI.openModal(DOM.clearConfirmModal);
});

DOM.confirmClearBtn.addEventListener("click", () => {
  const count = State.clearCompleted();
  UI.renderTasks();
  UI.closeModal(DOM.clearConfirmModal);
  UI.showToast(`${count} completed tasks cleared!`, "success");
});

DOM.cancelClearBtn.addEventListener("click", () => {
  UI.closeModal(DOM.clearConfirmModal);
});

// SEARCH

DOM.searchInput.addEventListener("input", (e) => {
  State.searchQuery = e.target.value.trim();
  UI.updateSearchUI();
  UI.renderTasks();
});

DOM.clearSearchBtn.addEventListener("click", () => {
  DOM.searchInput.value = "";
  State.searchQuery = "";
  UI.updateSearchUI();
  UI.renderTasks();
  DOM.searchInput.focus();
});

DOM.clearFiltersBtn.addEventListener("click", () => {
  DOM.searchInput.value = "";
  State.searchQuery = "";
  State.currentFilter = "all";
  UI.updateSearchUI();
  UI.setActiveTab("all");
  UI.renderTasks();
});

// SORT

DOM.sortSelect.addEventListener("change", (e) => {
  State.currentSort = e.target.value;
  UI.renderTasks();
});

// FILTER TABS

DOM.filterTabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;

  State.currentFilter = tab.dataset.filter;
  UI.setActiveTab(State.currentFilter);
  UI.renderTasks();
});

// BULK ACTIONS

DOM.bulkCompleteBtn.addEventListener("click", () => {
  const count = State.completeSelected();
  UI.renderTasks();
  UI.showToast(`${count} tasks completed!`, "success");
});

DOM.bulkDeleteBtn.addEventListener("click", () => {
  const count = State.deleteSelected();
  UI.renderTasks();
  UI.showToast(`${count} tasks deleted!`, "success");
});

DOM.bulkCancelBtn.addEventListener("click", () => {
  State.clearSelection();
  UI.renderTasks();
});

// DRAG & DROP

let draggedTaskId = null;

DOM.taskList.addEventListener("dragstart", (e) => {
  const taskCard = e.target.closest(".task-card");
  if (!taskCard) return;

  draggedTaskId = taskCard.dataset.id;
  taskCard.classList.add("dragging");

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", draggedTaskId);
});

DOM.taskList.addEventListener("dragend", (e) => {
  const taskCard = e.target.closest(".task-card");
  if (taskCard) {
    taskCard.classList.remove("dragging");
  }
  draggedTaskId = null;

  document.querySelectorAll(".task-card").forEach((card) => {
    card.classList.remove("drag-over");
  });
});

DOM.taskList.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";

  const taskCard = e.target.closest(".task-card");
  if (taskCard && taskCard.dataset.id !== draggedTaskId) {
    document.querySelectorAll(".task-card").forEach((card) => {
      card.classList.remove("drag-over");
    });
    taskCard.classList.add("drag-over");
  }
});

DOM.taskList.addEventListener("dragleave", (e) => {
  const taskCard = e.target.closest(".task-card");
  if (taskCard) {
    taskCard.classList.remove("drag-over");
  }
});

DOM.taskList.addEventListener("drop", (e) => {
  e.preventDefault();

  const taskCard = e.target.closest(".task-card");
  if (!taskCard || !draggedTaskId) return;

  const dropTargetId = taskCard.dataset.id;

  if (draggedTaskId !== dropTargetId) {
    State.reorderTask(draggedTaskId, dropTargetId);
    UI.renderTasks();
  }

  taskCard.classList.remove("drag-over");
});

// Enable dragging via handle
DOM.taskList.addEventListener("mousedown", (e) => {
  const dragHandle = e.target.closest(".drag-handle");
  if (dragHandle) {
    const taskCard = dragHandle.closest(".task-card");
    if (taskCard) {
      taskCard.setAttribute("draggable", "true");
    }
  }
});

DOM.taskList.addEventListener("mouseup", () => {
  document.querySelectorAll(".task-card[draggable]").forEach((card) => {
    card.removeAttribute("draggable");
  });
});

// MODAL BACKDROP CLICKS

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      UI.closeModal(modal);

      // Reset forms
      if (modal === DOM.addTaskModal) {
        DOM.addTaskForm.reset();
        resetQuickTags();
      }
    }
  });
});

// SHORTCUTS MODAL

if (DOM.shortcutsClose) {
  DOM.shortcutsClose.addEventListener("click", () => {
    UI.closeModal(DOM.shortcutsModal);
  });
}

// KEYBOARD SHORTCUTS

let focusedTaskIndex = -1;

document.addEventListener("keydown", (e) => {
  // Escape - Close modals
  if (e.key === "Escape") {
    UI.closeAllModals();
    State.clearSelection();
    UI.renderTasks();
    focusedTaskIndex = -1;
    document.querySelectorAll(".task-card.focused").forEach((card) => {
      card.classList.remove("focused");
    });
    return;
  }

  // Don't trigger shortcuts when typing
  const isTyping =
    e.target.tagName === "INPUT" ||
    e.target.tagName === "TEXTAREA" ||
    e.target.tagName === "SELECT";

  if (isTyping) return;

  // N - New task
  if (e.key === "n" || e.key === "N") {
    e.preventDefault();
    UI.openModal(DOM.addTaskModal);
    DOM.taskTitleInput.focus();
    return;
  }

  // / - Focus search
  if (e.key === "/") {
    e.preventDefault();
    DOM.searchInput.focus();
    return;
  }

  // ? - Show shortcuts
  if (e.key === "?") {
    e.preventDefault();
    UI.openModal(DOM.shortcutsModal);
    return;
  }

  // 1-4 - Filter tabs
  if (e.key >= "1" && e.key <= "4") {
    const filters = ["all", "active", "completed", "urgent"];
    const filter = filters[parseInt(e.key) - 1];
    State.currentFilter = filter;
    UI.setActiveTab(filter);
    UI.renderTasks();
    return;
  }

  // Arrow navigation
  const tasks = Array.from(document.querySelectorAll(".task-card"));
  if (tasks.length === 0) return;

  if (e.key === "ArrowDown" || e.key === "j") {
    e.preventDefault();
    focusedTaskIndex = Math.min(focusedTaskIndex + 1, tasks.length - 1);
    updateTaskFocus(tasks);
    return;
  }

  if (e.key === "ArrowUp" || e.key === "k") {
    e.preventDefault();
    focusedTaskIndex = Math.max(focusedTaskIndex - 1, 0);
    updateTaskFocus(tasks);
    return;
  }

  // Enter - Toggle focused task
  if (e.key === "Enter" && focusedTaskIndex >= 0) {
    e.preventDefault();
    const focused = tasks[focusedTaskIndex];
    if (focused) {
      const checkbox = focused.querySelector(".task-checkbox");
      if (checkbox) checkbox.click();
    }
    return;
  }

  // Delete/Backspace - Delete focused task
  if ((e.key === "Delete" || e.key === "Backspace") && focusedTaskIndex >= 0) {
    e.preventDefault();
    const focused = tasks[focusedTaskIndex];
    if (focused) {
      DOM.deleteTaskId.value = focused.dataset.id;
      UI.openModal(DOM.deleteConfirmModal);
    }
    return;
  }

  // E - Edit focused task
  if (e.key === "e" && focusedTaskIndex >= 0) {
    e.preventDefault();
    const focused = tasks[focusedTaskIndex];
    if (focused) {
      const task = State.getTaskById(focused.dataset.id);
      if (task && !task.completed) {
        UI.populateEditModal(task);
        UI.openModal(DOM.editTaskModal);
        DOM.editTitleInput.focus();
      }
    }
    return;
  }

  // U - Toggle urgent on focused task
  if (e.key === "u" && focusedTaskIndex >= 0) {
    e.preventDefault();
    const focused = tasks[focusedTaskIndex];
    if (focused) {
      State.toggleUrgent(focused.dataset.id);
      UI.renderTasks();
    }
    return;
  }
});

function updateTaskFocus(tasks) {
  tasks.forEach((task, index) => {
    if (index === focusedTaskIndex) {
      task.classList.add("focused");
      task.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      task.classList.remove("focused");
    }
  });
}

// INITIALIZATION

function init() {
  console.log("🚀 Todo App initializing...");

  // Load saved data
  State.load();

  // Set up UI
  UI.updateDate();
  UI.updateSearchUI();
  UI.updateCharCounter();
  UI.renderTasks();

  console.log(`✅ Loaded ${State.todos.length} tasks`);
  console.log("✅ App ready!");
}

// Start the app
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// ============================================
// THEME TOGGLE
// ============================================

const themeToggle = document.getElementById("theme-toggle");

// Check for saved theme preference or default to system preference
function getPreferredTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

// Apply theme to document
function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme);
}

// Toggle theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(newTheme);
}

// Initialize theme on page load
applyTheme(getPreferredTheme());

// Add event listener
themeToggle.addEventListener("click", toggleTheme);

// Listen for system theme changes
window
  .matchMedia("(prefers-color-scheme: light)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "light" : "dark");
    }
  });
