import { taskController } from "../classes/task-controller";

function TaskWindowController() {
  this.addTaskButton = document.getElementById("add-task-wrapper");
  this.taskDialog = document.getElementById("task-dialog-wrapper");
  this.categorySelect = document.getElementById("dialog-input-category");
  this.priorityLabel = document.getElementById("priority-label");
  this.prioritySlider = document.getElementById("dialog-input-priority");
}

TaskWindowController.prototype = {
  bindEvents: function () {
    // Priority Range
    this.prioritySlider.addEventListener(
      "input",
      (e) =>
        (this.priorityLabel.textContent = "Priority (" + e.target.value + ")")
    );

    // Category Selector
    this.categorySelect.innerHTML = "";
    taskController.getUniqueCategories().forEach((category) => {
      const optionItem = `
        <option value="${category}">${category}</option>
        `;

      this.categorySelect.innerHTML += optionItem;
    });

    // Add Task Button
    this.addTaskButton.addEventListener(
      "click",
      () => this.taskDialog.showModal(),
      false
    );
  },
};

const taskWindowController = new TaskWindowController();

export { taskWindowController };
