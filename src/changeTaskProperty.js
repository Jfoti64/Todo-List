import { getProjectsFromStorage, getTasksFromStorage } from "./getTasksFromStorage";

function updateTasksInStorage(updatedTasks) {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

function updateProjectsInStorage(updatedProjects) {
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
}

function editTaskProperty(taskIndex, propertyName, newValue) {
    if (propertyName === 'project') {
        const projects = getProjectsFromStorage();
        if (!projects.includes(newValue)) {
            projects.push(newValue);
            updateProjectsInStorage(projects);
        }
    }
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
}

export { editTitle, editDescription, editDueDate, toggleCompletionStatus, toggleImportant, editProject };
