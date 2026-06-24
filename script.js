const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

/* ADD TASK LOGIC */
function addTask() {
  const taskText = taskInput.value.trim();

  // If input is empty, show alert and exit
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  // Remove empty message if it exists
  const emptyMessage = document.querySelector(".empty-message");
  if (emptyMessage) {
    emptyMessage.remove();
  }

  // Create new list item
  const li = document.createElement("li");

  // Create span for task text
  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    checkEmptyState();
  });

  // Add span and button to list item
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add list item to task list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";

  // Focus back on input
  taskInput.focus();
}

// CHECK EMPTY MESSAGE
function checkEmptyState() {
  const emptyMessage = document.querySelector(".empty-message");

  if (taskList.children.length === 0) {
    if (!emptyMessage) {
      const li = document.createElement("li");
      li.className = "empty-message";
      li.textContent = "No tasks yet... enjoy while you can!";
      taskList.appendChild(li);
    }
  } else {
    // Tasks exist
    if (emptyMessage) {
      emptyMessage.remove();
    }
  }
}

// Event listeners
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
