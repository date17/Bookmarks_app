/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/addTagForm.js":
/*!************************************!*\
  !*** ./resources/js/addTagForm.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var addForm = document.getElementById("addTagForm");
addForm.style.display = "none";

document.getElementById("tag-add").onclick = function () {
  console.log("click"); //フォームを表示しているかのflgをスイッチする

  if (addForm.style.display === "none") {
    addForm.style.display = "block";
  } else {
    addForm.style.display = "none";
  }
};

document.getElementById("cancel").onclick = function () {
  console.log("cancel click");

  if (addForm.style.display === "block") {
    addForm.style.display = "none";
  }
};

/***/ }),

/***/ "./resources/sass/addBookmark.scss":
/*!*****************************************!*\
  !*** ./resources/sass/addBookmark.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/addTag.scss":
/*!************************************!*\
  !*** ./resources/sass/addTag.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/bookmarks.scss":
/*!***************************************!*\
  !*** ./resources/sass/bookmarks.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/editBookmark.scss":
/*!******************************************!*\
  !*** ./resources/sass/editBookmark.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/mypage.scss":
/*!************************************!*\
  !*** ./resources/sass/mypage.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/addTagForm.js ./resources/sass/app.scss ./resources/sass/bookmarks.scss ./resources/sass/mypage.scss ./resources/sass/editBookmark.scss ./resources/sass/addBookmark.scss ./resources/sass/addTag.scss ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/minamidatetakuya/code/Bookmarks_app/resources/js/addTagForm.js */"./resources/js/addTagForm.js");
__webpack_require__(/*! /Users/minamidatetakuya/code/Bookmarks_app/resources/sass/app.scss */"./resources/sass/app.scss");
__webpack_require__(/*! /Users/minamidatetakuya/code/Bookmarks_app/resources/sass/bookmarks.scss */"./resources/sass/bookmarks.scss");
__webpack_require__(/*! /Users/minamidatetakuya/code/Bookmarks_app/resources/sass/mypage.scss */"./resources/sass/mypage.scss");
__webpack_require__(/*! /Users/minamidatetakuya/code/Bookmarks_app/resources/sass/editBookmark.scss */"./resources/sass/editBookmark.scss");
__webpack_require__(/*! /Users/minamidatetakuya/code/Bookmarks_app/resources/sass/addBookmark.scss */"./resources/sass/addBookmark.scss");
module.exports = __webpack_require__(/*! /Users/minamidatetakuya/code/Bookmarks_app/resources/sass/addTag.scss */"./resources/sass/addTag.scss");


/***/ })

/******/ });