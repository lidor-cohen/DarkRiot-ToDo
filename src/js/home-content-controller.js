import TaskController from "./task-controller.js";
import updateDom from "./menu-animations.js";

import openImage from "../assets/open-90.png";
import listItemImage from "../assets/list-item-90.png";

document.addEventListener("DOMContentLoaded", () => {
  (function contentController() {
    const sections = document.querySelectorAll(".content-section");
    const homeButton = document.getElementById("home-button");
    const listViewButton = document.getElementById("list-button");

    showSection("home-section");

    homeButton.addEventListener("click", () => showSection("home-section"));

    listViewButton.addEventListener("click", () =>
      showSection("list-view-section")
    );

    function showSection(sectionId) {
      // Hide all sections
      sections.forEach(function (section) {
        section.classList.remove("active");
      });

      // Show the selected section
      const selectedSection = document.getElementById(sectionId);
      if (selectedSection) {
        selectedSection.classList.add("active");
      }
    }
  })();
});

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

function updateTaskLengthHeader() {
  // Task Header
  const totalTaskHeader = document.getElementById("total-task-header");
  totalTaskHeader.textContent = TaskController.getTaskAmount();
}

function updateTaskList() {
  // Task List
  const taskList = document.querySelector(".task-view");
  taskList.innerHTML = "";
  TaskController.getTasks().forEach((task) => {
    const taskItem = createTaskItem(task);
    taskList.appendChild(taskItem);
  });
}

// Create the lists buttons underneath the "Your Lists" section
function createCategoryContainers() {
  // get the category list container
  const categoryContainer = document.querySelector("#category-list-container");

  // reset the category list container
  categoryContainer.innerHTML = "";
  let categories = [];

  // get the tasks
  TaskController.getTasks().forEach((task) => {
    if (!categories.includes(task.category)) {
      categories.push(task.category);
    }
  });

  // Create categories
  categories.forEach((category) => {
    const categoryElement = document.createElement("div");

    // Category Title
    const categoryTitle = document.createElement("h4");
    categoryTitle.textContent = category;

    // Category Icon
    const categoryIcon = document.createElement("img");
    categoryIcon.src = listItemImage;

    // Category Content Wrapper
    const categoryContentWrapper = document.createElement("div");
    categoryContentWrapper.classList.add("img-text-option-wrapper");
    categoryContentWrapper.appendChild(categoryIcon);
    categoryContentWrapper.appendChild(categoryTitle);

    categoryElement.appendChild(categoryContentWrapper);

    categoryElement.classList.add(
      "clickable-menu-item",
      "category-item",
      "option-item"
    );
    categoryElement.style.paddingLeft = "20px";

    categoryContainer.appendChild(categoryElement);
  });
}

export function updateHompage() {
  updateTaskLengthHeader();
  updateTaskList();
  createCategoryContainers();
  updateDom();
}
