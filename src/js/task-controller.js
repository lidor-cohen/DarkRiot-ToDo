import openImage from "../assets/open-90.png";
import { addMenuItemsAnimations } from "./menu-animations.js";

export default (function TaskController() {
  let tasks = [];

  // Getters
  let getTasks = () => tasks;
  let getTaskAmount = () => tasks.length;
  let getTask = (index) => tasks[index];

  // Setters
  let addTask = (task) => tasks.push(task);
  let setTask = (index, task) => (tasks[index] = task);
  let removeTask = (index) => tasks.splice(index, 1);
  let clearAllTasks = () => (tasks = []);
  let clearTaskOfCategory = (category) => {
    tasks.forEach((task, index) => {
      if (task.category.toLowerCase() === category.toLowerCase()) {
        removeTask(index);
      }
    });
  };

  // DOM manipulation
  function updateTaskLengthHeader() {
    // Task Header
    const totalTaskHeader = document.getElementById("total-task-header");
    totalTaskHeader.textContent = getTaskAmount();

    // Task List
    const taskList = document.querySelector(".task-view");
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const taskItem = createTaskItem(task);
      taskList.appendChild(taskItem);
    });
  }

  function createTaskItem(task) {
    // Initial Element
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    // Task checkbox and label container
    const taskCheckboxContainer = document.createElement("div");
    taskCheckboxContainer.classList.add("task-checkbox-container");

    // Task Checkbox
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckboxContainer.appendChild(taskCheckbox);

    // Task Name
    const taskName = document.createElement("h4");
    taskName.textContent = task.taskName;
    taskCheckboxContainer.appendChild(taskName);

    // append task checkbox container to task item
    taskItem.appendChild(taskCheckboxContainer);

    // Task Open Icon
    const taskOpenIcon = document.createElement("img");
    taskOpenIcon.src = openImage;
    taskItem.appendChild(taskOpenIcon);

    return taskItem;
  }

  function createCategoryContainers() {
    const categoryContainer = document.querySelector(
      "#category-list-container"
    );
    categoryContainer.innerHTML = "";
    let categories = [];

    tasks.forEach((task) => {
      if (!categories.includes(task.category)) {
        categories.push(task.category);
      }
    });

    // Create categories
    categories.forEach((category) => {
      const categoryElement = document.createElement("div");
      categoryElement.classList.add(
        "option-item",
        "clickable-menu-item",
        "category-item"
      );
      categoryElement.textContent = category;

      categoryContainer.appendChild(categoryElement);
    });

    console.log(categories);
  }

  function updateDOM() {
    updateTaskLengthHeader();
    createCategoryContainers();
  }

  // Export
  return {
    getTasks,
    getTaskAmount,
    getTask,
    addTask,
    setTask,
    removeTask,
    clearAllTasks,
    clearTaskOfCategory,
    updateDOM,
  };
})();
