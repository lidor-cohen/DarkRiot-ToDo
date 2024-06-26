import openImage from "../../assets/open-90.png";
import { taskController } from "../classes/task-controller";
import { menuController } from "./menu-dom-handler";

function ContentController() {
  this.contentContainer = document.getElementById("content-container");
}

ContentController.prototype = {
  getCategoryId: (categoryName) =>
    categoryName.toLowerCase().replace(" ", "-") + "-section",

  // Add task to task-view container
  renderContent: function () {
    const container = document.querySelector(".active");
    const taskViewContainer = container.children[1];

    if (container.id !== "list-view-section") {
      let categorySelected = container.id.substring(
        0,
        container.id.indexOf("-section")
      );

      taskViewContainer.innerHTML = "";

      taskController.getAllTasks(categorySelected).forEach((task) => {
        const taskItem = `
        <div class="task-item">
          <div class="task-checkbox-container">
            <input type="checkbox" />
            <h4>${task.name}</h4>
          </div>
    
          <img src="${openImage}" alt="open task icon" />
        </div>
      `;

        taskViewContainer.innerHTML += taskItem;
      });
    } else {
      taskViewContainer.innerHTML = "";

      taskController.getUniqueCategories().forEach((category) => {
        const listItem = `
        <div class="task-item category-clickable"" style="cursor:pointer; justify-content: center;">
          <h4>${category}</h4>
        </div>
      `;

        taskViewContainer.innerHTML += listItem;
      });

      menuController.bindEvents();
    }
  },

  createSectionOfCategory: function (categoryName) {
    const sectionHTML = `
      <div class="content-section" id="${this.getCategoryId(categoryName)}">
        <h1>${categoryName}</h1>
        <div class="task-view" id=${categoryName.toLowerCase()}-task-view></div>
      </div>`;

    this.contentContainer.innerHTML += sectionHTML;
  },

  changeView: function (sectionID) {
    const contentSections = document.querySelectorAll(".content-section");
    contentSections.forEach((element) => {
      element.classList.remove("active");
    });

    const activeSection = document.getElementById(sectionID);
    activeSection.classList.add("active");

    this.renderContent();
  },
};

const contentController = new ContentController();
export { contentController };
