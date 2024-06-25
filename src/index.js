import "./js/css-imports";
import { Task } from "./js/classes/task";
import { taskController } from "./js/classes/task-controller";
import {
  addCategoryToList,
  updateMenuCategories,
} from "./js/util/menu-dom-handler";

function init() {
  const task1 = new Task("Lidor", "Army");
  const task2 = new Task("Amit", "General");
  const task3 = new Task("Matan", "Medical");
  const task4 = new Task("Hadar", "Army");
  taskController.addTask(task1);
  taskController.addTask(task2);
  taskController.addTask(task3);
  taskController.addTask(task4);

  updateMenuCategories();
}

init();
