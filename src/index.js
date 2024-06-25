import "./js/css-imports";
import { Task } from "./js/classes/task";
import { taskController } from "./js/classes/task-controller";
import { menuController } from "./js/util/menu-dom-handler";

function init() {
  taskController.addTask(new Task("Kill Sister", "General"));
  taskController.addTask(new Task("Kill Mother", "Army"));
  taskController.addTask(new Task("Kill Mother", "Army"));
  taskController.addTask(new Task("Kill Mother", "Army"));
  taskController.addTask(new Task("Kill Mother", "Army"));
  taskController.addTask(new Task("Kill Mother", "Army"));

  console.log(taskController.getAllTasks());
  menuController.updateCategories();
}

init();
