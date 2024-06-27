import openImage from "../../assets/open-90.png";
import { taskController } from "../classes/task-controller";
import { menuController } from "./menu-dom-handler";
import { format } from "date-fns";

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
        <div id="task${task.id}" class="task-item">
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
    this.bindEvents();
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

  bindEvents: function () {
    (function openTaskButton() {
      const buttons = document.querySelectorAll(".task-item img");
      const dialogModal = document.querySelector("#task-show-wrapper");
      const dialogContent = dialogModal.querySelector(
        "#task-show-wrapper .dialog-inner"
      );

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const task = taskController.getTaskOfID(button.parentElement.id);

          const taskInfo = `
            <div>
              <h1>Task Name: ${task.name}</h1>
              <h3>Task Description: ${
                task.description === "" ? "No Description" : task.description
              } </h3>
              <h3>Task Category: ${task.category} </h3>
              <h3>Task Priority: ${task.priority} </h3>
              <h3>Task Due Date: ${format(
                task.dueDate,
                "dd-MM-yyy hh:mm"
              )} </h3>
            </div>
          `;

          dialogContent.innerHTML = taskInfo;
          dialogModal.showModal();
        });
      });
    })();
  },
};

const contentController = new ContentController();
export { contentController };
