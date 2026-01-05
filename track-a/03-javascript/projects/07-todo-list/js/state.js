const State = {
  // DATA
  todos: [],
  currentFilter: "all",
  searchQuery: "",
  currentSort: "created",
  selectedTasks: [],
  lastDeleted: null,

  // LOCAL STORAGE
  save() {
    try {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }
  },

  load() {
    try {
      const saved = localStorage.getItem("todos");
      if (saved) {
        this.todos = JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load from localStorage:", e);
      this.todos = [];
    }
  },

  // CRUD OPERATIONS

  // Create a new task
  addTask(taskData) {
    const newTask = {
      id: Date.now(),
      title: taskData.title.trim(),
      description: taskData.description?.trim() || "",
      completed: false,
      urgent: taskData.urgent || false,
      time: taskData.time || "",
      date: taskData.date || "",
      project: taskData.project?.trim() || "",
      createdAt: Date.now(),
      completedAt: null,
    };

    this.todos.unshift(newTask);
    this.save();
    return newTask;
  },

  // Delete a task
  deleteTask(taskId) {
    const taskIndex = this.todos.findIndex((t) => t.id === Number(taskId));

    if (taskIndex > -1) {
      // Save for undo
      this.lastDeleted = {
        task: { ...this.todos[taskIndex] },
        index: taskIndex,
        timestamp: Date.now(),
      };

      this.todos.splice(taskIndex, 1);
      this.save();
      return true;
    }
    return false;
  },

  // Toggle task completion
  toggleTask(taskId) {
    const task = this.todos.find((t) => t.id === Number(taskId));
    if (task) {
      task.completed = !task.completed;
      task.completedAt = task.completed ? Date.now() : null;
      this.save();
      return true;
    }
    return false;
  },

  // Update a task
  updateTask(taskId, updates) {
    const task = this.todos.find((t) => t.id === Number(taskId));
    if (task) {
      Object.assign(task, {
        title: updates.title?.trim() || task.title,
        description: updates.description?.trim() ?? task.description,
        time: updates.time ?? task.time,
        date: updates.date ?? task.date,
        project: updates.project?.trim() ?? task.project,
        urgent: updates.urgent ?? task.urgent,
      });
      this.save();
      return true;
    }
    return false;
  },

  // Toggle urgent status
  toggleUrgent(taskId) {
    const task = this.todos.find((t) => t.id === Number(taskId));
    if (task) {
      task.urgent = !task.urgent;
      this.save();
      return task.urgent;
    }
    return null;
  },

  // Clear all completed tasks
  clearCompleted() {
    const count = this.todos.filter((t) => t.completed).length;
    this.todos = this.todos.filter((t) => !t.completed);
    this.save();
    return count;
  },

  // Undo last delete
  undoDelete() {
    if (!this.lastDeleted) return false;

    // Only allow undo within 10 seconds
    if (Date.now() - this.lastDeleted.timestamp > 10000) {
      this.lastDeleted = null;
      return false;
    }

    // Restore the task at its original position
    const index = Math.min(this.lastDeleted.index, this.todos.length);
    this.todos.splice(index, 0, this.lastDeleted.task);
    this.save();
    this.lastDeleted = null;

    return true;
  },

  // SELECTION (Bulk Actions)

  toggleSelection(taskId) {
    const id = Number(taskId);
    const index = this.selectedTasks.indexOf(id);

    if (index > -1) {
      this.selectedTasks.splice(index, 1);
    } else {
      this.selectedTasks.push(id);
    }
  },

  selectAll() {
    const visibleTasks = this.getFilteredTasks();
    this.selectedTasks = visibleTasks
      .filter((t) => !t.completed)
      .map((t) => t.id);
  },

  clearSelection() {
    this.selectedTasks = [];
  },

  isSelected(taskId) {
    return this.selectedTasks.includes(Number(taskId));
  },

  completeSelected() {
    let count = 0;
    this.selectedTasks.forEach((id) => {
      const task = this.todos.find((t) => t.id === id);
      if (task && !task.completed) {
        task.completed = true;
        task.completedAt = Date.now();
        count++;
      }
    });
    this.save();
    this.clearSelection();
    return count;
  },

  deleteSelected() {
    const count = this.selectedTasks.length;
    this.todos = this.todos.filter((t) => !this.selectedTasks.includes(t.id));
    this.save();
    this.clearSelection();
    return count;
  },

  // REORDERING (Drag & Drop)

  reorderTask(fromId, toId) {
    const fromIndex = this.todos.findIndex((t) => t.id === Number(fromId));
    const toIndex = this.todos.findIndex((t) => t.id === Number(toId));

    if (fromIndex === -1 || toIndex === -1) return false;

    const [movedTask] = this.todos.splice(fromIndex, 1);
    this.todos.splice(toIndex, 0, movedTask);

    this.save();
    return true;
  },

  // FILTERING & SORTING

  getFilteredTasks() {
    let filtered = [...this.todos];

    // Apply filter
    switch (this.currentFilter) {
      case "active":
        filtered = filtered.filter((t) => !t.completed);
        break;
      case "completed":
        filtered = filtered.filter((t) => t.completed);
        break;
      case "urgent":
        filtered = filtered.filter((t) => t.urgent && !t.completed);
        break;
    }

    // Apply search
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(query) ||
          t.description?.toLowerCase().includes(query) ||
          t.project?.toLowerCase().includes(query),
      );
    }

    // Apply sort
    switch (this.currentSort) {
      case "created":
        filtered.sort((a, b) => b.createdAt - a.createdAt);
        break;
      case "created-asc":
        filtered.sort((a, b) => a.createdAt - b.createdAt);
        break;
      case "alphabetical":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "urgent":
        filtered.sort((a, b) => {
          if (a.urgent === b.urgent) return b.createdAt - a.createdAt;
          return b.urgent ? 1 : -1;
        });
        break;
    }

    return filtered;
  },

  // STATISTICS

  getCounts() {
    const total = this.todos.length;
    const completed = this.todos.filter((t) => t.completed).length;
    const active = total - completed;
    const urgent = this.todos.filter((t) => t.urgent && !t.completed).length;

    return { total, active, completed, urgent };
  },

  getTaskById(taskId) {
    return this.todos.find((t) => t.id === Number(taskId));
  },
};
