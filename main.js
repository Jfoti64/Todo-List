/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/changeTaskProperty.js":
/*!***********************************!*\
  !*** ./src/changeTaskProperty.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editDescription: () => (/* binding */ editDescription),
/* harmony export */   editDueDate: () => (/* binding */ editDueDate),
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   editTitle: () => (/* binding */ editTitle),
/* harmony export */   toggleCompletionStatus: () => (/* binding */ toggleCompletionStatus),
/* harmony export */   toggleImportant: () => (/* binding */ toggleImportant)
/* harmony export */ });
/* harmony import */ var _getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasksFromStorage */ "./src/getTasksFromStorage.js");


function updateTasksInStorage(updatedTasks) {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

function updateProjectsInStorage(updatedProjects) {
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
}

function editTaskProperty(taskIndex, propertyName, newValue) {
    const tasks = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__.getTasksFromStorage)();
    tasks[taskIndex][propertyName] = newValue;
    updateTasksInStorage(tasks);

}

function editTitle(taskIndex, newTitle) {
    editTaskProperty(taskIndex, 'title', newTitle);
}

function editDescription(taskIndex, newDescription) {
    editTaskProperty(taskIndex, 'description', newDescription);
}

function editDueDate(taskIndex, newDueDate) {
    editTaskProperty(taskIndex, 'dueDate', newDueDate);
}

function toggleCompletionStatus(taskIndex) {
    const tasks = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__.getTasksFromStorage)();
    tasks[taskIndex].completionStatus = !tasks[taskIndex].completionStatus;
    updateTasksInStorage(tasks);
}

function toggleImportant(taskIndex) {
    const tasks = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__.getTasksFromStorage)();
    tasks[taskIndex].important = !tasks[taskIndex].important;
    updateTasksInStorage(tasks);
}

function editProject(taskIndex, newProject) {
    editTaskProperty(taskIndex, 'project', newProject);
    const projects = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__.getProjectsFromStorage)();
    if (!projects.includes(newProject)) {
        projects.push(newProject);
        updateProjectsInStorage(projects);
    }
}





/***/ }),

/***/ "./src/getTasksFromStorage.js":
/*!************************************!*\
  !*** ./src/getTasksFromStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjectsFromStorage: () => (/* binding */ getProjectsFromStorage),
/* harmony export */   getTasksFromStorage: () => (/* binding */ getTasksFromStorage)
/* harmony export */ });
function getTasksFromStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
}

function getProjectsFromStorage() {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    return projects;
}



/***/ }),

/***/ "./src/populateStorage.js":
/*!********************************!*\
  !*** ./src/populateStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateStorage: () => (/* binding */ populateStorage)
/* harmony export */ });
function populateStorage(task) {
    // Retrieve existing tasks array from localStorage (or initialize an empty array)
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    projects.push(task.project);

    localStorage.setItem('projects', JSON.stringify(projects));

    // Add the new task to the tasks array
    tasks.push(task);

    // Store the updated tasks array back into localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}




/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasksFromStorage */ "./src/getTasksFromStorage.js");
/* harmony import */ var _populateStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateStorage */ "./src/populateStorage.js");
/* harmony import */ var _updateIndexes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateIndexes */ "./src/updateIndexes.js");




class Task {
    constructor(title, description, dueDate, completionStatus, important, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completionStatus = completionStatus;
        this.important = important;
        this.project = project;
        this.index = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__.getTasksFromStorage)().length;
        (0,_updateIndexes__WEBPACK_IMPORTED_MODULE_2__.updateIndexes)();
        (0,_populateStorage__WEBPACK_IMPORTED_MODULE_1__.populateStorage)(this);
    }


}



/***/ }),

/***/ "./src/updateIndexes.js":
/*!******************************!*\
  !*** ./src/updateIndexes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateIndexes: () => (/* binding */ updateIndexes)
/* harmony export */ });
/* harmony import */ var _getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasksFromStorage */ "./src/getTasksFromStorage.js");


function updateIndexes() {
    const tasks = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__.getTasksFromStorage)();

    tasks.forEach((task, idx) => {
        task.index = idx;
    });
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _getTasksFromStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTasksFromStorage */ "./src/getTasksFromStorage.js");
/* harmony import */ var _populateStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateStorage */ "./src/populateStorage.js");
/* harmony import */ var _changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeTaskProperty */ "./src/changeTaskProperty.js");





//                       (title, description, dueDate, completionStatus, important, project)
let testing = new _tasks__WEBPACK_IMPORTED_MODULE_0__.Task('title1', 'description1', 'dueDate1', true, true, 'project1');

_changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__.editTitle(testing.index, 'TITLE2');

_changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__.editDescription(testing.index, 'DESCRIPTION2');

_changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__.editDueDate(testing.index, 'DUEDATE2');

_changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__.toggleCompletionStatus(testing.index);

_changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__.toggleImportant(testing.index);

_changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__.editProject(testing.index, 'PROJECT2');



let firstTry = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_1__.getTasksFromStorage)();

// Log first object's title in tasks array from local storage
console.log(firstTry[0].title);
console.log(firstTry[0].description);
console.log(firstTry[0].dueDate);
console.log(firstTry[0].completionStatus);
console.log(firstTry[0].important);
console.log(firstTry[0].project);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRjs7QUFFcEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix5RUFBbUI7QUFDckM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix5RUFBbUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHlFQUFtQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw0RUFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR3lHOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkR6RztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCaUM7QUFDUjtBQUNKOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlFQUFtQjtBQUN4QyxRQUFRLDZEQUFhO0FBQ3JCLFFBQVEsaUVBQWU7QUFDdkI7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCNEQ7O0FBRTVEO0FBQ0Esa0JBQWtCLHlFQUFtQjs7QUFFckM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQzZCO0FBQ1I7QUFDTzs7QUFFM0Q7QUFDQSxrQkFBa0Isd0NBQUk7O0FBRXRCLDBEQUE0Qjs7QUFFNUIsZ0VBQWtDOztBQUVsQyw0REFBOEI7O0FBRTlCLHVFQUF5Qzs7QUFFekMsZ0VBQWtDOztBQUVsQyw0REFBOEI7Ozs7QUFJOUIsZUFBZSx5RUFBbUI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NoYW5nZVRhc2tQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ2V0VGFza3NGcm9tU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcG9wdWxhdGVTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXBkYXRlSW5kZXhlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvamVjdHNGcm9tU3RvcmFnZSwgZ2V0VGFza3NGcm9tU3RvcmFnZSB9IGZyb20gXCIuL2dldFRhc2tzRnJvbVN0b3JhZ2VcIjtcblxuZnVuY3Rpb24gdXBkYXRlVGFza3NJblN0b3JhZ2UodXBkYXRlZFRhc2tzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRhc2tzKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzSW5TdG9yYWdlKHVwZGF0ZWRQcm9qZWN0cykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFza1Byb3BlcnR5KHRhc2tJbmRleCwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSkge1xuICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3NGcm9tU3RvcmFnZSgpO1xuICAgIHRhc2tzW3Rhc2tJbmRleF1bcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuICAgIHVwZGF0ZVRhc2tzSW5TdG9yYWdlKHRhc2tzKTtcblxufVxuXG5mdW5jdGlvbiBlZGl0VGl0bGUodGFza0luZGV4LCBuZXdUaXRsZSkge1xuICAgIGVkaXRUYXNrUHJvcGVydHkodGFza0luZGV4LCAndGl0bGUnLCBuZXdUaXRsZSk7XG59XG5cbmZ1bmN0aW9uIGVkaXREZXNjcmlwdGlvbih0YXNrSW5kZXgsIG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgZWRpdFRhc2tQcm9wZXJ0eSh0YXNrSW5kZXgsICdkZXNjcmlwdGlvbicsIG5ld0Rlc2NyaXB0aW9uKTtcbn1cblxuZnVuY3Rpb24gZWRpdER1ZURhdGUodGFza0luZGV4LCBuZXdEdWVEYXRlKSB7XG4gICAgZWRpdFRhc2tQcm9wZXJ0eSh0YXNrSW5kZXgsICdkdWVEYXRlJywgbmV3RHVlRGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRpb25TdGF0dXModGFza0luZGV4KSB7XG4gICAgY29uc3QgdGFza3MgPSBnZXRUYXNrc0Zyb21TdG9yYWdlKCk7XG4gICAgdGFza3NbdGFza0luZGV4XS5jb21wbGV0aW9uU3RhdHVzID0gIXRhc2tzW3Rhc2tJbmRleF0uY29tcGxldGlvblN0YXR1cztcbiAgICB1cGRhdGVUYXNrc0luU3RvcmFnZSh0YXNrcyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUltcG9ydGFudCh0YXNrSW5kZXgpIHtcbiAgICBjb25zdCB0YXNrcyA9IGdldFRhc2tzRnJvbVN0b3JhZ2UoKTtcbiAgICB0YXNrc1t0YXNrSW5kZXhdLmltcG9ydGFudCA9ICF0YXNrc1t0YXNrSW5kZXhdLmltcG9ydGFudDtcbiAgICB1cGRhdGVUYXNrc0luU3RvcmFnZSh0YXNrcyk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KHRhc2tJbmRleCwgbmV3UHJvamVjdCkge1xuICAgIGVkaXRUYXNrUHJvcGVydHkodGFza0luZGV4LCAncHJvamVjdCcsIG5ld1Byb2plY3QpO1xuICAgIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHNGcm9tU3RvcmFnZSgpO1xuICAgIGlmICghcHJvamVjdHMuaW5jbHVkZXMobmV3UHJvamVjdCkpIHtcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgdXBkYXRlUHJvamVjdHNJblN0b3JhZ2UocHJvamVjdHMpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgeyBlZGl0VGl0bGUsIGVkaXREZXNjcmlwdGlvbiwgZWRpdER1ZURhdGUsIHRvZ2dsZUNvbXBsZXRpb25TdGF0dXMsIHRvZ2dsZUltcG9ydGFudCwgZWRpdFByb2plY3QgfTtcbiIsImZ1bmN0aW9uIGdldFRhc2tzRnJvbVN0b3JhZ2UoKSB7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcbiAgICByZXR1cm4gdGFza3M7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RzRnJvbVN0b3JhZ2UoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcbiAgICByZXR1cm4gcHJvamVjdHM7XG59XG5cbmV4cG9ydCB7IGdldFRhc2tzRnJvbVN0b3JhZ2UsIGdldFByb2plY3RzRnJvbVN0b3JhZ2UgfTsiLCJmdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UodGFzaykge1xuICAgIC8vIFJldHJpZXZlIGV4aXN0aW5nIHRhc2tzIGFycmF5IGZyb20gbG9jYWxTdG9yYWdlIChvciBpbml0aWFsaXplIGFuIGVtcHR5IGFycmF5KVxuICAgIGxldCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuXG4gICAgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW107XG5cbiAgICBwcm9qZWN0cy5wdXNoKHRhc2sucHJvamVjdCk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG4gICAgLy8gQWRkIHRoZSBuZXcgdGFzayB0byB0aGUgdGFza3MgYXJyYXlcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuXG4gICAgLy8gU3RvcmUgdGhlIHVwZGF0ZWQgdGFza3MgYXJyYXkgYmFjayBpbnRvIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlU3RvcmFnZSB9O1xuIiwiaW1wb3J0IHsgZ2V0VGFza3NGcm9tU3RvcmFnZSB9IGZyb20gJy4vZ2V0VGFza3NGcm9tU3RvcmFnZSc7XG5pbXBvcnQgeyBwb3B1bGF0ZVN0b3JhZ2UgfSBmcm9tICcuL3BvcHVsYXRlU3RvcmFnZSc7XG5pbXBvcnQgeyB1cGRhdGVJbmRleGVzIH0gZnJvbSAnLi91cGRhdGVJbmRleGVzJztcblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBjb21wbGV0aW9uU3RhdHVzLCBpbXBvcnRhbnQsIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuY29tcGxldGlvblN0YXR1cyA9IGNvbXBsZXRpb25TdGF0dXM7XG4gICAgICAgIHRoaXMuaW1wb3J0YW50ID0gaW1wb3J0YW50O1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmluZGV4ID0gZ2V0VGFza3NGcm9tU3RvcmFnZSgpLmxlbmd0aDtcbiAgICAgICAgdXBkYXRlSW5kZXhlcygpO1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UodGhpcyk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IHsgVGFzayB9OyIsImltcG9ydCB7IGdldFRhc2tzRnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi9nZXRUYXNrc0Zyb21TdG9yYWdlXCI7XG5cbmZ1bmN0aW9uIHVwZGF0ZUluZGV4ZXMoKSB7XG4gICAgY29uc3QgdGFza3MgPSBnZXRUYXNrc0Zyb21TdG9yYWdlKCk7XG5cbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpZHgpID0+IHtcbiAgICAgICAgdGFzay5pbmRleCA9IGlkeDtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgdXBkYXRlSW5kZXhlcyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFza3MnO1xuaW1wb3J0IHsgZ2V0VGFza3NGcm9tU3RvcmFnZSB9IGZyb20gJy4vZ2V0VGFza3NGcm9tU3RvcmFnZSc7XG5pbXBvcnQgeyBwb3B1bGF0ZVN0b3JhZ2UgfSBmcm9tICcuL3BvcHVsYXRlU3RvcmFnZSc7XG5pbXBvcnQgKiBhcyBjaGFuZ2VUYXNrUHJvcGVydHkgZnJvbSAnLi9jaGFuZ2VUYXNrUHJvcGVydHknO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgY29tcGxldGlvblN0YXR1cywgaW1wb3J0YW50LCBwcm9qZWN0KVxubGV0IHRlc3RpbmcgPSBuZXcgVGFzaygndGl0bGUxJywgJ2Rlc2NyaXB0aW9uMScsICdkdWVEYXRlMScsIHRydWUsIHRydWUsICdwcm9qZWN0MScpO1xuXG5jaGFuZ2VUYXNrUHJvcGVydHkuZWRpdFRpdGxlKHRlc3RpbmcuaW5kZXgsICdUSVRMRTInKTtcblxuY2hhbmdlVGFza1Byb3BlcnR5LmVkaXREZXNjcmlwdGlvbih0ZXN0aW5nLmluZGV4LCAnREVTQ1JJUFRJT04yJyk7XG5cbmNoYW5nZVRhc2tQcm9wZXJ0eS5lZGl0RHVlRGF0ZSh0ZXN0aW5nLmluZGV4LCAnRFVFREFURTInKTtcblxuY2hhbmdlVGFza1Byb3BlcnR5LnRvZ2dsZUNvbXBsZXRpb25TdGF0dXModGVzdGluZy5pbmRleCk7XG5cbmNoYW5nZVRhc2tQcm9wZXJ0eS50b2dnbGVJbXBvcnRhbnQodGVzdGluZy5pbmRleCk7XG5cbmNoYW5nZVRhc2tQcm9wZXJ0eS5lZGl0UHJvamVjdCh0ZXN0aW5nLmluZGV4LCAnUFJPSkVDVDInKTtcblxuXG5cbmxldCBmaXJzdFRyeSA9IGdldFRhc2tzRnJvbVN0b3JhZ2UoKTtcblxuLy8gTG9nIGZpcnN0IG9iamVjdCdzIHRpdGxlIGluIHRhc2tzIGFycmF5IGZyb20gbG9jYWwgc3RvcmFnZVxuY29uc29sZS5sb2coZmlyc3RUcnlbMF0udGl0bGUpO1xuY29uc29sZS5sb2coZmlyc3RUcnlbMF0uZGVzY3JpcHRpb24pO1xuY29uc29sZS5sb2coZmlyc3RUcnlbMF0uZHVlRGF0ZSk7XG5jb25zb2xlLmxvZyhmaXJzdFRyeVswXS5jb21wbGV0aW9uU3RhdHVzKTtcbmNvbnNvbGUubG9nKGZpcnN0VHJ5WzBdLmltcG9ydGFudCk7XG5jb25zb2xlLmxvZyhmaXJzdFRyeVswXS5wcm9qZWN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=