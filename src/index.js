import "./style.css";
import { getTasksFromStorage } from './getTasksFromStorage';
import { populateStorage } from './populateStorage';
import * as changeTaskProperty from './changeTaskProperty';
import * as displayTasks from "./displayTasks";




//                       (title, description, dueDate, completionStatus, important, project)
//let testing = new Task('title1', 'description1', formattedDate, true, true, 'project1');

displayTasks.displayAllTasksTab();


let firstTry = getTasksFromStorage();

// Log first object's title in tasks array from local storage
console.log(firstTry[0].title);
console.log(firstTry[0].description);
console.log(firstTry[0].dueDate);
console.log(firstTry[0].completionStatus);
console.log(firstTry[0].important);
console.log(firstTry[0].project);