import "./js/css-imports";
import { Task } from "./js/classes/task";
import { taskController } from "./js/classes/task-controller";
import { menuController } from "./js/util/menu-dom-handler";
import { contentController } from "./js/util/content-dom-handler";

function init() {
  taskController.addTask(new Task("Demo Task", "General"));

  menuController.bindEvents();
  menuController.updateCategories();

  contentController.changeView(contentController.getCategoryId("General"));
}

init();
