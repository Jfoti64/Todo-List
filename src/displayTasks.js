import { getTasksFromStorage } from "./getTasksFromStorage";
import { format } from "date-fns";

function displayAllTasksTab() {
    const allTasks = getTasksFromStorage();

    allTasks.forEach(obj => {
        createNewTaskCard(obj);
    });
}

function displayImportantTab() {
    const allTasks = getTasksFromStorage();
    allTasks.forEach(obj => {
        if (obj.important == true) {
            createNewTaskCard(obj);
        }
    });
}

function displayDueTodayTab() {
    const today = format(new Date(), "MM/dd/yyyy");
    const allTasks = getTasksFromStorage();

    allTasks.forEach(obj => {
        if (obj.dueDate == today) {
            createNewTaskCard(obj);
        }
    });
}

function displayTasksFromProject(project) {
    const allTasks = getTasksFromStorage();

    allTasks.forEach(obj => {
        if (obj.project == project) {
            createNewTaskCard(obj);
        }
    });
}

function createNewTaskCard(obj) {
    const tasksContainer = document.getElementById('currentTasks');
    // Create the task card
    const taskCard = document.createElement('div');
    taskCard.classList.add('taskCard');

    // Create completionStatus checkbox
    const completionStatus = document.createElement('input')
    completionStatus.type = 'checkbox';
    completionStatus.classList.add('completionStatus');
    completionStatus.checked = obj.completionStatus;
    taskCard.appendChild(completionStatus);

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