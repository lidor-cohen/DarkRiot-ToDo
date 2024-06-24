import Task from "./js/task.js";
import TaskController from "./js/task-controller.js";
import "./js/menu-animations.js";
import { createSection } from "./js/content-controller.js";

import "./styles/main.scss";
import "./styles/menu.scss";
import "./styles/buttons.scss";
import "./styles/content.scss";
import "./styles/task.scss";
import DomHandler from "./js/dom-handler.js";

function init() {
  TaskController.addRandomTasks(3);
  createSection("Army");

  DomHandler.updateAll();
}

init();
