import listItemImage from "../../assets/list-item-90.png";
import deleteItemImage from "../../assets/delete-90.png";
import { taskController } from "../classes/task-controller";

function MenuController() {
  this.listContainer = document.getElementById("category-list-container");
}

MenuController.prototype = {
  // Add category to "your lists" menu
  addCategoryToList: function (categoryName, deletable = true) {
    // Create list item to append
    const listItem = `
    <div style="padding-left:1.5rem" class="clickable-menu-item category-item option-item">
        <div class="img-text-option-wrapper">
            <img src="${listItemImage}" alt="list item sign" />
            <h4>${categoryName}</h4>
        </div>

        ${
          deletable
            ? `<img src="${deleteItemImage}" alt="delete item sign" />`
            : ``
        }
    </div>
    `;

    // Add the list item to the container HTML
    this.listContainer.innerHTML += listItem;
  },

  updateCategories: function () {
    console.log("ENTERED");
    let uniqueCategoryList = [];
    taskController.getAllTasks().forEach((task) => {
      if (!uniqueCategoryList.includes(task.category)) {
        uniqueCategoryList.push(task.category);
      }
    });

    uniqueCategoryList.forEach((category) => this.addCategoryToList(category));
  },
};

const menuController = new MenuController();
export { menuController };
