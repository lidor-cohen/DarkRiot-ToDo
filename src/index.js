import addAllAnimations, { initMenu } from "./js/menu-animations.js";
import Task from "./js/task.js";
import TaskController from "./js/task-controller.js";
import "./js/home-content-controller.js";

import "./styles/main.scss";
import "./styles/menu.scss";
import "./styles/buttons.scss";
import "./styles/content.scss";
import "./styles/task.scss";

function init() {
  TaskController.addTask(
    new Task("Task 1", "Description 1", "General", new Date(2024, 2, 15), 1)
  );
  TaskController.addTask(
    new Task("Task 2", "Description 2", "Army", new Date(2024, 2, 15), 1)
  );
  TaskController.addTask(
    new Task("Task 3", "Description 3", "Medical", new Date(2024, 2, 15), 1)
  );
  TaskController.addTask(
    new Task("Task 4", "Description 4", "General", new Date(2024, 2, 15), 1)
  );
  TaskController.addTask(
    new Task("Task 5", "Description 5", "Army", new Date(2024, 2, 15), 1)
  );
  TaskController.addTask(
    new Task("Task 5", "Description 5", "Army", new Date(2024, 2, 15), 1)
  );
  TaskController.addTask(
    new Task("Task 5", "Description 5", "Army", new Date(2024, 2, 15), 1)
  );
  TaskController.addTask(
    new Task("Task 5", "Description 5", "Army", new Date(2024, 2, 15), 1)
  );
  TaskController.addTask(
    new Task("Task 5", "Description 5", "Army", new Date(2024, 2, 15), 1)
  );
  TaskController.updateDOM();
  //   initMenu();
  addAllAnimations();
}

init();
