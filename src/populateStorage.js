function populateStorage(task) {
    localStorage.setItem(task.id, JSON.stringify(task));
}

export { populateStorage };