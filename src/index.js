import { Task } from './tasks';
import { getTasksFromStorage } from './getTasksFromStorage';
import { populateStorage } from './populateStorage';

//                       (title, description, dueDate, completionStatus, important, project)
let testing = new Task('title1', 'description1', 'dueDate1', 'false1', 'false1', 'project1');

let firstTry = getTasksFromStorage();

// Log first object's title in tasks array from local storage
console.log(firstTry[0].title);

