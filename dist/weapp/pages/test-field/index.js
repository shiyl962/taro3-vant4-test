"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/test-field/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/test-field/index.vue":
/*!**************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/test-field/index.vue ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _index_vue_vue_type_template_id_9efa4374__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9efa4374 */ "./src/pages/test-field/index.vue?vue&type=template&id=9efa4374");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/pages/test-field/index.vue?vue&type=script&lang=js");
/* harmony import */ var E_VueWxApp_taro_vant4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_VueWxApp_taro_vant4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_9efa4374__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/pages/test-field/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/test-field/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/test-field/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/cell-group/index.mjs");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/field/index.mjs");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'van-cell-group': vant__WEBPACK_IMPORTED_MODULE_0__.CellGroup,
    'van-field': vant__WEBPACK_IMPORTED_MODULE_1__.Field
  },
  data: function data() {
    return {
      value: '',
      count: 0,
      value1: ''
    };
  },
  methods: {
    testRef: function testRef(btn_num) {
      console.log('testRef =>', this.count++, 'btn_num =>', btn_num);
      if (btn_num == 1) {
        this.value = "test ref: ".concat(this.count);
      } else {
        this.value1 = "test ref: ".concat(this.count);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/test-field/index.vue?vue&type=template&id=9efa4374":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/test-field/index.vue?vue&type=template&id=9efa4374 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_van_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("van-field");
  var _component_van_cell_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("van-cell-group");
  var _component_demo_block = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("demo-block");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_demo_block, {
    title: "测试1：v-model绑定报错"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_cell_group, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_cell_group, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_field, {
                modelValue: $data.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                  return $data.value = $event;
                }),
                label: "文本1"
              }, null, 8 /* PROPS */, ["modelValue"])];
            }),
            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "primary",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $options.testRef(1);
        })
      }, "测试按钮1")];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_demo_block, {
    title: "测试2：v-model同时绑定Taro组件不报错"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_cell_group, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_van_field, {
            modelValue: $data.value1,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $data.value1 = $event;
            }),
            label: "文本2"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        placeholder: "这个是Taro组件",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.value1 = $event;
        }),
        focus: true
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.value1]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "primary",
        onClick: _cache[4] || (_cache[4] = function ($event) {
          return $options.testRef(2);
        })
      }, "测试按钮2")];
    }),
    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./src/pages/test-field/index.vue":
/*!****************************************!*\
  !*** ./src/pages/test-field/index.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/test-field/index.vue");


var config = {"navigationBarTitleText":"Test vant-field"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/test-field/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/pages/test-field/index.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/pages/test-field/index.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/test-field/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/pages/test-field/index.vue?vue&type=template&id=9efa4374":
/*!**********************************************************************!*\
  !*** ./src/pages/test-field/index.vue?vue&type=template&id=9efa4374 ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_9efa4374__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_9efa4374__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=9efa4374 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/test-field/index.vue?vue&type=template&id=9efa4374");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/pages/test-field/index.vue"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map