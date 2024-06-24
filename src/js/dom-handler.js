import {
  primaryButtonsAnimations,
  menuButtonsAnimations,
} from "./menu-animations.js";

import {
  updateTaskLengthHeader,
  updateTaskList,
  createCategoryContainers,
  addNewCategory,
} from "./home-content-controller.js";

export default class DomHandler {
  static updateMenuAnimations = () => {
    primaryButtonsAnimations();
    menuButtonsAnimations();
  };

  static updateCategories = createCategoryContainers;
  static addCategory = (categoryName) => {
    addNewCategory(categoryName);
  };
  static updateAllTaskRelated() {
    updateTaskList();
    updateTaskLengthHeader();
  }

  static updateAll() {
    this.updateAllTaskRelated();
    this.updateCategories();
    this.updateMenuAnimations();
  }
}
