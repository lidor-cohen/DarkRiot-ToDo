function TaskWindowController() {
  this.addTaskButton = document.getElementById("add-task-wrapper");
  this.taskDialog = document.getElementById("task-dialog-wrapper");
}

TaskWindowController.prototype = {
  openNewTask: function () {},
  bindEvents: function () {
    this.addTaskButton.addEventListener(
      "click",
      () => this.taskDialog.showModal(),
      false
    );
  },
};

const taskWindowController = new TaskWindowController();

export { taskWindowController };
