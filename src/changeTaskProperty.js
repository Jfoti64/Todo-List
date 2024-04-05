import * as currentProject from "./currentProject";
import { getProjectsFromStorage, getTasksFromStorage } from "./getTasksFromStorage";

function updateTasksInStorage(updatedTasks) {
    const indexedTasks = updateIndexes(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(indexedTasks));
}

function updateProjectsInStorage(updatedProjects) {
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
}

function updateIndexes(tasks) {
    tasks.forEach((task, idx) => {
        task.index = idx;
    });

    return tasks;
}

function deleteTaskFromStorage(taskIndex) {
    // Retrieve the tasks array from localStorage
    const tasks = getTasksFromStorage();

    // Convert taskIndex to a number
    const numericTaskIndex = Number(taskIndex);

    // Filter out the task to delete
    const filteredTasks = tasks.filter(task => task.index !== numericTaskIndex);

    // Save the modified tasks array back to localStorage
    updateTasksInStorage(filteredTasks);
    // Refresh current project tab
    const currentProjectTab = currentProject.getAppState().currentProject;
    currentProject.setCurrentProject(currentProjectTab);
}


function editTaskProperty(taskIndex, propertyName, newValue) {
    const tasks = getTasksFromStorage();
    tasks[taskIndex][propertyName] = newValue;
    updateTasksInStorage(tasks);

}

function editTitle(taskIndex, newTitle) {
    editTaskProperty(taskIndex, 'title', newTitle);
}

function editDescription(taskIndex, newDescription) {
    editTaskProperty(taskIndex, 'description', newDescription);
}

function editDueDate(taskIndex, newDueDate) {
    editTaskProperty(taskIndex, 'dueDate', newDueDate);
}

function toggleCompletionStatus(taskIndex) {
    const tasks = getTasksFromStorage();
    tasks[taskIndex].completionStatus = !tasks[taskIndex].completionStatus;
    updateTasksInStorage(tasks);
}

function toggleImportant(taskIndex) {
    const tasks = getTasksFromStorage();
    tasks[taskIndex].important = !tasks[taskIndex].important;
    updateTasksInStorage(tasks);
}

function editProject(taskIndex, newProject) {
    editTaskProperty(taskIndex, 'project', newProject);
    const projects = getProjectsFromStorage();
    if (!projects.includes(newProject)) {
        projects.push(newProject);
        updateProjectsInStorage(projects);
    }
}


export { editTitle, editDescription, editDueDate, toggleCompletionStatus, toggleImportant, editProject, deleteTaskFromStorage };
