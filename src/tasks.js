import { getTasksFromStorage } from './getTasksFromStorage';
import { populateStorage } from './populateStorage';
import { updateIndexes } from './updateIndexes';

class Task {
    constructor(title, description, dueDate, completionStatus, important, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completionStatus = completionStatus;
        this.important = important;
        this.project = project;
        this.index = getTasksFromStorage().length;
        updateIndexes();
        populateStorage(this);
    }
}

export { Task };