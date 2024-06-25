import openImage from "../../assets/open-90.png";

function ContentController() {}

ContentController.prototype = {
  // Homepage Controls
  // Add task to container
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

    if (container) {
      container = document.querySelector(".active");
      container.innerHTML += taskItem;
    } else {
      homeTaskListView.innerHTML += taskItem;
    }
  },
};

const contentController = new ContentController();
export { contentController };
