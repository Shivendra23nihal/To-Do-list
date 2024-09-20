document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Add new task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {  //Check if the task is not empty
            addTask(taskText);  // Add the task to the list which show the user
            taskInput.value = "";  // clear the input field.
        }
    });

    // Add task to the list
    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';
         
       // create the complete button.

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            taskItem.classList.toggle('completed'); //   toggle is basically the type of  "complete" class on task items.
        });

         // create edit button

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edit your task', taskContent.textContent);  // edit the task text
            if (newTaskText !== null && newTaskText.trim() !== "") {   // cheak edited text valid 
                taskContent.textContent = newTaskText.trim();  // update the task text .
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });
         
        // add buttons to the taskbuttons box
        taskButtons.appendChild(completeBtn);
        taskButtons.appendChild(editBtn);
        taskButtons.appendChild(deleteBtn);
         
        // add  taskbutton to the task content 
        taskItem.appendChild(taskContent);
        taskItem.appendChild(taskButtons);

        taskList.appendChild(taskItem);
    }
});
