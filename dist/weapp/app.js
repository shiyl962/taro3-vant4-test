"use strict";
require("./common");
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/_es/Avatar.js":
/*!********************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/_es/Avatar.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Avatar; }
/* harmony export */ });
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_25dcca32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-25dcca32.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/component-25dcca32.js");
/* harmony import */ var _plugin_vue_export_helper_cc2b3d55_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_plugin-vue_export-helper-cc2b3d55.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/_plugin-vue_export-helper-cc2b3d55.js");






var _createComponent = (0,_component_25dcca32_js__WEBPACK_IMPORTED_MODULE_1__.c)("avatar"),
  componentName = _createComponent.componentName,
  create = _createComponent.create;
var _sfc_main = create({
  props: {
    size: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: "round"
    },
    bgColor: {
      type: String,
      default: "#eee"
    },
    color: {
      type: String,
      default: "#666"
    }
  },
  setup: function setup(props) {
    var _toRefs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props),
      size = _toRefs.size,
      shape = _toRefs.shape,
      bgColor = _toRefs.bgColor,
      color = _toRefs.color;
    var sizeValue = ["large", "normal", "small"];
    var avatarGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("avatarGroup", null);
    var avatarRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var visible = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      lightTheme: false
    });
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      index: 1,
      showMax: false,
      // 是否显示的最大头像个数
      maxIndex: 0
      // avatarGroup里的avatar的个数
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      var _a, _b;
      var children = (_b = (_a = avatarGroup == null ? void 0 : avatarGroup.avatarGroupRef) == null ? void 0 : _a.value) == null ? void 0 : _b.children;
      if (children) {
        avatarLength(children);
      }
    });
    var classes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _ref;
      var _a, _b;
      var prefixCls = componentName;
      return _ref = {}, (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, prefixCls, true), (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, "nut-avatar-".concat(size.value || ((_a = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _a.size) || "normal"), true), (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, "nut-avatar-".concat(shape.value || ((_b = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _b.shape) || "normal"), true), _ref;
    });
    var styles = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _a, _b, _c;
      return {
        width: sizeValue.indexOf(size.value) > -1 ? "" : "".concat(size.value, "px"),
        height: sizeValue.indexOf(size.value) > -1 ? "" : "".concat(size.value, "px"),
        backgroundColor: "".concat(bgColor.value),
        color: "".concat(color.value),
        marginLeft: state.index != 1 && (((_a = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _a.span) ? "".concat((_b = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _b.span, "px") : ""),
        zIndex: ((_c = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _c.zIndex) == "right" ? "".concat(Math.abs(state.maxIndex - state.index)) : ""
      };
    });
    var maxStyles = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _a, _b;
      return {
        backgroundColor: "".concat((_a = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _a.maxBgColor),
        color: "".concat((_b = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _b.maxColor)
      };
    });
    var avatarLength = function avatarLength(children) {
      var _a, _b, _c;
      state.maxIndex = children.length;
      for (var i = 0; i < children.length; i++) {
        children[i].setAttribute("data-index", i + 1);
      }
      if ((_a = avatarRef == null ? void 0 : avatarRef.value) == null ? void 0 : _a.props) {
        state.index = (_b = avatarRef == null ? void 0 : avatarRef.value) == null ? void 0 : _b.props["data-index"];
      }
      if (state.index == state.maxIndex && state.index != ((_c = avatarGroup == null ? void 0 : avatarGroup.props) == null ? void 0 : _c.maxCount)) {
        state.showMax = true;
      }
    };
    return (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
      classes: classes,
      styles: styles,
      maxStyles: maxStyles,
      avatarGroup: avatarGroup,
      visible: visible,
      avatarRef: avatarRef
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(state));
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  return _ctx.showMax || !((_b = (_a = _ctx.avatarGroup) == null ? void 0 : _a.props) == null ? void 0 : _b.maxCount) || _ctx.index <= ((_d = (_c = _ctx.avatarGroup) == null ? void 0 : _c.props) == null ? void 0 : _d.maxCount) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("view", {
    key: 0,
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(!_ctx.showMax ? _ctx.styles : _ctx.maxStyles),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes),
    ref: "avatarRef"
  }, [!((_f = (_e = _ctx.avatarGroup) == null ? void 0 : _e.props) == null ? void 0 : _f.maxCount) || _ctx.index <= ((_h = (_g = _ctx.avatarGroup) == null ? void 0 : _g.props) == null ? void 0 : _h.maxCount) ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    key: 0
  }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), _ctx.showMax && ((_j = (_i = _ctx.avatarGroup) == null ? void 0 : _i.props) == null ? void 0 : _j.maxCount) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(((_l = (_k = _ctx.avatarGroup) == null ? void 0 : _k.props) == null ? void 0 : _l.maxContent) ? (_n = (_m = _ctx.avatarGroup) == null ? void 0 : _m.props) == null ? void 0 : _n.maxContent : "+ ".concat(_ctx.maxIndex - ((_p = (_o = _ctx.avatarGroup) == null ? void 0 : _o.props) == null ? void 0 : _p.maxCount))), 1)], 64)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)], 6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true);
}
var Avatar = /* @__PURE__ */(0,_plugin_vue_export_helper_cc2b3d55_js__WEBPACK_IMPORTED_MODULE_4__._)(_sfc_main, [["render", _sfc_render]]);


/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/_es/_plugin-vue_export-helper-cc2b3d55.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/_es/_plugin-vue_export-helper-cc2b3d55.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ _export_sfc; }
/* harmony export */ });
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");


var _export_sfc = function _export_sfc(sfc, props) {
  var target = sfc.__vccOpts || sfc;
  var _iterator = (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(props),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_step.value, 2),
        key = _step$value[0],
        val = _step$value[1];
      target[key] = val;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return target;
};


/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/_es/component-25dcca32.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/_es/component-25dcca32.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createComponent; }
/* harmony export */ });
/* unused harmony exports T, a, b, d, e, f, g, h, i, j, m, p */
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale/lang */ "./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/index.js");
/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"];
/* provided dependency */ var document = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"];



var TypeOfFun = function TypeOfFun(value) {
  if (null === value) {
    return "null";
  }
  var type = (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if ("undefined" === type || "string" === type) {
    return type;
  }
  var typeString = toString.call(value);
  switch (typeString) {
    case "[object Array]":
      return "array";
    case "[object Date]":
      return "date";
    case "[object Boolean]":
      return "boolean";
    case "[object Number]":
      return "number";
    case "[object Function]":
      return "function";
    case "[object RegExp]":
      return "regexp";
    case "[object Object]":
      if (void 0 !== value.nodeType) {
        if (3 == value.nodeType) {
          return /\S/.test(value.nodeValue) ? "textnode" : "whitespace";
        } else {
          return "element";
        }
      } else {
        return "object";
      }
    default:
      return "unknow";
  }
};
var isArray = Array.isArray;
var isDate = function isDate(val) {
  return val instanceof Date;
};
var isFunction = function isFunction(val) {
  return typeof val === "function";
};
var isObject = function isObject(val) {
  return val !== null && (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(val) === "object";
};
var isPromise = function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
var getPropByPath = function getPropByPath(obj, keyPath) {
  try {
    return keyPath.split(".").reduce(function (prev, curr) {
      return prev[curr];
    }, obj);
  } catch (error) {
    return "";
  }
};
var floatData = function floatData(format, dataOp, mapOps) {
  var mergeFormat = Object.assign({}, format);
  var mergeMapOps = Object.assign({}, mapOps);
  if (Object.keys(dataOp).length > 0) {
    Object.keys(mergeFormat).forEach(function (keys) {
      if (mergeMapOps.hasOwnProperty(keys)) {
        var tof = TypeOfFun(mergeMapOps[keys]);
        if (tof == "function") {
          mergeFormat[keys] = mergeMapOps[keys](dataOp);
        }
        if (tof == "string") {
          mergeFormat[keys] = dataOp[mergeMapOps[keys]];
        }
      } else {
        if (dataOp[keys]) mergeFormat[keys] = dataOp[keys];
      }
    });
    return mergeFormat;
  }
  return format;
};
function myFixed(num) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (Object.is(parseFloat(num), NaN)) {
    return console.log("\u4F20\u5165\u7684\u503C\uFF1A".concat(num, "\u4E0D\u662F\u4E00\u4E2A\u6570\u5B57"));
  }
  num = parseFloat(num);
  return (Math.round((num + Number.EPSILON) * Math.pow(10, digit)) / Math.pow(10, digit)).toFixed(digit);
}
function preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    event.stopPropagation();
  }
}
var padZero = function padZero(num) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  num += "";
  while (num.length < length) {
    num = "0" + num;
  }
  return num.toString();
};
var clamp = function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
};
var getScrollTopRoot = function getScrollTopRoot() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};
function createComponent(name) {
  var componentName = "nut-" + name;
  return {
    componentName: componentName,
    translate: function translate(keyPath) {
      var languages = _locale_lang__WEBPACK_IMPORTED_MODULE_2__["default"].languages();
      var text = getPropByPath(languages, "".concat(name.replace("-", ""), ".").concat(keyPath)) || getPropByPath(languages, keyPath);
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return isFunction(text) ? text.apply(void 0, args) : text;
    },
    create: function create(_component) {
      _component.baseName = name;
      _component.name = componentName;
      _component.install = function (vue) {
        vue.component(_component.name, _component);
      };
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(_component);
    },
    createDemo: function createDemo(_component) {
      _component.baseName = name;
      _component.name = "demo-" + name;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(_component);
    }
  };
}


/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/baseLang-0bdc6353.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/baseLang-0bdc6353.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");


var s = /*#__PURE__*/(0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function s() {
  (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, s);
});


/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/en-US.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/en-US.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _baseLang_0bdc6353_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./baseLang-0bdc6353.js */ "./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/baseLang-0bdc6353.js");






var d = Object.defineProperty;
var s = function s(t, a, o) {
  return a in t ? d(t, a, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
  }) : t[a] = o;
};
var e = function e(t, a, o) {
  return s(t, (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a) != "symbol" ? a + "" : a, o), o;
};

var u = /*#__PURE__*/function (_i) {
  (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_1__["default"])(u, _i);
  var _super = (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(u);
  function u() {
    var _this;
    (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, u);
    _this = _super.apply(this, arguments);
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "save", "Save");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "confirm", "Confirm");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "cancel", "Cancel");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "done", "Done");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "noData", "No Data");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "placeholder", "Placeholder");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "select", "Select");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "video", {
      errorTip: "Error Tip",
      clickRetry: "Click Retry"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fixednav", {
      activeText: "Close Nav",
      unActiveText: "Open Nav"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "pagination", {
      prev: "Previous",
      next: "Next"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "calendaritem", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: function monthTitle(o, r) {
        return "".concat(o, "/").concat(r);
      },
      today: "Today"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "shortpassword", {
      title: "Please input a password",
      desc: "Verify",
      tips: "Forget password"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "uploader", {
      ready: "Ready",
      readyUpload: "Ready to upload",
      waitingUpload: "Waiting for upload",
      uploading: "Uploading",
      success: "Upload successful",
      error: "Upload failed"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "countdown", {
      day: " Day ",
      hour: " Hour ",
      minute: " Minute ",
      second: " Second "
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "address", {
      selectRegion: "Select Region",
      deliveryTo: "Delivery To",
      chooseAnotherAddress: "Choose Another Address"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "signature", {
      reSign: "Re Sign",
      unSupportTpl: "Sorry, the current browser doesn't support canvas, so we can't use this control!"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "ecard", {
      chooseText: "Select",
      otherValueText: "Other Value",
      placeholder: "Placeholder"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "timeselect", {
      pickupTime: "Pickup Time"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "sku", {
      buyNow: "Buy Now",
      buyNumber: "Buy Number",
      addToCart: "Add to Cart"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "skuheader", {
      skuId: "Sku Number"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addresslist", {
      addAddress: "Add New Address",
      default: "default"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "comment", {
      complaintsText: "I have a complaint",
      additionalReview: function additionalReview(o) {
        return "Review after ".concat(o, " days of purchase");
      },
      additionalImages: function additionalImages(o) {
        return "There are ".concat(o, " follow-up comments");
      }
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "infiniteloading", {
      loading: "Loading...",
      pullTxt: "Loose to refresh",
      loadMoreTxt: "Oops, this is the bottom"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "datepicker", {
      year: "Year",
      month: "Month",
      day: "Day",
      hour: "Hour",
      min: "Minute",
      seconds: "Second"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "audiooperate", {
      back: "Back",
      start: "Start",
      pause: "Pause",
      forward: "Forward",
      mute: "Mute"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "pullrefresh", {
      pulling: "Pull to refresh...",
      loosing: "Loose to refresh...",
      loading: "Loading..."
    });
    return _this;
  }
  return (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(u);
}(_baseLang_0bdc6353_js__WEBPACK_IMPORTED_MODULE_6__.B);


/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ b; }
/* harmony export */ });
/* unused harmony export Locale */
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _zh_CN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zh-CN.js */ "./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/zh-CN.js");
/* harmony import */ var _en_US_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US.js */ "./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/en-US.js");



var u = Object.defineProperty;
var a = function a(r, t, e) {
  return t in r ? u(r, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
  }) : r[t] = e;
};
var o = function o(r, t, e) {
  return a(r, (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) != "symbol" ? t + "" : t, e), e;
};




var f = function f(r) {
    return r !== null && (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) == "object";
  },
  n = function n(r, t) {
    return Object.keys(t).forEach(function (e) {
      var c = r[e],
        i = t[e];
      f(c) && f(i) ? n(c, i) : r[e] = i;
    }), r;
  },
  s = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
    "zh-CN": new _zh_CN_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
    "en-US": new _en_US_js__WEBPACK_IMPORTED_MODULE_3__["default"]()
  });
var b = /*#__PURE__*/function () {
  function b() {
    (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, b);
  }
  (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(b, null, [{
    key: "languages",
    value: function languages() {
      return s[this.currentLang.value];
    }
  }, {
    key: "use",
    value: function use(t, e) {
      e && (s[t] = new e()), this.currentLang.value = t;
    }
  }, {
    key: "merge",
    value: function merge(t, e) {
      e && (s[t] ? n(s[t], e) : this.use(t, e));
    }
  }]);
  return b;
}();
o(b, "currentLang", (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("zh-CN"));


/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/zh-CN.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/zh-CN.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _baseLang_0bdc6353_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./baseLang-0bdc6353.js */ "./node_modules/@nutui/nutui-taro/dist/packages/locale/lang/baseLang-0bdc6353.js");






var r = Object.defineProperty;
var s = function s(d, t, a) {
  return t in d ? r(d, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
  }) : d[t] = a;
};
var e = function e(d, t, a) {
  return s(d, (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) != "symbol" ? t + "" : t, a), a;
};

var c = /*#__PURE__*/function (_i) {
  (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_1__["default"])(c, _i);
  var _super = (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(c);
  function c() {
    var _this;
    (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, c);
    _this = _super.apply(this, arguments);
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "save", "保存");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "confirm", "确认");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "cancel", "取消");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "done", "完成");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "noData", "暂无数据");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "placeholder", "请输入");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "select", "请选择");
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "video", {
      errorTip: "视频加载失败",
      clickRetry: "点击重试"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fixednav", {
      activeText: "收起导航",
      unActiveText: "快速导航"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "pagination", {
      prev: "上一页",
      next: "下一页"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "calendaritem", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: function monthTitle(a, o) {
        return "".concat(a, "\u5E74").concat(o, "\u6708");
      },
      today: "今天"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "shortpassword", {
      title: "请输入密码",
      desc: "您使用了虚拟资产，请进行验证",
      tips: "忘记密码"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "uploader", {
      ready: "准备完成",
      readyUpload: "准备上传",
      waitingUpload: "等待上传",
      uploading: "上传中",
      success: "上传成功",
      error: "上传失败"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "countdown", {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "address", {
      selectRegion: "请选择所在地区",
      deliveryTo: "配送至",
      chooseAnotherAddress: "选择其他地址"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "signature", {
      reSign: "重签",
      unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "ecard", {
      chooseText: "请选择电子卡面值",
      otherValueText: "其他面值",
      placeholder: "请输入1-5000整数"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "timeselect", {
      pickupTime: "取件时间"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "sku", {
      buyNow: "立即购买",
      buyNumber: "购买数量",
      addToCart: "加入购物车"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "skuheader", {
      skuId: "商品编号"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addresslist", {
      addAddress: "新建地址",
      default: "默认"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "comment", {
      complaintsText: "我要投诉",
      additionalReview: function additionalReview(a) {
        return "\u8D2D\u4E70".concat(a, "\u5929\u540E\u8FFD\u8BC4");
      },
      additionalImages: function additionalImages(a) {
        return "".concat(a, "\u5F20\u8FFD\u8BC4\u56FE\u7247");
      }
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "infiniteloading", {
      loading: "加载中...",
      pullTxt: "松开刷新",
      loadMoreTxt: "哎呀，这里是底部了啦"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "datepicker", {
      year: "年",
      month: "月",
      day: "日",
      hour: "时",
      min: "分",
      seconds: "秒"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "audiooperate", {
      back: "倒退",
      start: "开始",
      pause: "暂停",
      forward: "快进",
      mute: "静音"
    });
    e((0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "pullrefresh", {
      pulling: "下拉刷新",
      loosing: "释放刷新",
      loading: "加载中..."
    });
    return _this;
  }
  return (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(c);
}(_baseLang_0bdc6353_js__WEBPACK_IMPORTED_MODULE_6__.B);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./src/app.ts":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./src/app.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nutui/nutui-taro */ "./node_modules/@nutui/nutui-taro/dist/packages/avatar/index.mjs");
/* harmony import */ var _locales_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales.vue3 */ "./src/locales.vue3.ts");
/* harmony import */ var _components_demo_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/demo-block */ "./src/components/demo-block/index.vue");
/* harmony import */ var _components_demo_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/demo-section */ "./src/components/demo-section/index.vue");
//import Vue from 'vue'
//import DemoBlock from './components/demo-block'
//import DemoSection from './components/demo-section'
//import './locales'
//import './app.less'

//const App = {
//  onShow (options) {
//  },
//  render(h) {
//    // this.$slots.default 是将要会渲染的页面
//    return h('block', this.$slots.default)
//  }
//}

//Vue.component(DemoBlock.name, DemoBlock)
//Vue.component(DemoSection.name, DemoSection)

//export default App


//import Taro from '@tarojs/taro'

//import { Button } from 'vant'




// app.css
// html4
//import '@tarojs/taro/html.css';
//import './taro-h5.html.css';
//import './app.scss'


//import './app.less'

var App = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
  onShow: function onShow(options) {} // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(_nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_4__.Avatar);
App.mixin(_locales_vue3__WEBPACK_IMPORTED_MODULE_1__.mixinLocal);

//App.component(Button.name, Button)
App.component(_components_demo_block__WEBPACK_IMPORTED_MODULE_2__["default"].name, _components_demo_block__WEBPACK_IMPORTED_MODULE_2__["default"]);
App.component(_components_demo_section__WEBPACK_IMPORTED_MODULE_3__["default"].name, _components_demo_section__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/demo-block/index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/demo-block/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'demo-block',
  props: {
    card: Boolean,
    title: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/demo-section/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/demo-section/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'demo-section'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/demo-block/index.vue?vue&type=template&id=7c67ce14":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/demo-block/index.vue?vue&type=template&id=7c67ce14 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  class: "van-doc-demo-block"
};
var _hoisted_2 = {
  key: 0,
  class: "van-doc-demo-block__title"
};
var _hoisted_3 = {
  key: 1,
  class: "van-doc-demo-block__card"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$props.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h2", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.card ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    key: 2
  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/demo-section/index.vue?vue&type=template&id=1ac899ce":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/demo-section/index.vue?vue&type=template&id=1ac899ce ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  class: "van-doc-demo-section"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]);
}

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-html/dist/runtime */ "./node_modules/@tarojs/plugin-html/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_plugin_framework_vue3_dist_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/plugin-framework-vue3/dist/runtime */ "./node_modules/@tarojs/plugin-framework-vue3/dist/runtime.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_app_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./app.ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./src/app.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_6__);











var config = {"pages":["pages/index/index","pages/button/index","pages/cell/index","pages/icon/index","pages/image/index","pages/layout/index","pages/popup/index","pages/style/index","pages/toast/index","pages/badge/index","pages/collapse/index","pages/countdown/index","pages/divider/index","pages/empty/index","pages/notice-bar/index","pages/skeleton/index","pages/steps/index","pages/tag/index","pages/grid/index","pages/nav-bar/index","pages/pagination/index","pages/sidebar/index","pages/tab/index","pages/tabbar/index","pages/tree-select/index","pages/cascader/index","pages/action-sheet/index","pages/dialog/index","pages/loading/index","pages/overlay/index","pages/share-sheet/index","pages/rate/index","pages/checkbox/index","pages/field/index","pages/form/index","pages/radio/index","pages/search/index","pages/stepper/index","pages/number-keyboard/index","pages/password-input/index","pages/address-list/index","pages/card/index","pages/contact-card/index","pages/contact-list/index","pages/submit-bar/index","pages/coupon/index","pages/wx-picker/index","pages/picker/index","pages/field-slot/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_vue3_dist_runtime__WEBPACK_IMPORTED_MODULE_3__.createVue3App)(_node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_app_ts__WEBPACK_IMPORTED_MODULE_5__["default"], vue__WEBPACK_IMPORTED_MODULE_6__.h, config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.initPxTransform)({
  designWidth: function designWidth(input) {
        var _input_file;
        // 配置 NutUI 375 尺寸
        if ((input === null || input === void 0 ? void 0 : (_input_file = input.file) === null || _input_file === void 0 ? void 0 : _input_file.replace(/\\+/g, "/").indexOf("@nutui")) > -1) {
            return 375;
        }
        // 全局使用 Taro 默认的 750 尺寸
        //return 750
        return 375;
    },
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/locales.vue3.ts":
/*!*****************************!*\
  !*** ./src/locales.vue3.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mixinLocal": function() { return /* binding */ mixinLocal; }
/* harmony export */ });
/* unused harmony export camelize */
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/locale/index.mjs");

//import Vue from 'vue';

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    var _result$key;
    result = (_result$key = result[key]) !== null && _result$key !== void 0 ? _result$key : '';
  });
  return result;
}
var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

// Locale.add({
//   'en-US': enUS,
// });

var demoUid = 0;

// helper for demo locales
//Vue.mixin({
//  computed: {
//    t() {
//      const { name } = this.$options;
//      const lang = this.$vantLang;
//      const prefix = name ? camelize(name) + '.' : '';
//      const messages = this.$vantMessages[lang];

//      return (path, ...args) => {
//        const message = get(messages, prefix + path) || get(messages, path);
//        return typeof message === 'function' ? message(...args) : message;
//      };
//    },

//    isWeapp() {
//      return false
//    },
//  },

//  beforeCreate() {
//    if (!this.$options.name) {
//      this.$options.name = `demo-${demoUid++}`;
//    }

//    const { i18n, name } = this.$options;

//    if (i18n && name) {
//      const locales = {};
//      const camelizedName = camelize(name);

//      Object.keys(i18n).forEach((key) => {
//        locales[key] = { [camelizedName]: i18n[key] };
//      });

//      Locale.add(locales);
//    }
//  },
//});

// 升级vue3
//const currentLang = useCurrentLang();

var mixinLocal = {
  computed: {
    t: function t() {
      var name = this.$options.name;
      //const lang = this.$vantLang;
      var prefix = name ? camelize(name) + '.' : '';
      //const messages = this.$vantMessages[lang];
      var messages = vant__WEBPACK_IMPORTED_MODULE_0__.Locale.messages();
      return function (path) {
        var message = get(messages, prefix + path) || get(messages, path);
        //console.log('i18n =>', path, message)
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return typeof message === 'function' ? message.apply(void 0, args) : message;
      };
    },
    isWeapp: function isWeapp() {
      return false;
    }
  },
  beforeCreate: function beforeCreate() {
    if (!this.$options.name) {
      this.$options.name = "demo-".concat(demoUid++);
    }
    var _this$$options = this.$options,
      i18n = _this$$options.i18n,
      name = _this$$options.name;
    if (i18n && name) {
      var locales = {};
      var camelizedName = camelize(name);
      Object.keys(i18n).forEach(function (key) {
        locales[key] = (0,E_VueWxApp_taro_vant4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, camelizedName, i18n[key]);
      });
      vant__WEBPACK_IMPORTED_MODULE_0__.Locale.add(locales);
    }
  }
};

// add some basic locale messages
vant__WEBPACK_IMPORTED_MODULE_0__.Locale.add({
  'zh-CN': {
    add: '增加',
    decrease: '减少',
    red: '红色',
    orange: '橙色',
    yellow: '黄色',
    purple: '紫色',
    tab: '标签',
    tag: '标签',
    desc: '描述信息',
    back: '返回',
    title: '标题',
    status: '状态',
    button: '按钮',
    option: '选项',
    search: '搜索',
    content: '内容',
    custom: '自定义',
    username: '用户名',
    password: '密码',
    disabled: '禁用状态',
    uneditable: '不可编辑',
    basicUsage: '基础用法',
    advancedUsage: '高级用法',
    loadingStatus: '加载状态',
    usernamePlaceholder: '请输入用户名',
    passwordPlaceholder: '请输入密码'
  },
  'en-US': {
    add: 'Add',
    decrease: 'Decrease',
    red: 'Red',
    orange: 'Orange',
    yellow: 'Yellow',
    purple: 'Purple',
    tab: 'Tab',
    tag: 'Tag',
    desc: 'Description',
    back: 'Back',
    title: 'Title',
    status: 'Status',
    button: 'Button',
    option: 'Option',
    search: 'Search',
    content: 'Content',
    custom: 'Custom',
    username: 'Username',
    password: 'Password',
    loadingStatus: 'Loading',
    disabled: 'Disabled',
    uneditable: 'Uneditable',
    basicUsage: 'Basic Usage',
    advancedUsage: 'Advanced Usage',
    usernamePlaceholder: 'Username',
    passwordPlaceholder: 'Password'
  }
});

//const i18n = Locale.messages()
//Object.keys(i18n).forEach((key) => {
//  //locales[key] = { [camelizedName]: i18n[key] };
//  console.log(`${key}=>${i18n[key]}`)
//});

/***/ }),

/***/ "./src/components/demo-block/index.vue":
/*!*********************************************!*\
  !*** ./src/components/demo-block/index.vue ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _index_vue_vue_type_template_id_7c67ce14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7c67ce14 */ "./src/components/demo-block/index.vue?vue&type=template&id=7c67ce14");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/components/demo-block/index.vue?vue&type=script&lang=js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,E_VueWxApp_taro_vant4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_7c67ce14__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/demo-block/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/demo-section/index.vue":
/*!***********************************************!*\
  !*** ./src/components/demo-section/index.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _index_vue_vue_type_template_id_1ac899ce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1ac899ce */ "./src/components/demo-section/index.vue?vue&type=template&id=1ac899ce");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/components/demo-section/index.vue?vue&type=script&lang=js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,E_VueWxApp_taro_vant4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_1ac899ce__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/demo-section/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/demo-block/index.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/components/demo-block/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/demo-block/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/demo-section/index.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/components/demo-section/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/demo-section/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/demo-block/index.vue?vue&type=template&id=7c67ce14":
/*!***************************************************************************!*\
  !*** ./src/components/demo-block/index.vue?vue&type=template&id=7c67ce14 ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_7c67ce14__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_7c67ce14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=7c67ce14 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/demo-block/index.vue?vue&type=template&id=7c67ce14");


/***/ }),

/***/ "./src/components/demo-section/index.vue?vue&type=template&id=1ac899ce":
/*!*****************************************************************************!*\
  !*** ./src/components/demo-section/index.vue?vue&type=template&id=1ac899ce ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_1ac899ce__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_1ac899ce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=1ac899ce */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/demo-section/index.vue?vue&type=template&id=1ac899ce");


/***/ }),

/***/ "./node_modules/@nutui/nutui-taro/dist/packages/avatar/index.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@nutui/nutui-taro/dist/packages/avatar/index.mjs ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Avatar": function() { return /* binding */ Avatar; }
/* harmony export */ });
/* harmony import */ var _es_Avatar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_es/Avatar.js */ "./node_modules/@nutui/nutui-taro/dist/packages/_es/Avatar.js");

const treeshaking = (t) => t;
const Avatar = treeshaking(_es_Avatar_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/app.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;
//# sourceMappingURL=app.js.map