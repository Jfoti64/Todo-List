import * as changeTaskProperty from "./changeTaskProperty";
import { Task } from './tasks';
import * as displayTasks from "./displayTasks";
import { getProjectsFromStorage } from "./getTasksFromStorage";
import {  addHours, startOfToday } from 'date-fns';
import * as currentProject from "./currentProject";
import { populateStorageProjects } from "./populateStorage";

function addEventListenerTaskCard(taskCard) {
    taskCard.addEventListener('click', (event) => {
        const dataIndex = taskCard.getAttribute('data-index');
        displayTasks.openEditPanel(dataIndex, event);
    });
}

function addEventListenerProjectCard(projectCard) {
    projectCard.addEventListener('click' , () => {
        currentProject.setCurrentProject(projectCard.innerHTML);
    })
}

function addEventListenerImportantToggle(toggleImportant, taskIndex) {
    // Check if there's an existing event listener stored, and remove it
    if (toggleImportant._importantClickListener) {
        toggleImportant.removeEventListener('click', toggleImportant._importantClickListener);
    }

    toggleImportant._importantClickListener = () => {
        changeTaskProperty.toggleImportant(taskIndex);
        const currentProjectState = currentProject.getAppState().currentProject
        // Refresh current project
        currentProject.setCurrentProject(currentProjectState);
    };

    toggleImportant.addEventListener('click', toggleImportant._importantClickListener);
}

function addEventListenerEditDueDate(editDueDate, taskIndex) {
    // Remove any previously attached event listeners to avoid duplicates.
    if (editDueDate._changeEventListener) {
        editDueDate.removeEventListener('change', editDueDate._changeEventListener);
    }

    // Define a new event listener function with the current taskIndex context.
    editDueDate._changeEventListener = function() {
        const date = new Date(this.value);
        const dateAtNoon = addHours(date, 12);
        changeTaskProperty.editDueDate(taskIndex, dateAtNoon);
        displayTasks.editDueDateElement(taskIndex);
    };

    // Attach the new event listener to the editDueDate input.
    editDueDate.addEventListener('change', editDueDate._changeEventListener);
}


function addEventListenerCompletionStatus(completionStatus) {
    completionStatus.addEventListener('click', () => {

        const taskCard = completionStatus.closest('.taskCard');
        const dataIndex = taskCard.getAttribute('data-index');
        changeTaskProperty.toggleCompletionStatus(dataIndex);
    });
}

function addEventListenerDeleteBtn(deleteBtn, taskIndex) {
    if (deleteBtn._currentDeleteListener) {
        deleteBtn.removeEventListener('click', deleteBtn._currentDeleteListener);
    }

    // Create a new listener function and assign it to the button's property
    deleteBtn._currentDeleteListener = () => handleDeleteClick(taskIndex);

    // Add the new event listener using the stored reference
    deleteBtn.addEventListener('click', deleteBtn._currentDeleteListener);
}

function handleDeleteClick(taskIndex) {
    // Logic to remove task from storage
    changeTaskProperty.deleteTaskFromStorage(taskIndex);
}


document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        displayTasks.closeEditPanel(event);
        displayTasks.closeProjectsPanel(event);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    (function addEventListenerProjectsBtn() {
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        hamburgerMenu.addEventListener('click', (event) => {
            displayTasks.openProjectsPanel(event);
        });
    })();
});

(function addEventListenerAllTasksBtn() {
    const allTasksTabBtn = document.getElementById('allTab');
    const projectsPanel = document.getElementById('projectsPanel');

    allTasksTabBtn.addEventListener('click', () => {
        currentProject.setCurrentProject('All');
    });
})();

(function addEventListenerTodayBtn() {
    const todayTabBtn = document.getElementById('todayTab');

    todayTabBtn.addEventListener('click', () => {
            currentProject.setCurrentProject('today');
    });
})();

(function addEventListenerImportantBtn() {
    const importantTabBtn = document.getElementById('importantTab');

    importantTabBtn.addEventListener('click', () => {
        currentProject.setCurrentProject('important');
    })
})();

(function addEventListenerAddProjectInput() {
    const addProjectInput = document.getElementById('addProjectInput');
    
    addProjectInput.addEventListener('keypress', event => {
        const projects = getProjectsFromStorage();
        const inputValue = addProjectInput.value;
        if (event.key ==='Enter' && inputValue != '') {
            if (!projects.includes(inputValue)) {
                populateStorageProjects(inputValue);
                displayTasks.renderProjects();
                event.target.value = ''; // Clear the input field after submitting
            }
        }
    })
})();

function addEventListenerAddTaskInput() {
    addTaskInput.addEventListener('keypress', event => {
        const addTaskInput = document.getElementById('addTaskInput');
        const appState = currentProject.getAppState().currentProject;
        if (event.key === 'Enter') {
            if (addTaskInput.value !== '') {
                const currentDate = startOfToday();
                const currentDateAtNoon = addHours(currentDate, 12);
                const inputValue = event.target.value;
                if (appState == 'All') {
                    new Task(inputValue, 'description', currentDateAtNoon, false, false, '');
                    currentProject.renderTasksForProject(appState);
                }
                else if (appState == 'today'){
                    new Task(inputValue, 'description', currentDateAtNoon, false, false, '');
                    currentProject.renderTasksForProject(appState);
                }
                else if (appState == 'important'){
                    new Task(inputValue, 'description', currentDateAtNoon, false, true, '');
                    currentProject.renderTasksForProject(appState);
                }
                else {
                    new Task(inputValue, 'description', currentDateAtNoon, false, false, appState);
                    currentProject.renderTasksForProject(appState);
                }
                event.target.value = ''; // Clear the input field after submitting
            }
        }
    });  
}

// Define the blur event handler as a named function
function handleTitleEditorBlur(taskIndex, inputElement) {
    const updatedTitle = inputElement.value;
    // Trigger saving the updated title to task storage
    changeTaskProperty.editTitle(taskIndex, updatedTitle);
    // Refresh current project
    const currentProjectTab = currentProject.getAppState().currentProject;
    currentProject.setCurrentProject(currentProjectTab);
}

// The function to add the event listener to the task title element
function addEventListenerPanelTaskTitle(taskIndex, taskToEdit) {
    // Remove any existing click event listener to prevent duplicates
    taskToEdit.onblur = null;
    taskToEdit.onblur = () => handleTitleEditorBlur(taskIndex, taskToEdit);
}


export  { 
            addEventListenerCompletionStatus, addEventListenerAddTaskInput, addEventListenerTaskCard, addEventListenerImportantToggle, 
            addEventListenerEditDueDate, addEventListenerProjectCard, addEventListenerPanelTaskTitle, addEventListenerDeleteBtn 
        }