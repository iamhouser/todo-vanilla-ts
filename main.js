var form = document.querySelector('#form');
var taskInput = document.querySelector('#taskInput');
var tasksList = document.querySelector('#tasksList');
var emptyList = document.querySelector('#emptyList');
// Add task
form.addEventListener('submit', addTask);
//Delete task
tasksList.addEventListener('click', deleteTask);
//Complete task
tasksList.addEventListener('click', doneTask);
function addTask(event) {
    event.preventDefault();
    var taskText = taskInput.value;
    var taskHTML = "<li class=\"list-group-item d-flex justify-content-between task-item\">\n    <span class=\"task-title\">".concat(taskText, "</span>\n    <div class=\"task-item__buttons\">\n        <button type=\"button\" data-action=\"done\" class=\"btn-action\">\n            <img src=\"./img/tick.svg\" alt=\"Done\" width=\"18\" height=\"18\">\n        </button>\n        <button type=\"button\" data-action=\"delete\" class=\"btn-action\">\n            <img src=\"./img/cross.svg\" alt=\"Done\" width=\"18\" height=\"18\">\n        </button>\n    </div>\n    </li>");
    tasksList.insertAdjacentHTML("beforeend", taskHTML);
    taskInput.value = "";
    taskInput.focus();
    if (tasksList.children.length > 1) {
        emptyList.classList.add('none');
    }
}
function deleteTask(event) {
    if (event.target.dataset.action === 'delete') {
        var parentNode = event.target.closest('li');
        parentNode.remove();
    }
    ;
    if (tasksList.children.length === 1) {
        emptyList.classList.remove('none');
    }
}
function doneTask(event) {
    if (event.target.dataset.action === 'done') {
        var parentNode = event.target.closest('li');
        var taskTitle = parentNode.querySelector('span');
        taskTitle.classList.toggle('task-title--done');
    }
}
