import "./js/css-imports";
import { Task } from "./js/classes/task";
import { taskController } from "./js/classes/task-controller";
import {
  addCategoryToList,
  updateMenuCategories,
} from "./js/util/menu-dom-handler";

import { addTaskToView } from "./js/util/content-dom-handler";

function init() {
  addCategoryToList("General", false);

  addTaskToView(
    new Task("Kill Mother", "General"),
    document.getElementById("home-task-view")
  );
  updateMenuCategories();
}

init();
