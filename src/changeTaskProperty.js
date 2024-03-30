import { getTasksFromStorage } from "./getTasksFromStorage";
import { populateStorage } from "./populateStorage";

function editTitle(task, newTitle) {
    const tasks = getTasksFromStorage();
    const index = task.index;

    tasks[index].title = newTitle;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editDescription(task, newDescription) {
    const tasks = getTasksFromStorage();
    const index = task.index;

    tasks[index].description = newDescription;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editDueDate(task, newDueDate) {
    const tasks = getTasksFromStorage();
    const index = task.index;

    tasks[index].dueDate = newDueDate;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editCompletionStatus(task) {
    const tasks = getTasksFromStorage();
    const index = task.index;

    tasks[index].completionStatus = tasks[index].completionStatus ? false: true;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editImportant(task) {
    const tasks = getTasksFromStorage();
    const index = task.index;

    tasks[index].important = tasks[index].important ? false: true;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editProject(task, newProject) {
    const tasks = getTasksFromStorage();
    const index = task.index;

    tasks[index].project = newProject;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}



export { editTitle, editDescription, editDueDate, editCompletionStatus, editImportant, editProject }
