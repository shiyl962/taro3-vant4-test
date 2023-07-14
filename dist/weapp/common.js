"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/utils/constant.ts":
/*!*******************************!*\
  !*** ./src/utils/constant.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RED": function() { return /* binding */ RED; }
/* harmony export */ });
/* unused harmony exports BORDER, BORDER_TOP, BORDER_LEFT, BORDER_BOTTOM, BORDER_SURROUND, BORDER_TOP_BOTTOM, BORDER_UNSET_TOP_BOTTOM */
// color
var RED = '#ee0a24';

// border
var BORDER = 'van-hairline';
var BORDER_TOP = "".concat(BORDER, "--top");
var BORDER_LEFT = "".concat(BORDER, "--left");
var BORDER_BOTTOM = "".concat(BORDER, "--bottom");
var BORDER_SURROUND = "".concat(BORDER, "--surround");
var BORDER_TOP_BOTTOM = "".concat(BORDER, "--top-bottom");
var BORDER_UNSET_TOP_BOTTOM = "".concat(BORDER, "-unset--top-bottom");

/***/ }),

/***/ "./src/utils/deep-clone.ts":
/*!*********************************!*\
  !*** ./src/utils/deep-clone.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepClone": function() { return /* binding */ deepClone; }
/* harmony export */ });
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/utils/index.ts");


function deepClone(obj) {
  if (!(0,_index__WEBPACK_IMPORTED_MODULE_0__.isDef)(obj)) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }
  if ((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) === 'object') {
    var to = {};
    Object.keys(obj).forEach(function (key) {
      to[key] = deepClone(obj[key]);
    });
    return to;
  }
  return obj;
}

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDef": function() { return /* binding */ isDef; }
/* harmony export */ });
function isDef(val) {
  return val !== undefined && val !== null;
}

/***/ })

}]);
//# sourceMappingURL=common.js.map