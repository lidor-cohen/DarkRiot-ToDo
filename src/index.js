import "./js/css-imports";
import { Task } from "./js/classes/task";
import { taskController } from "./js/classes/task-controller";
import { menuController } from "./js/util/menu-dom-handler";
import { contentController } from "./js/util/content-dom-handler";

function init() {
  taskController.addTask(new Task("Demo Task", "General"));
  taskController.addTask(new Task("Army Task", "Army"));
  taskController.addTask(new Task("Medical Task", "Medical"));
  taskController.addTask(new Task("Class Task", "Class"));
  taskController.addTask(new Task("Class Task 2", "Class"));

  menuController.updateDom();
  contentController.renderContent();
}

init();
