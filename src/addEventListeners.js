import * as changeTaskProperty from "./changeTaskProperty";
import { Task } from './tasks';
import * as displayTasks from "./displayTasks";
import { getTasksFromStorage, getProjectsFromStorage } from "./getTasksFromStorage";
import { format, addHours, startOfToday } from 'date-fns';
import * as currentProject from "./currentProject";
import { populateStorage, populateStorageProjects } from "./populateStorage";

function addEventListenerTaskCard(taskCard) {
    taskCard.addEventListener('click', (event) => {
        const dataIndex = taskCard.getAttribute('data-index');
        displayTasks.openEditPanel(dataIndex, event);
    });
}

function addEventListenerImportantToggle(toggleImportant, taskIndex) {
    // Check if there's an existing event listener stored, and remove it
    if (toggleImportant._importantClickListener) {
        toggleImportant.removeEventListener('click', toggleImportant._importantClickListener);
    }

    toggleImportant._importantClickListener = () => {
        changeTaskProperty.toggleImportant(taskIndex);
        displayTasks.renderTasksForProject(currentProject.getAppState().currentProject);
    };

    toggleImportant.addEventListener('click', toggleImportant._importantClickListener);
}

function addEventListenerEditDueDate(editDueDate, taskIndex) {
    editDueDate.addEventListener('change', function() {
        const date = new Date(this.value);
        const constDateAtNoon = addHours(date, 12);
        changeTaskProperty.editDueDate(taskIndex, constDateAtNoon);
        displayTasks.editDueDateElement(taskIndex)
    });
}

function addEventListenerCompletionStatus(completionStatus) {
    completionStatus.addEventListener('click', () => {

        const taskCard = completionStatus.closest('.taskCard');
        const dataIndex = taskCard.getAttribute('data-index');
        changeTaskProperty.toggleCompletionStatus(dataIndex);
    });
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
        displayTasks.renderTasksForProject('All');
        currentProject.setCurrentProject('All');
    });
})();

(function addEventListenerTodayBtn() {
    const todayTabBtn = document.getElementById('todayTab');

    todayTabBtn.addEventListener('click', () => {
            displayTasks.renderTasksForProject('today');
            currentProject.setCurrentProject('today');
    });
})();

(function addEventListenerImportantBtn() {
    const importantTabBtn = document.getElementById('importantTab');

    importantTabBtn.addEventListener('click', () => {
        displayTasks.renderTasksForProject('important');
        currentProject.setCurrentProject('important');
    })
})();

(function addEventListenerAddProjectInput() {
    const addProjectInput = document.getElementById('addProjectInput');
    const projects = getProjectsFromStorage();

    addProjectInput.addEventListener('keypress', event => {
        const inputValue = addProjectInput.value;
        if (event.key ==='Enter' && inputValue != '') {
            if (!projects.includes(inputValue)) {
                populateStorageProjects(inputValue);
            }
        }
    })
})();

function addEventListenerAddTaskInput() {
    const addTaskInput = document.getElementById('addTaskInput');
    const appState = currentProject.getAppState().currentProject;

    addTaskInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            if (addTaskInput.value !== '') {
                const currentDate = startOfToday();
                const currentDateAtNoon = addHours(currentDate, 12);
                const inputValue = event.target.value;
                if (appState == 'All') {
                    new Task(inputValue, 'description', currentDateAtNoon, false, false, '');
                    displayTasks.renderTasksForProject('All');
                }
                else if (appState == 'today'){
                    new Task(inputValue, 'description', currentDateAtNoon, false, false, '');
                    displayTasks.renderTasksForProject('today');
                }
                else if (appState == 'important'){
                    new Task(inputValue, 'description', currentDateAtNoon, false, true, '');
                    displayTasks.renderTasksForProject('important');
                }
                event.target.value = ''; // Clear the input field after submitting
            }
        }
    });  
}

function addEventListenerTaskTitle(taskTitle) {
    taskTitle.addEventListener('click', () => {
        displayTasks.editTaskTitle(taskTitle);
    })
}

export { addEventListenerCompletionStatus, addEventListenerAddTaskInput, addEventListenerTaskTitle, addEventListenerTaskCard, addEventListenerImportantToggle, addEventListenerEditDueDate }