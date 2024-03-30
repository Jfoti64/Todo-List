import { Task } from './tasks';
import { getTasksFromStorage } from './getTasksFromStorage';
import { populateStorage } from './populateStorage';
import * as changeTaskProperty from './changeTaskProperty';

//                       (title, description, dueDate, completionStatus, important, project)
let testing = new Task('title1', 'description1', 'dueDate1', true, true, 'project1');

changeTaskProperty.editTitle(testing.index, 'TITLE2');

changeTaskProperty.editDescription(testing.index, 'DESCRIPTION2');

changeTaskProperty.editDueDate(testing.index, 'DUEDATE2');

changeTaskProperty.toggleCompletionStatus(testing.index);

changeTaskProperty.toggleImportant(testing.index);

changeTaskProperty.editProject(testing.index, 'PROJECT2');



let firstTry = getTasksFromStorage();

// Log first object's title in tasks array from local storage
console.log(firstTry[0].title);
console.log(firstTry[0].description);
console.log(firstTry[0].dueDate);
console.log(firstTry[0].completionStatus);
console.log(firstTry[0].important);
console.log(firstTry[0].project);