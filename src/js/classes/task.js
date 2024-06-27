import { addDays } from "date-fns";

class Task {
  static count = 0;

  constructor(
    name,
    category,
    description = "",
    dueDate = addDays(new Date(), 1),
    priority = 0
  ) {
    this.name = name;
    this.category = category;
    this.description = description;
    this.dueDate = dueDate == null ? addDays(new Date(), 1) : dueDate;
    this.priority = priority;
    this.completed = false;

    this.id = ++Task.count;
  }
}

export { Task };
