import { getTasksFromStorage } from "./getTasksFromStorage";
import * as addEventListeners from "./addEventListeners";
import * as changeTaskProperty from "./changeTaskProperty";
import importantIconSrc from './icons/exclamation-mark-svgrepo-com.svg';
import { format } from 'date-fns';

function clearDom() {
    const tasksContainer = document.getElementById('currentTasks');
    tasksContainer.innerHTML = '';
}

function createAddTaskInput() {
    const addTaskInputDiv = document.createElement('div');
    addTaskInputDiv.id = 'addTaskDiv';
    const addTaskInput = document.createElement('input');
    addTaskInput.id = 'addTaskInput';
    addTaskInput.type = 'text';
    addTaskInput.placeholder = 'Add Task';
    const tasksContainer = document.getElementById('currentTasks');
    addTaskInputDiv.appendChild(addTaskInput);
    tasksContainer.appendChild(addTaskInputDiv);
    addEventListeners.addEventListenerAddTaskInput();
}

function createProjectName(currentProject) {
    const tasksContainer = document.getElementById('currentTasks');
    const projectName = document.createElement('h2');
    projectName.id = 'projectName';
    projectName.innerHTML = currentProject;
    tasksContainer.appendChild(projectName);
}

function displayAllTasksTab() {
    const allTasks = getTasksFromStorage();
    clearDom();
    createProjectName('All');

    allTasks.forEach(obj => {
        createNewTaskCard(obj);
    });
    createAddTaskInput();
}

function displayImportantTab() {
    const allTasks = getTasksFromStorage();
    clearDom();
    allTasks.forEach(obj => {
        if (obj.important == true) {
            createNewTaskCard(obj);
        }
    });
}

function displayDueTodayTab() {
    const today = format(new Date(), 'yyyy-MM-dd');
    const allTasks = getTasksFromStorage();
    clearDom();

    allTasks.forEach(obj => {
        if (obj.dueDate == today) {
            createNewTaskCard(obj);
        }
    });
}

function displayTasksFromProject(project) {
    const allTasks = getTasksFromStorage();
    clearDom();

    allTasks.forEach(obj => {
        if (obj.project == project) {
            createNewTaskCard(obj);
        }
    });
    createAddTaskInput();
}

function editTaskTitle(taskTitle) {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = taskTitle.innerText;
    input.classList.add('task-title-input');

    taskTitle.parentNode.replaceChild(input, taskTitle);

    input.focus();

    // When the input loses focus, replace it with the <p> element again
    input.addEventListener('blur', function() {
        replaceWithText(this);
    });
}

function toggleImportantIcon(taskIndex) {
    const tasks = getTasksFromStorage();
    const task = tasks[taskIndex];
    const taskCard = document.querySelector(`[data-index='${taskIndex}']`); // Find the corresponding task card in the DOM.

    // Attempt to find an existing important icon within the task card.
    const existingIcon = taskCard.querySelector('.importantIcon');

    if (task.important) {
        const importantIcon = document.createElement('img');
        importantIcon.classList.add('importantIcon');
        importantIcon.src = importantIconSrc; 
        importantIcon.alt = 'Important Task';
        taskCard.appendChild(importantIcon);
    } else if (existingIcon){
            existingIcon.remove();
    }
}

function editDueDateElement(taskIndex) {
    const tasks = getTasksFromStorage();
    const task = tasks[taskIndex];
    const taskCard = document.querySelector(`[data-index='${taskIndex}']`); // Find the corresponding task card in the DOM.
    const currentDueDateElement= taskCard.querySelector('.dueDate');
    const newDueDate = task.dueDate;
    currentDueDateElement.innerHTML = newDueDate;
}

/** 
function replaceWithText(input) {
    const taskCard = input.closest('.taskCard');
    const dataIndex = taskCard.getAttribute('data-index');
    const title = document.createElement('p');
    title.innerText = input.value;
    title.classList.add('title');

    changeTaskProperty.editTitle(dataIndex, input.value);

    title.addEventListener('click', function() {
        editTaskTitle(this);
    });
    input.parentNode.replaceChild(title, input);
}
**/

const openEditPanel = (taskIndex, event) => {
    const tasks = getTasksFromStorage();
    const taskInStorage = tasks[taskIndex];
    const date = new Date(taskInStorage.dueDate);
    const formattedDate = format(date, 'yyyy-MM-dd');
    const editDueDate = document.getElementById('editDueDate');
    const editImportance = document.getElementById('editImportance');
    const taskToEdit = document.getElementById('taskToEdit');
    taskToEdit.innerHTML = taskInStorage.title;
    editImportance.checked = taskInStorage.important;
    addEventListeners.addEventListenerImportantToggle(editImportance, taskIndex);
    addEventListeners.addEventListenerEditDueDate(editDueDate, taskIndex);



    editDueDate.value = formattedDate;
    document.getElementById('taskEditPanel').classList.add('open');
    event.stopPropagation(); // Prevent the click from reaching the document listener
};

function createNewTaskCard(obj) {
    const tasksContainer = document.getElementById('currentTasks');
    // Create the task card
    const taskCard = document.createElement('div');
    taskCard.classList.add('taskCard');
    taskCard.setAttribute('data-index', obj.index);

    addEventListeners.addEventListenerTaskCard(taskCard);

    // Create completionStatus checkbox
    const completionStatus = document.createElement('input')
    completionStatus.type = 'checkbox';
    completionStatus.classList.add('completionStatus');
    completionStatus.checked = obj.completionStatus;
    taskCard.appendChild(completionStatus);

    addEventListeners.addEventListenerCompletionStatus(completionStatus);


    // Create title
    const title = document.createElement('h5');
    title.classList.add('title');
    title.innerHTML = obj.title;
    taskCard.appendChild(title);

    addEventListeners.addEventListenerTaskTitle(title);

    // Create description
    const description = document.createElement('p');
    description.classList.add('description');
    description.innerHTML = obj.description;
    taskCard.appendChild(description);

    // Create dueDate
    const dueDate = document.createElement('p');
    dueDate.classList.add('dueDate');
    dueDate.innerHTML = format(obj.dueDate, 'yyyy-MM-dd');
    taskCard.appendChild(dueDate);

    /**
    // Create date picker for when dueDate clicked
    const today = new Date();
    const datePicker = document.createElement('input');
    datePicker.type = 'date';
    datePicker.classList.add('datePicker');
    datePicker.value = today;
    datePicker.style.display = 'none';
    taskCard.appendChild(datePicker); **/

    // Create the important signifier
    if (obj.important) {
        const importantIcon = document.createElement('img');
        importantIcon.classList.add('importantIcon');
        importantIcon.src = importantIconSrc;
        importantIcon.alt = 'Important Task';
        taskCard.appendChild(importantIcon);
    }
    
    tasksContainer.appendChild(taskCard);
}

export { displayAllTasksTab, displayImportantTab, displayDueTodayTab, displayTasksFromProject, editTaskTitle, openEditPanel, toggleImportantIcon, editDueDateElement }