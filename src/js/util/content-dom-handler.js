import openImage from "../../assets/open-90.png";

function ContentController() {
  this.contentContainer = document.getElementById("content-container");
}

ContentController.prototype = {
  getCategoryId: (categoryName) =>
    categoryName.toLowerCase().replace(" ", "-") + "-section",

  // Homepage Controls

  // Add task to task-view container
  addTaskToView: function (task, container) {
    const homeTaskListView = document.getElementById("home-task-view");

    const taskItem = `
          <div class="task-item">
              <div class="task-checkbox-container">
                  <input type="checkbox" />
                  <h4>${task.name}</h4>
              </div>
  
              <img src="${openImage}" alt="open task icon" />
          </div>
      `;

    // if specified a specific container then append the task
    // to it, else, append it to the active container
    if (!container) {
      container = document.querySelector(".active");
      container.innerHTML += taskItem;
    } else {
      homeTaskListView.innerHTML += taskItem;
    }
  },

  createSectionOfCategory: function (categoryName) {
    const sectionHTML = `
      <div class="content-section" id="${this.getCategoryId(categoryName)}">
        <h1>${categoryName}</h1>
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
  },
};

const contentController = new ContentController();
export { contentController };
