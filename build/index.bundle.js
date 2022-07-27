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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomRgbaVal\": () => (/* binding */ randomRgbaVal),\n/* harmony export */   \"randomMutedVal\": () => (/* binding */ randomMutedVal),\n/* harmony export */   \"randomMedVal\": () => (/* binding */ randomMedVal),\n/* harmony export */   \"randomDarkVal\": () => (/* binding */ randomDarkVal),\n/* harmony export */   \"createCanvas\": () => (/* binding */ createCanvas)\n/* harmony export */ });\nconst randomRgbaVal = () => Math.floor(Math.random() * 255);\n\nconst randomMutedVal = () => {\n\tconst val = Math.floor(Math.random() * 200);\n\n\treturn val < 100 ? 100 : val;\n};\n\nconst randomMedVal = () => {\n\tconst val = Math.floor(Math.random() * 255);\n\n\treturn val > 127 ? 127 : val;\n}\n\nconst randomDarkVal = () => {\n\tconst val = Math.floor(Math.random() * 255);\n\n\treturn val > 225 ? 225 : val;\n}\n\nconst createCanvas = ({ id, height, width, title }) => {\n\tconst container = document.getElementById(\"container\");\n\tconst label = title && document.createElement(\"p\");\n\tconst placeholder = document.getElementById(\"placeholder\");\n\tconst freshCanvas = document.createElement(\"canvas\");\n\n\tfreshCanvas.setAttribute('id', id);\n\tcontainer.style.height = `${height}px`;\n\tcontainer.style.width = `${width}px`;\n\n\tcontainer.appendChild(freshCanvas);\n\n\tif (label) {\n\t\tlabel.innerHTML = title.toUpperCase();\n\t\tlabel.style.fontSize = '.8em';\n\t\tcontainer.appendChild(label);\n\t}\n\n\tif (placeholder) {\n\t\tplaceholder.remove();\n\t}\n\n\tconst canvas = document.getElementById(id);\n\tconst ctx = canvas.getContext('2d');\n\n\treturn {\n\t\tcanvas,\n\t\tctx\n\t}\n}\n\n\n//# sourceURL=webpack://complex-sky/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;