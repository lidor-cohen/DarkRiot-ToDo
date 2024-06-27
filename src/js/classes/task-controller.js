import { Task } from "../classes/task";
import { contentController } from "../util/content-dom-handler";

// Define the TaskController class as a constructor function
function TaskController() {
  // Initialize an empty array to store tasks
  this.tasks = [];
}

// Add methods to the prototype of TaskController
TaskController.prototype = {
  // Method to add a new task
  addTask: function (task) {
    contentController.createSectionOfCategory(task.category);
    const returnVal = this.tasks.push(task);
    contentController.renderContent();

    return returnVal;
  },

  // Method to mark a task as completed
  completeTask: function (taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = true;
      return task; // Return the completed task
    }
    return null; // Task not found
  },

  // Method to delete a task
  deleteTask: function (taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  },

  // Method to get all tasks
  getAllTasks: function (category) {
    let tasksOfCategory = [];
    if (category && category.toLowerCase() !== "home") {
      this.tasks.forEach((task) => {
        if (task.category.toLowerCase() === category.toLowerCase()) {
          tasksOfCategory.push(task);
        }
      });

      return tasksOfCategory;
    }
    return this.tasks;
  },

  getUniqueCategories: function () {
    let uniqueCategoryList = [];
    this.getAllTasks().forEach((task) => {
      if (!uniqueCategoryList.includes(task.category)) {
        uniqueCategoryList.push(task.category);
      }
    });

    return uniqueCategoryList;
  },

  getTaskOfID: function (taskID) {
    const taskID_number = taskID.substring(4, taskID.length);
    console.log(this.tasks.filter((task) => task.id == taskID_number));
    return this.tasks.filter((task) => task.id == taskID_number)[0];
  },
};

// Create global task controller
const taskController = new TaskController();
export { taskController };
