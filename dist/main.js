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
/* harmony export */   editCompletionStatus: () => (/* binding */ editCompletionStatus),
/* harmony export */   editDescription: () => (/* binding */ editDescription),
/* harmony export */   editDueDate: () => (/* binding */ editDueDate),
/* harmony export */   editImportant: () => (/* binding */ editImportant),
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   editTitle: () => (/* binding */ editTitle)
/* harmony export */ });
/* harmony import */ var _getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasksFromStorage */ "./src/getTasksFromStorage.js");
/* harmony import */ var _populateStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateStorage */ "./src/populateStorage.js");



function editTitle(task, newTitle) {
    const tasks = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__.getTasksFromStorage)();
    const index = task.index;

    tasks[index].title = newTitle;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editDescription(task, newDescription) {
    const tasks = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__.getTasksFromStorage)();
    const index = task.index;

    tasks[index].description = newDescription;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editDueDate(task, newDueDate) {
    const tasks = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__.getTasksFromStorage)();
    const index = task.index;

    tasks[index].dueDate = newDueDate;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editCompletionStatus(task) {
    const tasks = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__.getTasksFromStorage)();
    const index = task.index;

    tasks[index].completionStatus = tasks[index].completionStatus ? false: true;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editImportant(task) {
    const tasks = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__.getTasksFromStorage)();
    const index = task.index;

    tasks[index].important = tasks[index].important ? false: true;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editProject(task, newProject) {
    const tasks = (0,_getTasksFromStorage__WEBPACK_IMPORTED_MODULE_0__.getTasksFromStorage)();
    const index = task.index;

    tasks[index].project = newProject;

    localStorage.setItem('tasks', JSON.stringify(tasks));
}






/***/ }),

/***/ "./src/getTasksFromStorage.js":
/*!************************************!*\
  !*** ./src/getTasksFromStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTasksFromStorage: () => (/* binding */ getTasksFromStorage)
/* harmony export */ });
function getTasksFromStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
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

_changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__.editTitle(testing, 'TITLE2');

_changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__.editDescription(testing, 'DESCRIPTION2');

_changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__.editDueDate(testing, 'DUEDATE2');

_changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__.editCompletionStatus(testing);

_changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__.editImportant(testing);

_changeTaskProperty__WEBPACK_IMPORTED_MODULE_3__.editProject(testing, 'PROJECT2');



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDUjs7QUFFcEQ7QUFDQSxrQkFBa0IseUVBQW1CO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUVBQW1CO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUVBQW1CO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUVBQW1CO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUVBQW1CO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUVBQW1CO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJb0c7Ozs7Ozs7Ozs7Ozs7OztBQzNEcEc7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYaUM7QUFDUjtBQUNKOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlFQUFtQjtBQUN4QyxRQUFRLDZEQUFhO0FBQ3JCLFFBQVEsaUVBQWU7QUFDdkI7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCNEQ7O0FBRTVEO0FBQ0Esa0JBQWtCLHlFQUFtQjs7QUFFckM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQzZCO0FBQ1I7QUFDTzs7QUFFM0Q7QUFDQSxrQkFBa0Isd0NBQUk7O0FBRXRCLDBEQUE0Qjs7QUFFNUIsZ0VBQWtDOztBQUVsQyw0REFBOEI7O0FBRTlCLHFFQUF1Qzs7QUFFdkMsOERBQWdDOztBQUVoQyw0REFBOEI7Ozs7QUFJOUIsZUFBZSx5RUFBbUI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NoYW5nZVRhc2tQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ2V0VGFza3NGcm9tU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcG9wdWxhdGVTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXBkYXRlSW5kZXhlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VGFza3NGcm9tU3RvcmFnZSB9IGZyb20gXCIuL2dldFRhc2tzRnJvbVN0b3JhZ2VcIjtcbmltcG9ydCB7IHBvcHVsYXRlU3RvcmFnZSB9IGZyb20gXCIuL3BvcHVsYXRlU3RvcmFnZVwiO1xuXG5mdW5jdGlvbiBlZGl0VGl0bGUodGFzaywgbmV3VGl0bGUpIHtcbiAgICBjb25zdCB0YXNrcyA9IGdldFRhc2tzRnJvbVN0b3JhZ2UoKTtcbiAgICBjb25zdCBpbmRleCA9IHRhc2suaW5kZXg7XG5cbiAgICB0YXNrc1tpbmRleF0udGl0bGUgPSBuZXdUaXRsZTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59XG5cbmZ1bmN0aW9uIGVkaXREZXNjcmlwdGlvbih0YXNrLCBuZXdEZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3NGcm9tU3RvcmFnZSgpO1xuICAgIGNvbnN0IGluZGV4ID0gdGFzay5pbmRleDtcblxuICAgIHRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cblxuZnVuY3Rpb24gZWRpdER1ZURhdGUodGFzaywgbmV3RHVlRGF0ZSkge1xuICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3NGcm9tU3RvcmFnZSgpO1xuICAgIGNvbnN0IGluZGV4ID0gdGFzay5pbmRleDtcblxuICAgIHRhc2tzW2luZGV4XS5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRDb21wbGV0aW9uU3RhdHVzKHRhc2spIHtcbiAgICBjb25zdCB0YXNrcyA9IGdldFRhc2tzRnJvbVN0b3JhZ2UoKTtcbiAgICBjb25zdCBpbmRleCA9IHRhc2suaW5kZXg7XG5cbiAgICB0YXNrc1tpbmRleF0uY29tcGxldGlvblN0YXR1cyA9IHRhc2tzW2luZGV4XS5jb21wbGV0aW9uU3RhdHVzID8gZmFsc2U6IHRydWU7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufVxuXG5mdW5jdGlvbiBlZGl0SW1wb3J0YW50KHRhc2spIHtcbiAgICBjb25zdCB0YXNrcyA9IGdldFRhc2tzRnJvbVN0b3JhZ2UoKTtcbiAgICBjb25zdCBpbmRleCA9IHRhc2suaW5kZXg7XG5cbiAgICB0YXNrc1tpbmRleF0uaW1wb3J0YW50ID0gdGFza3NbaW5kZXhdLmltcG9ydGFudCA/IGZhbHNlOiB0cnVlO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3QodGFzaywgbmV3UHJvamVjdCkge1xuICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3NGcm9tU3RvcmFnZSgpO1xuICAgIGNvbnN0IGluZGV4ID0gdGFzay5pbmRleDtcblxuICAgIHRhc2tzW2luZGV4XS5wcm9qZWN0ID0gbmV3UHJvamVjdDtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59XG5cblxuXG5leHBvcnQgeyBlZGl0VGl0bGUsIGVkaXREZXNjcmlwdGlvbiwgZWRpdER1ZURhdGUsIGVkaXRDb21wbGV0aW9uU3RhdHVzLCBlZGl0SW1wb3J0YW50LCBlZGl0UHJvamVjdCB9XG4iLCJmdW5jdGlvbiBnZXRUYXNrc0Zyb21TdG9yYWdlKCkge1xuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XG4gICAgcmV0dXJuIHRhc2tzO1xufVxuXG5leHBvcnQgeyBnZXRUYXNrc0Zyb21TdG9yYWdlIH07IiwiZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKHRhc2spIHtcbiAgICAvLyBSZXRyaWV2ZSBleGlzdGluZyB0YXNrcyBhcnJheSBmcm9tIGxvY2FsU3RvcmFnZSAob3IgaW5pdGlhbGl6ZSBhbiBlbXB0eSBhcnJheSlcbiAgICBsZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcblxuICAgIC8vIEFkZCB0aGUgbmV3IHRhc2sgdG8gdGhlIHRhc2tzIGFycmF5XG4gICAgdGFza3MucHVzaCh0YXNrKTtcblxuICAgIC8vIFN0b3JlIHRoZSB1cGRhdGVkIHRhc2tzIGFycmF5IGJhY2sgaW50byBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufVxuXG5leHBvcnQgeyBwb3B1bGF0ZVN0b3JhZ2UgfTtcbiIsImltcG9ydCB7IGdldFRhc2tzRnJvbVN0b3JhZ2UgfSBmcm9tICcuL2dldFRhc2tzRnJvbVN0b3JhZ2UnO1xuaW1wb3J0IHsgcG9wdWxhdGVTdG9yYWdlIH0gZnJvbSAnLi9wb3B1bGF0ZVN0b3JhZ2UnO1xuaW1wb3J0IHsgdXBkYXRlSW5kZXhlcyB9IGZyb20gJy4vdXBkYXRlSW5kZXhlcyc7XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgY29tcGxldGlvblN0YXR1cywgaW1wb3J0YW50LCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmNvbXBsZXRpb25TdGF0dXMgPSBjb21wbGV0aW9uU3RhdHVzO1xuICAgICAgICB0aGlzLmltcG9ydGFudCA9IGltcG9ydGFudDtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGdldFRhc2tzRnJvbVN0b3JhZ2UoKS5sZW5ndGg7XG4gICAgICAgIHVwZGF0ZUluZGV4ZXMoKTtcbiAgICAgICAgcG9wdWxhdGVTdG9yYWdlKHRoaXMpO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCB7IFRhc2sgfTsiLCJpbXBvcnQgeyBnZXRUYXNrc0Zyb21TdG9yYWdlIH0gZnJvbSBcIi4vZ2V0VGFza3NGcm9tU3RvcmFnZVwiO1xuXG5mdW5jdGlvbiB1cGRhdGVJbmRleGVzKCkge1xuICAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3NGcm9tU3RvcmFnZSgpO1xuXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaywgaWR4KSA9PiB7XG4gICAgICAgIHRhc2suaW5kZXggPSBpZHg7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZUluZGV4ZXMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7IGdldFRhc2tzRnJvbVN0b3JhZ2UgfSBmcm9tICcuL2dldFRhc2tzRnJvbVN0b3JhZ2UnO1xuaW1wb3J0IHsgcG9wdWxhdGVTdG9yYWdlIH0gZnJvbSAnLi9wb3B1bGF0ZVN0b3JhZ2UnO1xuaW1wb3J0ICogYXMgY2hhbmdlVGFza1Byb3BlcnR5IGZyb20gJy4vY2hhbmdlVGFza1Byb3BlcnR5JztcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGNvbXBsZXRpb25TdGF0dXMsIGltcG9ydGFudCwgcHJvamVjdClcbmxldCB0ZXN0aW5nID0gbmV3IFRhc2soJ3RpdGxlMScsICdkZXNjcmlwdGlvbjEnLCAnZHVlRGF0ZTEnLCB0cnVlLCB0cnVlLCAncHJvamVjdDEnKTtcblxuY2hhbmdlVGFza1Byb3BlcnR5LmVkaXRUaXRsZSh0ZXN0aW5nLCAnVElUTEUyJyk7XG5cbmNoYW5nZVRhc2tQcm9wZXJ0eS5lZGl0RGVzY3JpcHRpb24odGVzdGluZywgJ0RFU0NSSVBUSU9OMicpO1xuXG5jaGFuZ2VUYXNrUHJvcGVydHkuZWRpdER1ZURhdGUodGVzdGluZywgJ0RVRURBVEUyJyk7XG5cbmNoYW5nZVRhc2tQcm9wZXJ0eS5lZGl0Q29tcGxldGlvblN0YXR1cyh0ZXN0aW5nKTtcblxuY2hhbmdlVGFza1Byb3BlcnR5LmVkaXRJbXBvcnRhbnQodGVzdGluZyk7XG5cbmNoYW5nZVRhc2tQcm9wZXJ0eS5lZGl0UHJvamVjdCh0ZXN0aW5nLCAnUFJPSkVDVDInKTtcblxuXG5cbmxldCBmaXJzdFRyeSA9IGdldFRhc2tzRnJvbVN0b3JhZ2UoKTtcblxuLy8gTG9nIGZpcnN0IG9iamVjdCdzIHRpdGxlIGluIHRhc2tzIGFycmF5IGZyb20gbG9jYWwgc3RvcmFnZVxuY29uc29sZS5sb2coZmlyc3RUcnlbMF0udGl0bGUpO1xuY29uc29sZS5sb2coZmlyc3RUcnlbMF0uZGVzY3JpcHRpb24pO1xuY29uc29sZS5sb2coZmlyc3RUcnlbMF0uZHVlRGF0ZSk7XG5jb25zb2xlLmxvZyhmaXJzdFRyeVswXS5jb21wbGV0aW9uU3RhdHVzKTtcbmNvbnNvbGUubG9nKGZpcnN0VHJ5WzBdLmltcG9ydGFudCk7XG5jb25zb2xlLmxvZyhmaXJzdFRyeVswXS5wcm9qZWN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=