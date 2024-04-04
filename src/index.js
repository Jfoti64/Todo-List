import "./style.css";
import { getTasksFromStorage } from './getTasksFromStorage';
import { populateStorage } from './populateStorage';
import * as changeTaskProperty from './changeTaskProperty';
import * as displayTasks from "./displayTasks";
import { format, compareAsc } from "date-fns";
import { Task } from "./tasks";





//                       (title, description, dueDate, completionStatus, important, project)
//let formattedDate = format(new Date(2014, 1, 11), "MM/dd/yyyy");
//let testing = new Task('title1', 'description1', formattedDate, true, true, 'project1');

displayTasks.renderTasksForProject('All');
displayTasks.renderProjects();

// Log first object's title in tasks array from local storage