const DOM = {

  // HEADER
  progress: document.getElementById("progress-percentage"),
  progressRing: document.getElementById("progress-ring-fill"),
  currentDate: document.getElementById("current-date"),

  // Stats
  totalTasks: document.getElementById("total-tasks"),
  activeTasks: document.getElementById("active-tasks"),
  completedTasks: document.getElementById("completed-tasks"),

  // CONTROL BAR
  searchInput: document.getElementById("search-input"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  sortSelect: document.getElementById("sort-select"),

  // FILTER BAR
  statusIndicator: document.getElementById("status-indicator"),
  filterTabs: document.getElementById("filter-tabs"),
  tabCountAll: document.getElementById("tab-count-all"),
  tabCountActive: document.getElementById("tab-count-active"),
  tabCountCompleted: document.getElementById("tab-count-completed"),
  tabCountUrgent: document.getElementById("tab-count-urgent"),

  // TASK LIST
  taskList: document.getElementById("task-list"),

  // EMPTY STATES
  emptyState: document.getElementById("empty-state"),
  emptyAddBtn: document.getElementById("empty-add-btn"),
  noResultsState: document.getElementById("no-results-state"),
  clearFiltersBtn: document.getElementById("clear-filters-btn"),

  // BULK ACTIONS
  bulkActionsBar: document.getElementById("bulk-actions-bar"),
  selectedCount: document.getElementById("selected-count"),
  bulkCompleteBtn: document.getElementById("bulk-complete-btn"),
  bulkDeleteBtn: document.getElementById("bulk-delete-btn"),
  bulkCancelBtn: document.getElementById("bulk-cancel-btn"),

  // FOOTER
  clearCompletedBtn: document.getElementById("clear-completed-btn"),
  clearCount: document.getElementById("clear-count"),

  // FAB (Floating Action Button)
  addTaskBtn: document.getElementById("add-task-btn"),

  // ADD TASK MODAL
  addTaskModal: document.getElementById("add-task-modal"),
  addTaskForm: document.getElementById("add-task-form"),
  addModalClose: document.getElementById("add-modal-close"),
  cancelAddBtn: document.getElementById("cancel-add-btn"),
  saveTaskBtn: document.getElementById("save-task-btn"),
  taskTitleInput: document.getElementById("task-title-input"),
  taskDescriptionInput: document.getElementById("task-description-input"),
  taskTimeInput: document.getElementById("task-time-input"),
  taskDateInput: document.getElementById("task-date-input"),
  taskProjectInput: document.getElementById("task-project-input"),
  taskUrgentToggle: document.getElementById("task-urgent-toggle"),
  titleCharCount: document.getElementById("title-char-count"),
  quickTags: document.getElementById("quick-tags"),

  // EDIT TASK MODAL
  editTaskModal: document.getElementById("edit-task-modal"),
  editTaskForm: document.getElementById("edit-task-form"),
  editModalClose: document.getElementById("edit-modal-close"),
  cancelEditBtn: document.getElementById("cancel-edit-btn"),
  updateTaskBtn: document.getElementById("update-task-btn"),
  editTaskId: document.getElementById("edit-task-id"),
  editTitleInput: document.getElementById("edit-title-input"),
  editDescriptionInput: document.getElementById("edit-description-input"),
  editTimeInput: document.getElementById("edit-time-input"),
  editDateInput: document.getElementById("edit-date-input"),
  editProjectInput: document.getElementById("edit-project-input"),
  editUrgentToggle: document.getElementById("edit-urgent-toggle"),
  deleteFromEditBtn: document.getElementById("delete-from-edit-btn"),

  // DELETE CONFIRMATION MODAL
  deleteConfirmModal: document.getElementById("delete-confirm-modal"),
  deleteTaskId: document.getElementById("delete-task-id"),
  confirmDeleteBtn: document.getElementById("confirm-delete-btn"),
  cancelDeleteBtn: document.getElementById("cancel-delete-btn"),

  // CLEAR COMPLETED MODAL
  clearConfirmModal: document.getElementById("clear-confirm-modal"),
  clearConfirmCount: document.getElementById("clear-confirm-count"),
  confirmClearBtn: document.getElementById("confirm-clear-btn"),
  cancelClearBtn: document.getElementById("cancel-clear-btn"),

  // SHORTCUTS MODAL
  shortcutsModal: document.getElementById("shortcuts-modal"),
  shortcutsClose: document.getElementById("shortcuts-close"),

  // TOAST CONTAINER
  toastContainer: document.getElementById("toast-container"),
};
