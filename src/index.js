import Task from "./js/task.js";
import TaskController from "./js/task-controller.js";
import { updateHompage } from "./js/home-content-controller.js";
import "./js/menu-animations.js";

import "./styles/main.scss";
import "./styles/menu.scss";
import "./styles/buttons.scss";
import "./styles/content.scss";
import "./styles/task.scss";

function init() {
  TaskController.addRandomTasks(15);
  updateHompage();
}

init();
