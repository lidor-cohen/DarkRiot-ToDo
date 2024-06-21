export default (function TaskController() {
  let tasks = [];

  let addTask = (task) => {
    tasks.push(task);
  };

  let removeTask = (index) => {
    tasks.splice(index, 1);
  };

  let getTasks = () => {
    return tasks;
  };

  let getTask = (index) => {
    return tasks[index];
  };

  let setTask = (index, task) => {
    tasks[index] = task;
  };

  let clearTaskOfCategory = (category) => {
    tasks.forEach((task, index) => {
      if (task.category === category) {
        removeTask(index);
      }
    });
  };

  let clearAllTasks = () => {
    tasks = [];
  };
})();
