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
        // Temporarily set index, but it will be updated correctly in updateIndexes
        this.index = getTasksFromStorage().length;
        populateStorage(this); // Add the task first
        updateIndexes(); // Now update indexes with the new task included
    }
}


export { Task };