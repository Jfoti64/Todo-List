import { Task } from './tasks';
import { getTasksFromStorage } from './getTasksFromStorage';
import { populateStorage } from './populateStorage';

//let testing = new Task('title1', 'description1', 'dueDate1', 'false1', 'false1', 0);

let firstTry = getTasksFromStorage();

// Log first object's title in tasks array from local storage
console.log(firstTry[0].title);

