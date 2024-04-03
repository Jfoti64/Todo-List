import * as changeTaskProperty from "./changeTaskProperty";
import { Task } from './tasks';
import * as displayTasks from "./displayTasks";
import { getTasksFromStorage } from "./getTasksFromStorage";
import { format } from 'date-fns';

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

    // Create a new listener
    toggleImportant._importantClickListener = () => {
        changeTaskProperty.toggleImportant(taskIndex);
        displayTasks.toggleImportantIcon(taskIndex);
    };

    // Add the new listener
    toggleImportant.addEventListener('click', toggleImportant._importantClickListener);
}

function addEventListenerEditDueDate(editDueDate, taskIndex) {
    editDueDate.addEventListener('change', function() {
        const date = new Date(this.value).toISOString();
        changeTaskProperty.editDueDate(taskIndex, date);
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
        const editPanel = document.getElementById('taskEditPanel');
        if (!editPanel.contains(event.target) && editPanel.classList.contains('open')) {
            editPanel.classList.remove('open');
        }
    });
});


(function addEventListenerAllTasksBtn() {
    const allTasksTabBtn = document.getElementById('allTab');

    allTasksTabBtn.addEventListener('click', () => {
        displayTasks.displayAllTasksTab();
    });
})();

(function addEventListenerTodayBtn() {
    const todayTabBtn = document.getElementById('todayTab');

    todayTabBtn.addEventListener('click', () => {
            displayTasks.displayDueTodayTab();
    });
})();

(function addEventListenerImportantBtn() {
    const importantTabBtn = document.getElementById('importantTab');

    importantTabBtn.addEventListener('click', () => {
        displayTasks.displayImportantTab();
    })
})();

function addEventListenerAddTaskInput() {
    const addTaskInput = document.getElementById('addTaskInput');

    addTaskInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            if (addTaskInput.value !== '') {
                const projectName = document.getElementById('projectName');
                const CurrentDate = new Date().toISOString();
                const inputValue = event.target.value;
                if (projectName.innerHTML == 'All') {
                    new Task(inputValue, 'description', CurrentDate, false, false, '');
                    displayTasks.displayAllTasksTab();
                }
                else {
                    new Task(inputValue, 'description', CurrentDate, false, false, projectName.innerHTML);
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

// When dueDate p is clicked
/**function addEventListenerDueDate(dueDate) {
    dueDate.addEventListener('click', (e) => {
        const datePicker = taskCard.querySelector('.datePicker');

        // Setup the event listener for when a new date is selected
        datePicker.addEventListener('change', function() {
            // Update the dueDate element with the new date
            dueDate.textContent = this.value;
        });
    });
} 

function addEventListenerImportantIcon(icon) {
    icon.addEventListener('click', () => {
        const taskCard = icon.closest('.taskCard');
        const index = taskCard.getAttribute('data-index');
        changeTaskProperty.toggleImportant(index);
    });
} 
**/



export { addEventListenerCompletionStatus, addEventListenerAddTaskInput, addEventListenerTaskTitle, addEventListenerTaskCard, addEventListenerImportantToggle, addEventListenerEditDueDate }