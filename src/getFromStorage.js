function getFromStorage(id) {
    const requestedObject = localStorage.getItem(id);
    return JSON.parse(requestedObject);
}

export { getFromStorage };