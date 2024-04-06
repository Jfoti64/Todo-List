import { getProjectsFromStorage, getTasksFromStorage } from "./getTasksFromStorage";
import * as addEventListeners from "./addEventListeners";
import importantIconSrc from './icons/exclamation-mark-svgrepo-com.svg';
import { format, parseISO } from 'date-fns';
import * as currentProject from "./currentProject";
import hamburgerMenuIcon from './icons/hamburger-menu-svgrepo-com.svg';

// Insert hamburger menu into html
const hamburgerMenu = document.getElementById('hamburgerMenu');
hamburgerMenu.src = hamburgerMenuIcon;
hamburgerMenu.alt = 'hamburger menu';

function clearDom() {
    const tasksContainer = document.getElementById('currentTasks');
    tasksContainer.innerHTML = '';
}

function clearProjectsDom() {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';
}

// Function to render tasks based on the project
function renderTasksForProject(projectName) {
    // Get tasks for the specified project from storage
    const tasks = currentProject.getTasksForProject(projectName);
    // Clear and update the DOM with these tasks
    clearDom();
    createProjectName();
    tasks.forEach(task => createNewTaskCard(task));
    createAddTaskInput();
}

function renderProjects() {
    const projects = getProjectsFromStorage();
    
    clearProjectsDom();
    projects.forEach(project => createNewProjectCard(project));
}

function openProjectsPanel(event) {
    const projectsPanel = document.getElementById('projectsPanel')
    projectsPanel.classList.add('open');
    event.stopPropagation(); // Prevent the click from reaching the document listener
}

function closeProjectsPanel(event) {
    const projectsPanel = document.getElementById('projectsPanel');
    if (!projectsPanel.contains(event.target) && projectsPanel.classList.contains('open')) {
        projectsPanel.classList.remove('open');
    }
}

function createAddTaskInput() {
    const addTaskInputDiv = document.createElement('div');
    addTaskInputDiv.id = 'addTaskDiv';
    const addTaskInput = document.createElement('input');
    addTaskInput.id = 'addTaskInput';
    addTaskInput.type = 'text';
    addTaskInput.placeholder = 'Add a task';
    const tasksContainer = document.getElementById('currentTasks');
    addTaskInputDiv.appendChild(addTaskInput);
    tasksContainer.appendChild(addTaskInputDiv);
    addEventListeners.addEventListenerAddTaskInput();
}

function createProjectName() {
    const tasksContainer = document.getElementById('currentTasks');
    const projectName = document.createElement('h2');
    projectName.innerHTML = currentProject.getAppState().currentProject;
    projectName.id = 'projectName';
    tasksContainer.appendChild(projectName);

    const currentDate = document.createElement('p');
    currentDate.id = 'currentDate';
    currentDate.innerHTML = format(new Date(), 'EEEE, LLL do yyyy');
    tasksContainer.appendChild(currentDate);
}

function editDueDateElement(taskIndex) {
    const taskCard = document.querySelector(`[data-index='${taskIndex}']`); // Find the corresponding task card in the DOM.
    const appState = currentProject.getAppState().currentProject;
    if (taskCard) {
        const tasks = getTasksFromStorage();
        const task = tasks[taskIndex];
        const currentDueDateElement = taskCard.querySelector('.dueDate');
        const date = parseISO(task.dueDate);
        const formattedDate = format(date, 'yyyy-MM-dd');
        currentDueDateElement.innerHTML = formattedDate;
    } 
   
    currentProject.renderTasksForProject(appState);
}

const openEditPanel = (taskIndex, event) => {
    const tasks = getTasksFromStorage();
    const taskInStorage = tasks[taskIndex];
    const date = new Date(taskInStorage.dueDate);
    const formattedDate = format(date, 'yyyy-MM-dd');
    const editDueDate = document.getElementById('editDueDate');
    const editImportance = document.getElementById('editImportance');
    const taskToEdit = document.getElementById('taskToEdit');
    const deleteBtn = document.getElementById('deleteBtn');
    taskToEdit.value = taskInStorage.title || ''; // Set to current task title
    editImportance.checked = taskInStorage.important;
    addEventListeners.addEventListenerImportantToggle(editImportance, taskIndex);
    addEventListeners.addEventListenerEditDueDate(editDueDate, taskIndex);
    addEventListeners.addEventListenerPanelTaskTitle(taskIndex, taskToEdit);
    addEventListeners.addEventListenerDeleteBtn(deleteBtn, taskIndex);

    editDueDate.value = formattedDate;
    document.getElementById('taskEditPanel').classList.add('open');
    event.stopPropagation(); // Prevent the click from reaching the document listener
};

function closeEditPanel(event) {
    const editPanel = document.getElementById('taskEditPanel');
        
    if (!editPanel.contains(event.target) && editPanel.classList.contains('open')) {
        editPanel.classList.remove('open');
    };
}

function createNewProjectCard(project) {
    const projectsContainer = document.getElementById('projectsContainer');
    const projectCard = document.createElement('div');
    projectCard.classList.add('projectCard');
    projectCard.innerHTML = project;

    addEventListeners.addEventListenerProjectCard(projectCard);
    projectsContainer.appendChild(projectCard);
}

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

    const roundCheckbox = document.createElement('label');
    roundCheckbox.for = 'completionStatus';
    taskCard.appendChild(roundCheckbox);

    // If completion status is true strikethrough task's title.
    if (obj.completionStatus == true) {
        taskCard.classList.add('grayed-out-text');
    }
    else if (obj.completionStatus == false) {
        taskCard.classList.remove('grayed-out-text');
    }



    addEventListeners.addEventListenerCompletionStatus(completionStatus);


    // Create title
    const title = document.createElement('h5');
    title.classList.add('title');
    title.innerHTML = obj.title;
    taskCard.appendChild(title);

    // Create projectLabel
    const projectLabel = document.createElement('p');
    projectLabel.classList.add('projectLabel');
    projectLabel.innerHTML = obj.project;
    taskCard.appendChild(projectLabel);

    // Create dueDate
    const dueDate = document.createElement('p');
    dueDate.classList.add('dueDate');
    dueDate.innerHTML = 'Due: ' + format(obj.dueDate, 'EEEE, LLL do');
    taskCard.appendChild(dueDate);

    // Create the important signifier
    if (obj.important) {
        taskCard.classList.add('important');
    }
    
    tasksContainer.appendChild(taskCard);
}

export { openEditPanel, editDueDateElement, renderTasksForProject, openProjectsPanel, closeProjectsPanel, closeEditPanel, renderProjects }