function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === "") {
        alert("Введите текст задания!");
        return;
    }

    let newTask = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.onchange = function() {
        toggleTaskStatus(newTask, checkbox);
    };
    newTask.appendChild(checkbox);

    let taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    newTask.appendChild(taskText);

    let space = document.createTextNode(" ");
    newTask.appendChild(space);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.onclick = function() {
        removeTask(newTask);
    };
    newTask.appendChild(deleteButton);

    newTask.onclick = function() {
        toggleTaskStatus(newTask, checkbox);
    };

    taskList.appendChild(newTask);
    taskInput.value = "";
}

function toggleTaskStatus(task, checkbox) {
    task.classList.toggle('completed');
    checkbox.checked = task.classList.contains('completed');
    task.querySelector('span').style.textDecoration = task.classList.contains('completed') ? 'line-through' : 'none';
}

function removeTask(task) {
    let taskList = document.getElementById('taskList');
    taskList.removeChild(task);
}

function removeAllTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}
