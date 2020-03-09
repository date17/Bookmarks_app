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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/layout.js":
/*!********************************!*\
  !*** ./resources/js/layout.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//全てのページに共通すること
//大元のラベル
var label = {
  bookmark: document.getElementById("label-bookmark"),
  tag: document.getElementById("label-tag"),
  user: document.getElementById("label-user"),
  other: document.getElementById("label-other")
}; //詳細のラベル

var detail = {
  bookmark: [document.getElementById("label-bookmark-detail"), {
    add: document.getElementById("bookmark-add")
  }],
  tag: [document.getElementById("label-tag-detail"), {
    add: document.getElementById("tag-add")
  }],
  user: [document.getElementById("label-user-detail"), {
    detail: document.getElementById("user-detail"),
    logout: document.getElementById("user-logout"),
    retire: document.getElementById("user-retire")
  }],
  other: [document.getElementById("label-other-detail"), {
    common: document.getElementById("other-common")
  }]
}; //クリックしたかのフラグ

var flg = {
  bookmark: false,
  tag: false,
  user: false,
  other: false
};
document.getElementById("bookmark-open").style.display = "none";
document.getElementById("tag-open").style.display = "none";
document.getElementById("user-open").style.display = "none";
document.getElementById("other-open").style.display = "none"; //初めはdetailは全て非表示にしておく

displayNone(detail.bookmark[0]);
displayNone(detail.tag[0]);
displayNone(detail.user[0]);
displayNone(detail.other[0]); //クリックによりフラグの真偽値を変えて、子エレメントの表示非表示を切り替える

label.bookmark.onclick = function () {
  flg.bookmark = !flg.bookmark;

  if (flg.bookmark === true) {
    document.getElementById("bookmark-close").style.display = "none";
    document.getElementById("bookmark-open").style.display = "block";
    displayBlock(detail.bookmark[0]);
  } else {
    document.getElementById("bookmark-close").style.display = "block";
    document.getElementById("bookmark-open").style.display = "none";
    displayNone(detail.bookmark[0]);
  }
};

label.tag.onclick = function () {
  flg.tag = !flg.tag;

  if (flg.tag === true) {
    document.getElementById("tag-close").style.display = "none";
    document.getElementById("tag-open").style.display = "block";
    displayBlock(detail.tag[0]);
  } else {
    document.getElementById("tag-close").style.display = "block";
    document.getElementById("tag-open").style.display = "none";
    displayNone(detail.tag[0]);
  }
};

label.user.onclick = function () {
  flg.user = !flg.user;

  if (flg.user === true) {
    document.getElementById("user-close").style.display = "none";
    document.getElementById("user-open").style.display = "block";
    displayBlock(detail.user[0]);
  } else {
    document.getElementById("user-close").style.display = "block";
    document.getElementById("user-open").style.display = "none";
    displayNone(detail.user[0]);
  }
};

label.other.onclick = function () {
  flg.other = !flg.other;

  if (flg.other === true) {
    document.getElementById("other-close").style.display = "none";
    document.getElementById("other-open").style.display = "block";
    displayBlock(detail.other[0]);
  } else {
    document.getElementById("other-close").style.display = "block";
    document.getElementById("other-open").style.display = "none";
    displayNone(detail.other[0]);
  }
}; //ログアウト処理


detail.user[1].logout.onclick = function () {
  if (window.confirm("ログアウトしてよろしいでしょうか？")) {
    logout_form = document.getElementById("logoutForm");
    logout_form.submit();
  } else {
    window.alert("キャンセルされました");
  }
}; //ユーザーの退会処理


detail.user[1].retire.onclick = function () {
  if (window.confirm("退会するとブックマーク、タグの情報が全てなくなりますがよろしいでしょうか？")) {
    if (window.confirm("本当によろしいでしょうか？")) {
      var retireForm = document.getElementById("retireForm");
      retireForm.submit();
    } else {
      window.alert("キャンセルされました");
    }
  } else {
    window.alert("キャンセルされました");
  }
}; //非表示にする関数


function displayNone(tag) {
  tag.style.display = "none";
} //表示にする関数


function displayBlock(tag) {
  tag.style.display = "block";
} //回転する関数


function rotateTag(tag, deg) {
  tag.style.transform = "rotate(" + deg + "deg)";
}

/***/ }),

/***/ 2:
/*!**************************************!*\
  !*** multi ./resources/js/layout.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/Bookmarks_app/resources/js/layout.js */"./resources/js/layout.js");


/***/ })

/******/ });