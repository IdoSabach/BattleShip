/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom/UI.js":
/*!***********************!*\
  !*** ./src/dom/UI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGrid: () => (/* binding */ createGrid)\n/* harmony export */ });\nfunction createGrid() {\r\n  const main = document.querySelector(\".main\");\r\n\r\n  const gridPlayer = document.createElement(\"div\");\r\n  gridPlayer.classList.add(\"gridPlayer\");\r\n  main.appendChild(gridPlayer);\r\n\r\n  for (let row = 0; row < 10; row++) {\r\n    for (let col = 0; col < 10; col++) {\r\n      const boxPlayer = document.createElement('div');\r\n      boxPlayer.classList.add('.boxPlayerOnGridToPlayer');\r\n      boxPlayer.dataset.row = row;\r\n      boxPlayer.dataset.column = col;\r\n      // boxPlayer.textContent = `${row}, ${col}`;\r\n      boxPlayer.style[\"border-style\"] = \"solid\"\r\n      boxPlayer.style[\"border-width\"] = \"1px\"\r\n  \r\n      // boxPlayer.addEventListener('click', handleClick);\r\n  \r\n      gridPlayer.appendChild(boxPlayer);\r\n    }\r\n  }\r\n\r\n  const gridComputer = document.createElement(\"div\");\r\n  gridComputer.classList.add(\"gridComputer\");\r\n  main.appendChild(gridComputer);\r\n\r\n  for (let row = 0; row < 10; row++) {\r\n    for (let col = 0; col < 10; col++) {\r\n      const boxComputer = document.createElement('button');\r\n      boxComputer.classList.add('.boxOnGridToComputer');\r\n      boxComputer.dataset.row = row;\r\n      boxComputer.dataset.column = col;\r\n      // boxComputer.textContent = `${row}, ${col}`;\r\n\r\n      boxComputer.style[\"border-style\"] = \"solid\"\r\n      boxComputer.style[\"border-width\"] = \"1px\"\r\n      boxComputer.style.background = 'none'\r\n      boxComputer.style.cursor = 'pointer'\r\n  \r\n      boxComputer.addEventListener('click', handleClick);\r\n  \r\n      gridComputer.appendChild(boxComputer);\r\n    }\r\n  }\r\n  \r\n}\r\n\r\nfunction handleClick(event) {\r\n  const row = event.currentTarget.dataset.row;\r\n  const column = event.currentTarget.dataset.column;\r\n\r\n  console.log(`Clicked on box: (${row}, ${column})`);\r\n}\n\n//# sourceURL=webpack://battleship/./src/dom/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/UI */ \"./src/dom/UI.js\");\n\r\n\r\n(0,_dom_UI__WEBPACK_IMPORTED_MODULE_0__.createGrid)()\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;