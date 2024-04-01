import * as changeTaskProperty from "./changeTaskProperty";

function addEventListenerCompletionStatus(completionStatus) {
    completionStatus.addEventListener('click', () => {
        const taskCard = completionStatus.closest('.taskCard');
        const dataIndex = taskCard.getAttribute('data-index');
        changeTaskProperty.toggleCompletionStatus(dataIndex);
    });
}


export { addEventListenerCompletionStatus }