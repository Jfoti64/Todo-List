import * as changeTaskProperty from "./changeTaskProperty";
import { Task } from './tasks';
import { format } from "date-fns";

function addEventListenerCompletionStatus(completionStatus) {
    completionStatus.addEventListener('click', () => {
        const taskCard = completionStatus.closest('.taskCard');
        const dataIndex = taskCard.getAttribute('data-index');
        changeTaskProperty.toggleCompletionStatus(dataIndex);
    });
}

function addEventListenerAddTaskInput() {
    const addTaskInput = document.getElementById('addTaskInput');

    addTaskInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            if (addTaskInput.value !== '') {
                const formattedCurrentDate = format(new Date(), 'MM/dd/yyyy');
                const inputValue = event.target.value;
                new Task(inputValue, 'description', formattedCurrentDate, false, false, '');
                event.target.value = ''; // Clear the input field after submitting
            }
        }
    });  
}


export { addEventListenerCompletionStatus, addEventListenerAddTaskInput }