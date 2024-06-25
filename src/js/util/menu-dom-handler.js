import listItemImage from "../../assets/list-item-90.png";
import deleteItemImage from "../../assets/delete-90.png";
import { taskController } from "../classes/task-controller";

const listContainer = document.getElementById("category-list-container");

// Add category to "your lists" menu
const addCategoryToList = (categoryName, deletable = true) => {
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
  listContainer.innerHTML += listItem;
};

const updateMenuCategories = () => {
  let uniqueCategoryList = [];
  taskController.getAllTasks().forEach((task) => {
    if (!uniqueCategoryList.includes(task.category)) {
      uniqueCategoryList.push(task.category);
    }
  });

  uniqueCategoryList.forEach((category) => addCategoryToList(category));
};

export { addCategoryToList, updateMenuCategories };
