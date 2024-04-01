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
        // This function will be called whenever the value of the input changes
        const inputValue = event.target.value;
        console.log('Input value:', inputValue);
    });
}


export { addEventListenerCompletionStatus, addEventListenerAddTaskInput }