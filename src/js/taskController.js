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
  };
})();
