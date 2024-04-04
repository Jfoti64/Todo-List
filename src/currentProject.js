import { getTasksFromStorage } from "./getTasksFromStorage";
import { renderTasksForProject } from "./displayTasks";
import { isSameDay } from 'date-fns';

// Define a global object to keep track of the application state
let appState = {
    currentProject: 'All', // Default project
};

 function getAppState() {
    return appState;
 }

// Function to set the current project
function setCurrentProject(projectName) {
    appState.currentProject = projectName;
    // After setting the project, render the tasks belonging to it
    renderTasksForProject(projectName);
}

function getTasksForProject(projectName) {
    const tasks = getTasksFromStorage();
    if (projectName == 'All') {
        return tasks
    }
    else if (projectName == 'today') {
        const currentDate = new Date();
        const tasksInProject = tasks.filter(task => isSameDay(task.dueDate, currentDate));
        return tasksInProject;
    }
    else if (projectName == 'important') {
        const tasksInProject = tasks.filter(task => task.important == true);
        return tasksInProject;
    }
    else {
        const tasksInProject = tasks.filter(task => task.project == projectName);
        return tasksInProject;
    }
}

export { setCurrentProject, renderTasksForProject, getTasksForProject, getAppState};