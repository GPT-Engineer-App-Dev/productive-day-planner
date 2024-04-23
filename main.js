document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const newTask = taskInput.value.trim();
  if (newTask) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span class="task-content">${newTask}</span>
            <button class="complete-btn text-green-500 ml-2"><i class="fas fa-check"></i></button>
            <button class="delete-btn text-red-500 ml-2"><i class="fas fa-trash"></i></button>
        `;
    document.getElementById("taskList").appendChild(listItem);

    // Clear input after adding
    taskInput.value = "";

    // Add event listeners for new buttons
    listItem.querySelector(".complete-btn").addEventListener("click", function () {
      listItem.querySelector(".task-content").classList.toggle("line-through");
    });

    listItem.querySelector(".delete-btn").addEventListener("click", function () {
      listItem.remove();
    });
  }
});
