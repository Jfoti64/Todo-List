import { getTasksFromStorage } from "./getTasksFromStorage";
import * as addEventListeners from "./addEventListeners";
import { format } from "date-fns";

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
    createAddTaskInput();
}

function displayDueTodayTab() {
    const today = format(new Date(), "MM/dd/yyyy");
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

function createNewTaskCard(obj) {
    const tasksContainer = document.getElementById('currentTasks');
    // Create the task card
    const taskCard = document.createElement('div');
    taskCard.classList.add('taskCard');
    taskCard.setAttribute('data-index', obj.index);

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

    tasksContainer.appendChild(taskCard);
}

export { displayAllTasksTab, displayImportantTab, displayDueTodayTab, displayTasksFromProject }