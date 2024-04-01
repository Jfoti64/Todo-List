import * as changeTaskProperty from "./changeTaskProperty";

function addEventListenerCompletionStatus(completionStatus) {
    completionStatus.addEventListener('click', () => {
        const taskCard = completionStatus.closest('.taskCard');
        const dataIndex = taskCard.getAttribute('data-index');
        changeTaskProperty.toggleCompletionStatus(dataIndex);
    });
}

function addEventListenerAddTaskInput() {
    const addTaskInput = document.getElementById('addTaskInput');

    addTaskInput.addEventListener('input', event => {
        const formattedDate = format(specifiedDate, 'MM/dd/yyyy');
        const inputValue = event.target.value;
        new Task(inputValue, 'description', formattedDate, true, true, '');
    });
}


export { addEventListenerCompletionStatus, addEventListenerAddTaskInput }