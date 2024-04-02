import * as changeTaskProperty from "./changeTaskProperty";
import { Task } from './tasks';
import { format } from "date-fns";
import * as displayTasks from "./displayTasks";

function addEventListenerTaskCard(taskCard) {
    taskCard.addEventListener('click', () => {
        const dataIndex = taskCard.getAttribute('data-index');
        displayTasks.openEditPanel(dataIndex);
    });
}

function addEventListenerImportantToggle(toggleImportant, taskIndex) {
    toggleImportant.addEventListener('click', () => {
        changeTaskProperty.toggleImportant(taskIndex);
    });
}

document.getElementById('saveTaskChanges').addEventListener('click', () => {
    // Logic to save changes
    document.getElementById('taskEditPanel').classList.remove('open');
});

document.getElementById('closePanelBtn').addEventListener('click', () => {
    document.getElementById('taskEditPanel').classList.remove('open');
});

function addEventListenerCompletionStatus(completionStatus) {
    completionStatus.addEventListener('click', () => {

        const taskCard = completionStatus.closest('.taskCard');
        const dataIndex = taskCard.getAttribute('data-index');
        changeTaskProperty.toggleCompletionStatus(dataIndex);
    });
}

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
                const formattedCurrentDate = format(new Date(), 'yyyy-MM-dd');
                const inputValue = event.target.value;
                if (projectName.innerHTML == 'All') {
                    new Task(inputValue, 'description', formattedCurrentDate, false, false, '');
                    displayTasks.displayAllTasksTab();
                }
                else {
                    new Task(inputValue, 'description', formattedCurrentDate, false, false, projectName.innerHTML);
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
/** function addEventListenerDueDate(dueDate) {
    dueDate.addEventListener('blur', function() {
        this.style.display = 'none';
    });

    dueDate.addEventListener('click', (e) => {
        const taskCard = dueDate.closest('.taskCard');
        const datePicker = taskCard.querySelector('.datePicker');
        
        datePicker.style.display = 'block';
        datePicker.focus();

        // Setup the event listener for when a new date is selected
        datePicker.addEventListener('change', function() {
            // Update the dueDate element with the new date
            dueDate.textContent = this.value;

            // Hide the date picker
            this.style.display = 'none';
        });
    });
} 

function addEventListenerImportantIcon(icon) {
    icon.addEventListener('click', () => {
        const taskCard = icon.closest('.taskCard');
        const index = taskCard.getAttribute('data-index');
        changeTaskProperty.toggleImportant(index);
    });
} **/




export { addEventListenerCompletionStatus, addEventListenerAddTaskInput, addEventListenerTaskTitle, addEventListenerTaskCard, addEventListenerImportantToggle }