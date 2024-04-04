function populateStorage(task) {
    // Retrieve existing tasks array from localStorage (or initialize an empty array)
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task to the tasks array
    tasks.push(task);

    // Store the updated tasks array back into localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function populateStorageProjects(project) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    projects.push(project);

    localStorage.setItem('projects', JSON.stringify(projects));
}

export { populateStorage, populateStorageProjects };
