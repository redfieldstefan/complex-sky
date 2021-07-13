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

/***/ "./canvases/hotspot.js":
/*!*****************************!*\
  !*** ./canvases/hotspot.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./index.js\");\n\n\nconst Hotspot = ({id=\"canvas\", height = 500, width = 700}) => {\n\t// document.createElement(\"canvas\", { id: 'canvas' });\n\n\tconst canvas = document.getElementById('canvas');\n\tconst ctx = canvas.getContext('2d');\n\n\tconst area = height * width;\n\n\tctx.canvas.width  = width;\n  ctx.canvas.height = height;\n\n\tconst hotspotX = Math.floor(width / 2.35);\n\tconst hotspotY = Math.floor(height / 3);\n\n\tconst setRandomLean = (x, y) => {\n\n\t\tconst xdiff = 255 - Math.min(Math.abs(hotspotX - x), 255);\n\t\tconst ydiff = 255 - Math.min(Math.abs(hotspotY - y), 255);\n\n\t\tconst randomX = Math.floor(Math.random() * xdiff);\n\t\tconst randomY = Math.floor(Math.random() * ydiff);\n\n\t\t// if (xdiff * ydiff < 10000) {\n\t\t// \treturn Math.random() < .6 ? randomY : randomX\n\t\t// }\n\n\t\treturn (y === hotspotY || x === hotspotX) ? 0 : Math.random() < .3 ? randomY : randomX;\n\n\t}\n\n\tlet x = 0;\n\tlet y = 0;\n\n\tfor (var i = 0; i < area; i++) {\n\t\tif (x >= width) {\n\t\t\ty++\n\t\t\tx = 0;\n\t\t}\n\n\t\tconst imageData = new ImageData(new Uint8ClampedArray([setRandomLean(x, y), setRandomLean(x, y), setRandomLean(x, y), (0,_index__WEBPACK_IMPORTED_MODULE_0__.randomDarkVal)(x, y)]), 1, 1);\n\n\t\tctx.putImageData(imageData, x, y);\n\t\tx++;\n\t};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Hotspot)({}));\n\n\n//# sourceURL=webpack://complex-sky/./canvases/hotspot.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomRgbaVal\": () => (/* binding */ randomRgbaVal),\n/* harmony export */   \"randomMutedVal\": () => (/* binding */ randomMutedVal),\n/* harmony export */   \"randomMedVal\": () => (/* binding */ randomMedVal),\n/* harmony export */   \"randomDarkVal\": () => (/* binding */ randomDarkVal)\n/* harmony export */ });\nconst randomRgbaVal = () => Math.floor(Math.random() * 255);\n\nconst randomMutedVal = () => {\n\tconst val = Math.floor(Math.random() * 200);\n\n\treturn val < 100 ? 100 : val;\n};\n\nconst randomMedVal = () => {\n\tconst val = Math.floor(Math.random() * 255);\n\n\treturn val > 127 ? 127 : val;\n}\n\nconst randomDarkVal = () => {\n\tconst val = Math.floor(Math.random() * 255);\n\n\treturn val > 225 ? 225 : val;\n}\n\n\n//# sourceURL=webpack://complex-sky/./index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./canvases/hotspot.js");
/******/ 	
/******/ })()
;