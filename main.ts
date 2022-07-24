const form: HTMLFormElement = document.querySelector('#form');
const taskInput: HTMLInputElement = document.querySelector('#taskInput');
const tasksList: HTMLElement = document.querySelector('#tasksList');
const emptyList: HTMLElement = document.querySelector('#emptyList');


// Add task
form.addEventListener('submit', addTask);

//Delete task
tasksList.addEventListener('click', deleteTask);

//Complete task
tasksList.addEventListener('click', doneTask);

function addTask(event: Event): void {
    event.preventDefault();

    const taskText: string = taskInput.value;

    const taskHTML = `<li class="list-group-item d-flex justify-content-between task-item">
    <span class="task-title">${taskText}</span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
            <img src="./img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
            <img src="./img/cross.svg" alt="Done" width="18" height="18">
        </button>
    </div>
    </li>`;
    
    tasksList.insertAdjacentHTML("beforeend", taskHTML);

    taskInput.value = "";
    taskInput.focus();

    if (tasksList.children.length > 1) {
        emptyList.classList.add('none')
    }
}

function deleteTask(event: Event): void {

    if ((event.target as HTMLButtonElement).dataset.action === 'delete') {
  
        const parentNode = (event.target as HTMLButtonElement).closest('li');
        parentNode.remove();
    };

    if (tasksList.children.length === 1) {
        emptyList.classList.remove('none');
    }
}

function doneTask(event: Event): void {
    if ((event.target as HTMLButtonElement).dataset.action === 'done') {
        const parentNode = (event.target as HTMLButtonElement).closest('li')
        const taskTitle = parentNode.querySelector('span');
        taskTitle.classList.toggle('task-title--done');
    }
}
