import "./styles/main.scss";
import "./styles/menu.scss";
import "./styles/buttons.scss";
import "./styles/content.scss";

import addAllAnimations, { initMenu } from "./js/menu-animations.js";
import Task from "./js/task.js";
import TaskController from "./js/taskController.js";
import "./js/home-content-controller.js";

addAllAnimations();
initMenu();
