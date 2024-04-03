import { getTasksFromStorage } from "./getTasksFromStorage";
import * as addEventListeners from "./addEventListeners";
import * as changeTaskProperty from "./changeTaskProperty";
import importantIconSrc from './icons/exclamation-mark-svgrepo-com.svg';
import { format, parseISO, isSameDay, parseJSON } from 'date-fns';
import * as currentProject from "./currentProject";

function clearDom() {
    const tasksContainer = document.getElementById('currentTasks');
    tasksContainer.innerHTML = '';
}

// Function to render tasks based on the project
function renderTasksForProject(projectName) {
    // Get tasks for the specified project from storage
    const tasks = currentProject.getTasksForProject(projectName);
    // Clear and update the DOM with these tasks
    clearDom();
    tasks.forEach(task => createNewTaskCard(task));
    createAddTaskInput();
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

function editDueDateElement(taskIndex) {
    const taskCard = document.querySelector(`[data-index='${taskIndex}']`); // Find the corresponding task card in the DOM.
    if (taskCard) {
        const tasks = getTasksFromStorage();
        const task = tasks[taskIndex];
        const currentDueDateElement = taskCard.querySelector('.dueDate');
        const date = parseISO(task.dueDate);
        const formattedDate = format(date, 'yyyy-MM-dd');
        currentDueDateElement.innerHTML = formattedDate;
    } 
   
    renderTasksForProject(currentProject.getAppState().currentProject);
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

export { editTaskTitle, openEditPanel, editDueDateElement, renderTasksForProject }