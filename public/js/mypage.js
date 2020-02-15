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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/mypage.js":
/*!********************************!*\
  !*** ./resources/js/mypage.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//mypageのjs
//document.getElementByClassName()で取得した物は配列ではなく、HTMLCollectionオブジェクトである
//取得したものを配列にして変数に格納することでmapなどが使える
// let title_close = Array.prototype.slice.call(
//     document.getElementsByClassName("title-close")
// );
// //クリックした時に表示するtitle-openを最初は非表示にする
// let title_open = Array.prototype.slice.call(
//     document.getElementsByClassName("title-open")
// );
// let detail = Array.prototype.slice.call(
//     document.getElementsByClassName("detail")
// );
// //配列をmapで回して非表示にする。
// title_open = title_open.map(value => {
//     value.style.display = "none";
// });
// //詳細も最初は非表示
// detail = detail.map(value => {
//     value.style.display = "none";
// });
// var title_close = document.getElementsByClassName("title-close");
// var title_open = document.getElementsByClassName("title-open");
// var detail = document.getElementsByClassName("detail");
// console.log(title_close);
// //title-closeがクリックされたらtitle-openとdetailを表示し、title-closeは非表示にする
// for (var i = 0; i < title_close.length; i++) {
//     console.log(title_close[i]);
//     title_close[i].onclick = function() {
//         if (title_close[i].style.display === "block") {
//             title_close[i].style.display === "none";
//             title_open[i].style.display === "block";
//             detail[i].style.display === "block";
//         } else {
//             title_close[i].style.display === "block";
//             title_open[i].style.display === "none";
//             detail[i].style.display === "none";
//         }
//     };
// }
// //子要素の取得
// var eventChild = event.target.childNodes;
// //親要素の取得
// var eventParent = event.target.parentNodes;
//title-closeの取得
var title_close = document.getElementsByClassName("title-close"); //title-closeの要素分ループ

for (var i = 0; i < title_close.length; i++) {
  //各title-closeにイベントをつける
  title_close[i].addEventListener("click", function () {
    //次の要素を取得(title_open)
    var this_title_open = this.nextElementSibling;
    console.log(title_open); //さらに次の要素を取得

    var block_detail = this_title_open.nextElementSibling;
    console.log(block_detail); //title-closeを非表示にしてtitle-openとdetailを表示する

    this.style.display = "none";
    this_title_open.style.display = "block";
    block_detail.style.display = "block";
  });
} //title-openの取得


var title_open = document.getElementsByClassName("title-open"); //title-openのループ

for (var i = 0; i < title_open.length; i++) {
  //各title-openにイベントをつける
  title_open[i].addEventListener("click", function () {
    //次の要素を取得(detail)
    var open_detail = this.nextElementSibling;
    console.log(open_detail); //前の要素の取得(title-close)

    var this_title_close = this.previousElementSibling;
    console.log(this_title_close); //title-openとdetailを非表示にして、title-closeを表示する

    this_title_close.style.display = "block";
    this.style.display = "none";
    open_detail.style.display = "none";
  });
} //タグの削除ボタンを押した時の処理


var tag_btn = document.getElementsByClassName("del_tag");

for (var i = 0; i < tag_btn.length; i++) {
  tag_btn[i].addEventListener("click", function () {
    console.log(this); //クリックしたボタンのid(tagのidにしている)を取得

    var id = this.id * 1;

    if (window.confirm("タグに関連しているbookmarkも消えますがよろしいですか？")) {
      location.href = "/mypage/tag/delete/" + id;
    } else {
      window.alert("キャンセルしました");
    }
  });
} //ブックマークの編集と削除の処理


var edit_bookmark = document.getElementsByClassName("edit-bookmark");
var del_bookmark = document.getElementsByClassName("del-bookmark");

for (var i = 0; i < edit_bookmark.length; i++) {
  edit_bookmark[i].addEventListener("click", function () {
    //valueに入れていたidを取り出して変数に格納
    id = this.value * 1;
    location.href = "/mypage/bookmark/edit/" + id;
  });
}

for (var i = 0; i < del_bookmark.length; i++) {
  del_bookmark[i].addEventListener("click", function () {
    if (window.confirm("このbookmarkを削除してよろしいですか？")) {
      //valueに入れていたidを取り出して変数に格納
      id = this.value * 1;
      location.href = "/mypage/bookmark/delete/" + id;
    } else {
      window.alert("キャンセルしました");
    }
  });
}

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./resources/js/mypage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/minamidatetakuya/code/Bookmarks_app/resources/js/mypage.js */"./resources/js/mypage.js");


/***/ })

/******/ });