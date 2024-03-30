import { getTasksFromStorage } from "./getTasksFromStorage";

function updateIndexes() {
    const tasks = getTasksFromStorage();

    tasks.forEach((task, idx) => {
        task.index = idx;
    });
}

export { updateIndexes };