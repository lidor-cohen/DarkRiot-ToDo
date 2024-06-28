import listItemImage from "../../assets/list-item-90.png";
import deleteItemImage from "../../assets/delete-90.png";
import { taskController } from "../classes/task-controller";
import { Task } from "../classes/task";
import { contentController } from "./content-dom-handler";

function MenuController() {
  this.listContainer = document.getElementById("category-list-container");
  this.addListDialog = document.getElementById("add-list-wrapper");
  this.addListButton = document.getElementById("list-add-button");
  this.actionAddList = document.getElementById("submit-newlist-button");
  this.addListInput = document.getElementById("dialog-input-listname");
  this.firstRun = true;
}

MenuController.prototype = {
  // Add category to "your lists" menu
  addCategoryToList: function (categoryName, deletable = true) {
    // Create list item to append
    const listItem = `
    <div style="padding-left:1.5rem" class="clickable-menu-item category-item option-item category-clickable"">
        <div class="img-text-option-wrapper">
            <img src="${listItemImage}" alt="list item sign" />
            <h4>${categoryName}</h4>
        </div>
    </div>
    `;

    // Add the list item to the container HTML
    this.listContainer.innerHTML += listItem;
  },

  updateCategories: function () {
    const uniqueCategoryList = taskController.getUniqueCategories();
    this.listContainer.innerHTML = "";
    uniqueCategoryList.forEach((category) =>
      this.addCategoryToList(category, category === "General" ? false : true)
    );
  },

  bindEvents: function () {
    if (this.firstRun) {
      this.firstRun = false;
      const homeButton = document.getElementById("home-button");
      const yourListsButton = document.getElementById("list-button");

      homeButton.addEventListener(
        "click",
        () => {
          contentController.changeView(contentController.getCategoryId("home"));
        },
        false
      );

      yourListsButton.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        contentController.changeView("list-view-section");
      });

      this.addListButton.addEventListener("click", (e) => {
        e.stopPropagation();
        this.addListDialog.showModal();
      });

      this.actionAddList.addEventListener("click", (e) => {
        e.preventDefault();
        const inputValue = this.addListInput.value.toString();
        if (inputValue.length > 3) {
          taskController.addTask(new Task(`${inputValue} Task`, inputValue));

          this.updateDom();
          this.addListDialog.close();
          this.actionAddList.parentElement.reset();
        } else {
          alert("List name must be longer than 3 characters");
        }
      });
    }

    const categoryListButtons = document.querySelectorAll(
      ".category-clickable"
    );

    categoryListButtons.forEach((button) => {
      button.addEventListener(
        "click",
        (e) => {
          e.stopPropagation();
          contentController.changeView(
            contentController.getCategoryId(
              button.querySelector("h4").textContent
            )
          );
        },
        false
      );
    });
  },

  updateDom: function () {
    this.updateCategories();
    this.bindEvents();
  },
};

const menuController = new MenuController();
export { menuController };
