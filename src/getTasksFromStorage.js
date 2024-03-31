function getTasksFromStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
}

function getProjectsFromStorage() {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    return projects;
}

export { getTasksFromStorage, getProjectsFromStorage };