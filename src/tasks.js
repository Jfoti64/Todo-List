import { populateStorage } from './populateStorage';

class Task {
    constructor(title, description, dueDate, completionStatus, important, id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completionStatus = completionStatus;
        this.important = important;
        this.id = id;
        populateStorage(this);
    }


}

export { Task };