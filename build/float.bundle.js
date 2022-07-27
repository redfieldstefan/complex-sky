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

/***/ "./canvases/float.js":
/*!***************************!*\
  !*** ./canvases/float.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\n\nconst Float = ({id=\"float\", height = 500, width = 700}) => {\n\tconst { ctx } = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createCanvas)({id, height, width, title: \"float\"});\n\n\tconst area = height * width;\n\n\tctx.canvas.width  = width;\n  ctx.canvas.height = height;\n\n\tconst hotspotX = Math.floor(width / 4);\n\tconst hotspotY = Math.floor(height * .25);\n\n\tconst setRandomLean = (x, y) => {\n\t\tconst xdiff = Math.abs(hotspotX - x);\n\t\tconst ydiff = Math.abs(hotspotY - y);\n\n\t\tconst howClose = ((255/2) - xdiff) + ((255/2) - ydiff);\n\t\tconst lean = howClose / 255; \n\n\t\treturn Math.random() > lean ? 0 : 255;\n\t}\n\n\tlet x = 0;\n\tlet y = 0;\n\n\tfor (let i = 0; i < area; i++) {\n\t\tif (x >= width) {\n\t\t\ty++\n\t\t\tx = 0;\n\t\t}\n\n\t\tconst imageData = new ImageData(new Uint8ClampedArray([(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.randomDarkVal)(), (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.randomDarkVal)(), (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.randomDarkVal)(), setRandomLean(x, y)]), 1, 1);\n\n\t\tctx.putImageData(imageData, x, y);\n\t\tx++;\n\t};\n\n\treturn;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Float)({}));\n\n\n//# sourceURL=webpack://complex-sky/./canvases/float.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomRgbaVal\": () => (/* binding */ randomRgbaVal),\n/* harmony export */   \"randomMutedVal\": () => (/* binding */ randomMutedVal),\n/* harmony export */   \"randomMedVal\": () => (/* binding */ randomMedVal),\n/* harmony export */   \"randomDarkVal\": () => (/* binding */ randomDarkVal),\n/* harmony export */   \"createCanvas\": () => (/* binding */ createCanvas)\n/* harmony export */ });\nconst randomRgbaVal = () => Math.floor(Math.random() * 255);\n\nconst randomMutedVal = () => {\n\tconst val = Math.floor(Math.random() * 200);\n\n\treturn val < 100 ? 100 : val;\n};\n\nconst randomMedVal = () => {\n\tconst val = Math.floor(Math.random() * 255);\n\n\treturn val > 127 ? 127 : val;\n}\n\nconst randomDarkVal = () => {\n\tconst val = Math.floor(Math.random() * 255);\n\n\treturn val > 225 ? 225 : val;\n}\n\nconst createCanvas = ({ id, height, width, title }) => {\n\tconst container = document.getElementById(\"container\");\n\tconst label = title && document.createElement(\"p\");\n\tconst placeholder = document.getElementById(\"placeholder\");\n\tconst freshCanvas = document.createElement(\"canvas\");\n\n\tfreshCanvas.setAttribute('id', id);\n\tcontainer.style.height = `${height}px`;\n\tcontainer.style.width = `${width}px`;\n\n\tcontainer.appendChild(freshCanvas);\n\n\tif (label) {\n\t\tlabel.innerHTML = title.toUpperCase();\n\t\tlabel.style.fontSize = '.8em';\n\t\tcontainer.appendChild(label);\n\t}\n\n\tif (placeholder) {\n\t\tplaceholder.remove();\n\t}\n\n\tconst canvas = document.getElementById(id);\n\tconst ctx = canvas.getContext('2d');\n\n\treturn {\n\t\tcanvas,\n\t\tctx\n\t}\n}\n\n\n//# sourceURL=webpack://complex-sky/./index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./canvases/float.js");
/******/ 	
/******/ })()
;