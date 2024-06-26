import "./js/css-imports";
import { Task } from "./js/classes/task";
import { taskController } from "./js/classes/task-controller";
import { menuController } from "./js/util/menu-dom-handler";
import { contentController } from "./js/util/content-dom-handler";

function init() {
  taskController.addTask(new Task("Demo Task", "General"));
  taskController.addTask(new Task("Demo2 Task", "Army"));

  menuController.updateDom();
  contentController.renderTasks();
}

init();
