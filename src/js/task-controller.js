import Task from "./task.js";

export default (function TaskController() {
  let tasks = [];

  // Getters
  let getTasks = () => tasks;
  let getTaskAmount = () => tasks.length;
  let getTask = (index) => tasks[index];
  let getTaskOfCategory = (categoryName) => {
    tasks.forEach((task, index) => {
      console.log(tasks);
      let newTaskList = [];
      if (task.category.name.toLowerCase() === categoryName.toLowerCase()) {
        newTaskList.push(task);
      }

      return newTaskList;
    });
  };

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

  // Examples
  function addRandomTasks(numTasks = 3, categoryName = "General") {
    for (let i = 1; i <= numTasks; i++) {
      addTask(
        new Task(
          `Task ${i}`,
          `${categoryName}`,
          `Description ${i}`,
          new Date(2024, 2, 15),
          1
        )
      );
    }
  }

  // Export
  return {
    getTasks,
    getTaskAmount,
    getTask,
    getTaskOfCategory,
    addTask,
    setTask,
    removeTask,
    clearAllTasks,
    clearTaskOfCategory,
    addRandomTasks,
  };
})();
