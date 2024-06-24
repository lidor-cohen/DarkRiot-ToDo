import { format } from "date-fns";

export default class Task {
  constructor(taskName, category, description, dueDate, priority) {
    this.taskName = taskName;
    this.category = category;
    this.description = description;
    this.dueDate = dueDate === undefined ? null : format(dueDate, "dd-MM-yyyy");
    this.priority = priority === undefined ? 0 : priority;
    this.subTasks = [];
    this.completed = false;
  }
}
