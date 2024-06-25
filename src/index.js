import "./js/css-imports";
import { Task } from "./js/classes/task";
import { taskController } from "./js/classes/task-controller";
import { menuController } from "./js/util/menu-dom-handler";

function init() {
  taskController.addTask(new Task("Demo Task", "General"));

  console.log(taskController.getAllTasks());
  menuController.updateCategories();
}

init();
