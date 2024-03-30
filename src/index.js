import { Task } from './tasks';
import { getFromStorage } from './getFromStorage';

let testing = new Task('title1', 'description1', 'dueDate1', 'false1', 'false1', 1);

let firstTry = getFromStorage('1');

console.log(firstTry);