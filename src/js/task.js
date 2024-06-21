export default class Task {
  #taskTemplate = {
    id: 0,
    taskName: "",
    category: "",
    completed: false,
  };

  constructor(taskName, category) {
    this.taskName = taskName;
    this.category = category;

    TaskController.addTask(this);
  }
}
