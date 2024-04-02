import { getTasksFromStorage } from "./getTasksFromStorage";
import * as addEventListeners from "./addEventListeners";
import { add, format } from "date-fns";
import * as changeTaskProperty from "./changeTaskProperty";
import importantIconSrc from './icons/exclamation-mark-svgrepo-com.svg';


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
    const today = format(new Date(), "yyyy-MM-dd");
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

const openEditPanel = (taskIndex) => {
    const tasks = getTasksFromStorage();
    const taskInStorage = tasks[taskIndex];
    const formattedDueDate = format(new Date(taskInStorage.dueDate), 'yyyy-MM-dd');
    const editDueDate = document.getElementById('editDueDate');
    const editImportance = document.getElementById('editImportance');
    const taskToEdit = document.getElementById('taskToEdit');
    taskToEdit.innerHTML = taskInStorage.title;
    editImportance.checked = taskInStorage.important;
    addEventListeners.addEventListenerImportantToggle(editImportance, taskIndex);


    editDueDate.value = formattedDueDate;
    document.getElementById('taskEditPanel').classList.add('open');
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
    dueDate.innerHTML = obj.dueDate;
    taskCard.appendChild(dueDate);

    // Create date picker for when dueDate clicked
    const today = new Date().toISOString().slice(0, 10); // Converts today's date to YYYY-MM-DD format
    const datePicker = document.createElement('input');
    datePicker.type = 'date';
    datePicker.classList.add('datePicker');
    datePicker.value = today;
    datePicker.style.display = 'none';
    taskCard.appendChild(datePicker);

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

export { displayAllTasksTab, displayImportantTab, displayDueTodayTab, displayTasksFromProject, editTaskTitle, openEditPanel }