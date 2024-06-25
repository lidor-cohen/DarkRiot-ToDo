import openImage from "../../assets/open-90.png";

// Homepage Controls
// Add task to container
const addTaskToView = (task, container) => {
  const taskItem = `
        <div class="task-item">
            <div class="task-checkbox-container">
                <input type="checkbox" />
                <h4>${task.name}</h4>
            </div>

            <img src="${openImage}" alt="open task icon" />
        </div>
    `;

  container.innerHTML += taskItem;
};

export { addTaskToView };
