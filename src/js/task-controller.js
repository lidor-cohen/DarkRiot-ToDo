import Task from "./task.js";

export default (function TaskController() {
  let tasks = [];

  // Getters
  let getTasks = () => tasks;
  let getTaskAmount = () => tasks.length;
  let getTask = (index) => tasks[index];

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
  function addRandomTasks(numTasks = 3) {
    for (let i = 1; i <= numTasks; i++) {
      addTask(
        new Task(
          `Task ${i}`,
          `Description ${i}`,
          "General",
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
    addTask,
    setTask,
    removeTask,
    clearAllTasks,
    clearTaskOfCategory,
    addRandomTasks,
  };
})();
