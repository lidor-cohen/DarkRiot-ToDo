import "./js/css-imports";
import { Task } from "./js/classes/task";
import { taskController } from "./js/classes/task-controller";
import { updateMenuCategories } from "./js/util/menu-dom-handler";

function init() {
  const task1 = new Task("Lidor", "Army");
  const task2 = new Task("Amit", "General");
  const task3 = new Task("Matan", "Medical");
  const task5 = new Task("Matan", "Selfish");
  const task6 = new Task("Matan", "Greed");
  const task7 = new Task("Matan", "Lust");

  const task4 = new Task("Hadar", "Army");
  taskController.addTask(task1);
  taskController.addTask(task2);
  taskController.addTask(task3);
  taskController.addTask(task4);
  taskController.addTask(task5);
  taskController.addTask(task6);
  taskController.addTask(task7);

  updateMenuCategories();
}

init();
