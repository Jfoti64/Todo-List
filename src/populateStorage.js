function populateStorage(task) {
    // Retrieve existing tasks array from localStorage (or initialize an empty array)
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    let projects = JSON.parse(localStorage.getItem('projects')) || [];


    // Ensure no duplicates in array
    if (!projects.includes(task.project)) {
        projects.push(task.project);
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    // Add the new task to the tasks array
    tasks.push(task);

    // Store the updated tasks array back into localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export { populateStorage };
