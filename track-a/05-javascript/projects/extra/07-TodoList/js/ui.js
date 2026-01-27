const UI = {
  // MAIN RENDER FUNCTION

  renderTasks() {
    const tasks = State.getFilteredTasks();
    const counts = State.getCounts();

    // Clear the task list
    DOM.taskList.innerHTML = "";

    // Handle empty states
    if (counts.total === 0) {
      // No tasks at all
      DOM.emptyState.classList.remove("hidden");
      DOM.taskList.classList.add("hidden");
      DOM.noResultsState.classList.add("hidden");
    } else if (tasks.length === 0) {
      // Has tasks but none match filter/search
      DOM.emptyState.classList.add("hidden");
      DOM.taskList.classList.add("hidden");
      DOM.noResultsState.classList.remove("hidden");
    } else {
      // Has tasks to show
      DOM.emptyState.classList.add("hidden");
      DOM.noResultsState.classList.add("hidden");
      DOM.taskList.classList.remove("hidden");

      // Render each task
      tasks.forEach((task) => {
        DOM.taskList.innerHTML += this.createTaskHTML(task);
      });
    }

    // Update all stats and UI elements
    this.updateStats();
    this.updateProgressRing();
    this.updateBulkActionsBar();
    this.updateClearCompletedBtn();
  },

  // CREATE TASK HTML

  createTaskHTML(task) {
    const isSelected = State.isSelected(task.id);
    const isCompleted = task.completed;
    const isUrgent = task.urgent;

    // Build classes
    const cardClasses = [
      "task-card",
      isCompleted ? "completed" : "",
      isUrgent && !isCompleted ? "is-urgent" : "",
      isSelected ? "selected" : "",
    ]
      .filter(Boolean)
      .join(" ");

    // Build meta section
    let metaHTML = "";

    if (isCompleted) {
      metaHTML = `
        <div class="meta-item completed-tag">
          <span class="status-dot"></span>
          <span>COMPLETED</span>
        </div>
        <span class="meta-dot"></span>
        <span class="completed-time">${this.getCompletedTime(task.completedAt)}</span>
      `;
    } else {
      const parts = [];

      // Time
      if (task.time) {
        parts.push(`
          <div class="meta-item meta-time">
            <span class="material-symbols-outlined">schedule</span>
            <span class="task-time">${this.formatTime(task.time)}</span>
          </div>
        `);
      }

      // Project
      if (task.project) {
        parts.push(`
          <div class="meta-item meta-project">
            <span class="material-symbols-outlined">folder</span>
            <span class="task-project">${this.escapeHTML(task.project.toUpperCase())}</span>
          </div>
        `);
      }

      // Due Date
      if (task.date) {
        const dateStatus = this.getDueDateStatus(task.date);
        parts.push(`
          <div class="meta-item meta-due ${dateStatus.class}">
            <span class="material-symbols-outlined">${dateStatus.icon}</span>
            <span class="task-due">${dateStatus.text}</span>
          </div>
        `);
      }

      metaHTML = parts.join('<span class="meta-dot"></span>');
    }

    // Build action buttons
    let actionsHTML = "";

    if (isCompleted) {
      actionsHTML = `
        <button class="action-btn undo-btn" aria-label="Undo completion" data-tooltip="Undo">
          <span class="material-symbols-outlined">undo</span>
        </button>
        <button class="action-btn delete-btn" aria-label="Delete task" data-tooltip="Delete">
          <span class="material-symbols-outlined">delete</span>
        </button>
      `;
    } else {
      actionsHTML = `
        <button class="action-btn priority-btn ${isUrgent ? "active" : ""}"
                aria-label="Toggle priority"
                data-tooltip="${isUrgent ? "Remove Urgent" : "Mark Urgent"}">
          <span class="material-symbols-outlined">flag</span>
        </button>
        <button class="action-btn edit-btn" aria-label="Edit task" data-tooltip="Edit">
          <span class="material-symbols-outlined">edit</span>
        </button>
        <button class="action-btn delete-btn" aria-label="Delete task" data-tooltip="Delete">
          <span class="material-symbols-outlined">delete</span>
        </button>
      `;
    }

    // Build title section
    let titleHTML = "";

    if (isUrgent && !isCompleted) {
      titleHTML = `
        <div class="title-row">
          <h3 class="task-title">${this.escapeHTML(task.title)}</h3>
          <span class="badge-urgent">
            <span class="material-symbols-outlined">priority_high</span>
            URGENT
          </span>
        </div>
      `;
    } else {
      titleHTML = `<h3 class="task-title">${this.escapeHTML(task.title)}</h3>`;
    }

    // Complete HTML
    return `
      <article class="${cardClasses}"
               data-id="${task.id}"
               data-completed="${task.completed}"
               data-urgent="${task.urgent}">
        <div class="card-content">
          <button class="drag-handle" aria-label="Drag to reorder">
            <span class="material-symbols-outlined">drag_indicator</span>
          </button>

          <label class="custom-checkbox">
            <input type="checkbox"
                   ${isCompleted ? "checked" : ""}
                   class="task-checkbox"
                   aria-label="${isCompleted ? "Mark as incomplete" : "Mark as complete"}" />
            <div class="checkmark">
              <span class="material-symbols-outlined icon">check</span>
            </div>
          </label>

          <div class="text-group">
            ${titleHTML}
            <div class="meta">
              ${metaHTML}
            </div>
          </div>

          <div class="actions">
            ${actionsHTML}
          </div>
        </div>
      </article>
    `;
  },

  // STATS & PROGRESS

  updateStats() {
    const counts = State.getCounts();

    // Header stats
    DOM.totalTasks.textContent = counts.total;
    DOM.activeTasks.textContent = counts.active;
    DOM.completedTasks.textContent = counts.completed;

    // Status indicator
    DOM.statusIndicator.textContent = `${counts.completed} / ${counts.total} TASKS COMPLETED`;

    // Tab counts
    DOM.tabCountAll.textContent = counts.total;
    DOM.tabCountActive.textContent = counts.active;
    DOM.tabCountCompleted.textContent = counts.completed;
    DOM.tabCountUrgent.textContent = counts.urgent;
  },

  updateProgressRing() {
    const counts = State.getCounts();
    const percentage =
      counts.total === 0
        ? 0
        : Math.round((counts.completed / counts.total) * 100);

    // Update text
    DOM.progress.textContent = `${percentage}%`;

    // Animate ring
    const circumference = 251.2; // 2 * PI * 40
    const offset = circumference - (percentage / 100) * circumference;

    if (DOM.progressRing) {
      DOM.progressRing.style.strokeDashoffset = offset;
    }
  },

  updateClearCompletedBtn() {
    const counts = State.getCounts();

    if (counts.completed > 0) {
      DOM.clearCompletedBtn.disabled = false;
      DOM.clearCount.textContent = `(${counts.completed})`;
    } else {
      DOM.clearCompletedBtn.disabled = true;
      DOM.clearCount.textContent = "(0)";
    }
  },

  updateBulkActionsBar() {
    const count = State.selectedTasks.length;

    if (count > 0) {
      DOM.bulkActionsBar.classList.remove("hidden");
      DOM.selectedCount.textContent = count;
    } else {
      DOM.bulkActionsBar.classList.add("hidden");
    }
  },

  // DATE & TIME HELPERS

  updateDate() {
    const formatted = new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());

    DOM.currentDate.textContent = formatted.toUpperCase();
  },

  formatTime(timeString) {
    if (!timeString) return "";

    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;

    return `${hour12}:${minutes} ${ampm}`;
  },

  getCompletedTime(timestamp) {
    if (!timestamp) return "Just now";

    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return "Yesterday";
    return `${days}d ago`;
  },

  getDueDateStatus(dateString) {
    if (!dateString) {
      return { text: "", class: "", icon: "event" };
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(dateString);
    dueDate.setHours(0, 0, 0, 0);

    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { text: "OVERDUE", class: "overdue", icon: "warning" };
    } else if (diffDays === 0) {
      return { text: "DUE TODAY", class: "due-today", icon: "event" };
    } else if (diffDays === 1) {
      return { text: "DUE TOMORROW", class: "due-soon", icon: "event" };
    } else if (diffDays <= 7) {
      return {
        text: `DUE IN ${diffDays} DAYS`,
        class: "due-soon",
        icon: "event",
      };
    } else {
      const formatted = new Intl.DateTimeFormat("en-GB", {
        month: "short",
        day: "numeric",
      }).format(dueDate);
      return { text: formatted.toUpperCase(), class: "", icon: "event" };
    }
  },

  // MODALS

  openModal(modal) {
    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  },

  closeModal(modal) {
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  },

  closeAllModals() {
    document.querySelectorAll(".modal.active").forEach((modal) => {
      this.closeModal(modal);
    });
  },

  populateEditModal(task) {
    DOM.editTaskId.value = task.id;
    DOM.editTitleInput.value = task.title;
    DOM.editDescriptionInput.value = task.description || "";
    DOM.editTimeInput.value = task.time || "";
    DOM.editDateInput.value = task.date || "";
    DOM.editProjectInput.value = task.project || "";
    DOM.editUrgentToggle.checked = task.urgent;
  },

  // SEARCH UI

  updateSearchUI() {
    if (State.searchQuery) {
      DOM.clearSearchBtn.classList.remove("hidden");
    } else {
      DOM.clearSearchBtn.classList.add("hidden");
    }
  },

  // TOAST NOTIFICATIONS

  showToast(message, type = "success", undoCallback = null) {
    const toast = document.createElement("div");
    toast.className = `toast toast--${type}`;

    const icons = {
      success: "check_circle",
      error: "error",
      warning: "warning",
    };

    const undoBtn = undoCallback
      ? `<button class="toast-undo">UNDO</button>`
      : "";

    toast.innerHTML = `
      <span class="material-symbols-outlined toast-icon">${icons[type]}</span>
      <span class="toast-message">${message}</span>
      ${undoBtn}
      <button class="toast-close">
        <span class="material-symbols-outlined">close</span>
      </button>
    `;

    DOM.toastContainer.appendChild(toast);

    // Close button
    toast.querySelector(".toast-close").addEventListener("click", () => {
      this.removeToast(toast);
    });

    // Undo button
    if (undoCallback) {
      toast.querySelector(".toast-undo").addEventListener("click", () => {
        undoCallback();
        this.removeToast(toast);
      });
    }

    // Auto remove
    const timeout = undoCallback ? 5000 : 3000;
    setTimeout(() => {
      this.removeToast(toast);
    }, timeout);
  },

  removeToast(toast) {
    if (toast && toast.parentNode) {
      toast.style.animation = "toastSlideOut 0.3s ease forwards";
      setTimeout(() => {
        if (toast.parentNode) {
          toast.remove();
        }
      }, 300);
    }
  },

  // CHARACTER COUNTER

  updateCharCounter() {
    const count = DOM.taskTitleInput.value.length;
    DOM.titleCharCount.textContent = count;
  },

  // FILTER TABS

  setActiveTab(filter) {
    document.querySelectorAll(".tab").forEach((tab) => {
      const isActive = tab.dataset.filter === filter;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive);
    });
  },

  // UTILITIES

  escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  },

  // Focus management for accessibility
  focusTask(taskId) {
    const taskCard = document.querySelector(`[data-id="${taskId}"]`);
    if (taskCard) {
      taskCard.focus();
      taskCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  },
};
