import { addDays } from "date-fns";

class Task {
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
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}

export { Task };
