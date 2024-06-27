import { Task } from "../classes/task";
import { taskController } from "../classes/task-controller";

function TaskWindowController() {
  this.addTaskButton = document.getElementById("add-task-wrapper");
  this.taskDialog = document.getElementById("task-dialog-wrapper");
  this.categorySelect = document.getElementById("dialog-input-category");
  this.priorityLabel = document.getElementById("priority-label");
  this.prioritySlider = document.getElementById("dialog-input-priority");
  this.submitButton = document.getElementById("submit-task-button");
  this.taskForm = document.getElementById("new-task-form");
}

TaskWindowController.prototype = {
  bindEvents: function () {
    console.log(taskController.tasks);
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

    this.submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      const formElements = this.taskForm.children;

      const taskName = formElements[0].querySelector("input").value;
      const taskDescription = formElements[1].querySelector("input").value;
      const taskCategory = formElements[2].querySelector("select").value;
      const taskPriority = formElements[3].querySelector("input").valueAsNumber;
      const taskDueDate = formElements[4].querySelector("input").valueAsDate;

      if (taskName.length > 3 && taskCategory !== "") {
        taskController.addTask(
          new Task(
            taskName,
            taskCategory,
            taskDescription,
            taskDueDate,
            taskPriority
          )
        );

        this.taskForm.reset();
        this.taskDialog.close();
      } else {
        alert("Task Name has to be more than 3 digits");
      }
    });
  },
};

const taskWindowController = new TaskWindowController();

export { taskWindowController };
