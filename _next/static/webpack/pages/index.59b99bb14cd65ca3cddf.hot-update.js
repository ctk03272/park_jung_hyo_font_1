webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/store */ \"./common/store.js\");\nvar _class, _temp;\n\n\n\n\n\n\n\n\n\n\nlet Index = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"observer\"])(_class = (_temp = class Index extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    this.handleChange = (type, e) => {\n      if (type == 'input_content') {\n        this.setState({\n          input_content: e.target.value\n        });\n      }\n    };\n\n    this.state = {\n      input_content: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz                                        \"EARTH\" Designed by Park Jung Hyo. in Seoul / South Korea. Engined and Supported By Studio Seon / OFFICE 201c (OH SEONG JIN)',\n      footerGap: 200,\n      fontSizeState: 50,\n      fontWeightState: 300,\n      fontLetterSpacingState: 0,\n      fontLineSpacingState: 0.85,\n      fontColorState: '#000',\n      fontState: null,\n      isFontSizeAuto: false,\n      isFontWeightAuto: false,\n      isFontLetterSpacingAuto: false,\n      isFontLineSpacingAuto: false\n    };\n  }\n\n  render() {\n    const prefix = false ? undefined : '';\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      prefix: prefix\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \" \",\n      style: {\n        width: '100%',\n        marginTop: 200,\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'center',\n        flexDirection: 'column'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"font_display_container\",\n      style: {\n        marginTop: 40\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"font_display_area\",\n      style: {\n        fontSize: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontSizeState,\n        fontWeight: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontWeightState\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n      className: \"input_content\",\n      placeholder: \"Font Contents\",\n      name: \"input_content\",\n      value: this.state.input_content,\n      style: {\n        fontSize: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontSizeState,\n        fontWeight: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontWeightState,\n        color: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontColorState,\n        letterSpacing: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontLetterSpacingState,\n        lineHeight: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontLineSpacingState,\n        wordWrap: 'wrap',\n        whiteSpace: 'pre-wrap',\n        fontFamily: 'Earth_FinalGX',\n        overflow: 'hidden'\n      },\n      onChange: e => {\n        this.handleChange('input_content', e);\n      }\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        height: 400\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      prefix: prefix,\n      path: '/',\n      footerGap: this.state.footerGap\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"style\", {\n      jsx: \"true\",\n      global: \"true\",\n      suppressHydrationWarning: true\n    }, `\n                .font_value {\n                    width: calc(100% - 130px);\n                }\n                .auto_row {\n                    width: 100%;\n                    height: 40px;\n                    display: inline-flex;\n                    align-items:center;\n                }\n                .auto_buttton {\n                    width: 100px;\n                    height: 35px;\n                    font-size: 14px;\n                    border: 1px solid #000;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    \n\n                }\n                \n                    div.left {\n                    width: 50%;\n                    float: left;\n                    box-sizing: border-box;\n                    }\n                    div.right {\n                    width: 50%;\n                    float: right;\n                    box-sizing: border-box;\n                    }\n                    .font_display_control_label {\n                        height: 50px;\n                        color : #0a0a0a;\n                        width: 100%;\n                        align-items: center;\n                        justify-content: flex-start;\n                        white-space : nowrap;\n                    }\n                    .input_wrapper {\n                        width: 100%;\n                        height: 100%;\n                        border: solid 1px #eaeaea;\n                        background-color: #ffffff;\n                        display: flex;\n                        align-items: center;\n                    }\n                    .input_content {\n                        width : 100%;\n                        height: 100%;\n                        margin-left: 16px;\n                        resize: none;\n                        border : none;\n                        outline : none;\n                    }\n                    .font_display_container {\n                        width: calc(100% - 40px);\n                        display: flex;\n                        align-self: center;\n                        align-items: center;\n                        justify-content: center;\n                        overflow : hidden;\n                    }\n\n                    .font_controller_area {\n                        width: 300px;\n                        min-height: 600px;\n                        border: 1px solid #aaa;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        \n                    }\n\n                    .font_display_area {\n                        width: calc(100% - 40px);\n                        min-height: 600px;\n                        border: 1px solid #aaa;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding : 10px;\n                        overflow : hidden;\n                    }\n                    .font_display_inner {\n\n                        width: calc(100% - 40px);\n                        height: calc(100% - 40px);\n                        border: 1px solid #aaa;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding : 20px;\n                    }\n                    .font_input_area {\n                        width: calc(100% - 20px);\n                        height: calc(100% - 20px);\n                        display: flex;\n                    }\n                    /* Extra small devices (phones, 600px and down) */\n                    @media only screen and (max-width: 600px) {\n                    /* ... */\n                        .font_display_area {\n                            flex-direction: column;\n                        }\n                        .color_container_responsive_margin {\n                            margin-top: 100px;\n                        }\n                    }\n                    /* Small devices (portrait tablets and large phones, 600px and up) */\n                    @media only screen and (min-width: 600px) {\n                    /* ... */\n                    .font_display_area {\n                        flex-direction: column;\n                    }\n                    .color_container_responsive_margin {\n                        margin-top: 100px;\n                    }\n                    }\n                    /* Medium devices (landscape tablets, 768px and up) */\n                    @media only screen and (min-width: 768px) {\n                    /* ... */\n                    .font_display_area {\n                        flex-direction: column;\n                    }\n                    .color_container_responsive_margin {\n                        margin-top: 100px;\n                    }\n                    }\n                    /* Large devices (laptops/desktops, 992px and up) */\n                    @media only screen and (min-width: 992px) {\n                    /* ... */\n                    .font_display_area {\n                        flex-direction: row;\n                    }\n                    .color_container_responsive_margin {\n                        margin-top: 0px;\n                    }\n                    }\n                    /* Extra large devices (large laptops and desktops, 1200px and up) */\n                    @media only screen and (min-width: 1200px) {\n                    /* ... */\n                    .font_display_area {\n                        flex-direction: row;\n                    }\n                    .color_container_responsive_margin {\n                        margin-top: 0px;\n                    }\n                    }\n                `));\n  }\n\n}, _temp)) || _class;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsIm9ic2VydmVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsInR5cGUiLCJlIiwic2V0U3RhdGUiLCJpbnB1dF9jb250ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0ZSIsImZvb3RlckdhcCIsImZvbnRTaXplU3RhdGUiLCJmb250V2VpZ2h0U3RhdGUiLCJmb250TGV0dGVyU3BhY2luZ1N0YXRlIiwiZm9udExpbmVTcGFjaW5nU3RhdGUiLCJmb250Q29sb3JTdGF0ZSIsImZvbnRTdGF0ZSIsImlzRm9udFNpemVBdXRvIiwiaXNGb250V2VpZ2h0QXV0byIsImlzRm9udExldHRlclNwYWNpbmdBdXRvIiwiaXNGb250TGluZVNwYWNpbmdBdXRvIiwicmVuZGVyIiwicHJlZml4Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsImZvbnRTaXplIiwic3RvcmUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJsZXR0ZXJTcGFjaW5nIiwibGluZUhlaWdodCIsIndvcmRXcmFwIiwid2hpdGVTcGFjZSIsImZvbnRGYW1pbHkiLCJvdmVyZmxvdyIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFLTUEsSyxHQURMQywyRCxtQkFBRCxNQUNNRCxLQUROLFNBQ29CRSwrQ0FEcEIsQ0FDOEI7QUFFMUJDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjs7QUFEZSxTQXFCbkJDLFlBckJtQixHQXFCSixDQUFDQyxJQUFELEVBQVFDLENBQVIsS0FBYztBQUN6QixVQUFJRCxJQUFJLElBQUksZUFBWixFQUE2QjtBQUN6QixhQUFLRSxRQUFM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YixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9ic2VydmFibGUsIHRvSlMgfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vY29tbW9uL3N0b3JlXCI7XG5cblxuXG5Ab2JzZXJ2ZXJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlucHV0X2NvbnRlbnQgOiAnQWFCYkNjRGRFZUZmR2dIaElpSmpLa0xsTW1Obk9vUHBRcVJyU3NUdFV1VnZXd1h4WXlaeiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVBUlRIXCIgRGVzaWduZWQgYnkgUGFyayBKdW5nIEh5by4gaW4gU2VvdWwgLyBTb3V0aCBLb3JlYS4gRW5naW5lZCBhbmQgU3VwcG9ydGVkIEJ5IFN0dWRpbyBTZW9uIC8gT0ZGSUNFIDIwMWMgKE9IIFNFT05HIEpJTiknLFxuXG4gICAgICAgICAgICBmb290ZXJHYXAgOiAyMDAsIFxuXG4gICAgICAgICAgICBmb250U2l6ZVN0YXRlIDogNTAsXG4gICAgICAgICAgICBmb250V2VpZ2h0U3RhdGU6IDMwMCxcbiAgICAgICAgICAgIGZvbnRMZXR0ZXJTcGFjaW5nU3RhdGUgOiAwLFxuICAgICAgICAgICAgZm9udExpbmVTcGFjaW5nU3RhdGU6IDAuODUsXG4gICAgICAgICAgICBmb250Q29sb3JTdGF0ZSA6ICcjMDAwJyxcbiAgICAgICAgICAgIGZvbnRTdGF0ZSA6IG51bGwsXG5cbiAgICAgICAgICAgIGlzRm9udFNpemVBdXRvIDogZmFsc2UsXG4gICAgICAgICAgICBpc0ZvbnRXZWlnaHRBdXRvIDogZmFsc2UsXG4gICAgICAgICAgICBpc0ZvbnRMZXR0ZXJTcGFjaW5nQXV0byA6IGZhbHNlLFxuICAgICAgICAgICAgaXNGb250TGluZVNwYWNpbmdBdXRvIDogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlID0gKHR5cGUgLCBlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlID09ICdpbnB1dF9jb250ZW50Jykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW5wdXRfY29udGVudCA6ICBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBwcmVmaXggPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vZW5kZWF2b3I1LmdpdGh1Yi5pby9wYXJrX2p1bmdfaHlvX2ZvbnRfMScgOiAnJztcbiAgICBcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXIgcHJlZml4PXtwcmVmaXh9PjwvSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpblRvcDogMjAwLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250X2Rpc3BsYXlfY29udGFpbmVyXCIgIHN0eWxlPXt7ICBtYXJnaW5Ub3A6IDQwLCB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250X2Rpc3BsYXlfYXJlYVwiIHN0eWxlPXt7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZSA6IHN0b3JlLmZvbnRTaXplU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogc3RvcmUuZm9udFdlaWdodFN0YXRlLH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRfY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZvbnQgQ29udGVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImlucHV0X2NvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRfY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZSA6IHN0b3JlLmZvbnRTaXplU3RhdGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHN0b3JlLmZvbnRXZWlnaHRTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogc3RvcmUuZm9udENvbG9yU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogc3RvcmUuZm9udExldHRlclNwYWNpbmdTdGF0ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogc3RvcmUuZm9udExpbmVTcGFjaW5nU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZFdyYXA6ICd3cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdFYXJ0aF9GaW5hbEdYJyAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cgOiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCdpbnB1dF9jb250ZW50JywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA0MDAgfX0+PC9kaXY+XG4gICAgICAgICAgICA8Rm9vdGVyIHByZWZpeD17cHJlZml4fSBwYXRoPXsnLyd9IGZvb3RlckdhcD17dGhpcy5zdGF0ZS5mb290ZXJHYXB9Lz5cblxuICAgICAgICAgICAgPHN0eWxlIFxuICAgICAgICAgICAganN4PVwidHJ1ZVwiXG4gICAgICAgICAgICBnbG9iYWw9XCJ0cnVlXCJcbiAgICAgICAgICAgIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZz5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5mb250X3ZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEzMHB4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmF1dG9fcm93IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmF1dG9fYnV0dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGl2LmxlZnQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXYucmlnaHQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmZvbnRfZGlzcGxheV9jb250cm9sX2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogIzBhMGEwYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlIDogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbnB1dF93cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2VhZWFlYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW5wdXRfY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlciA6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lIDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZm9udF9kaXNwbGF5X2NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cgOiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9udF9jb250cm9sbGVyX2FyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvbnRfZGlzcGxheV9hcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93IDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mb250X2Rpc3BsYXlfaW5uZXIge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZm9udF9pbnB1dF9hcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogLi4uICovXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9udF9kaXNwbGF5X2FyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY29sb3JfY29udGFpbmVyX3Jlc3BvbnNpdmVfbWFyZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAvKiAuLi4gKi9cbiAgICAgICAgICAgICAgICAgICAgLmZvbnRfZGlzcGxheV9hcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbG9yX2NvbnRhaW5lcl9yZXNwb25zaXZlX21hcmdpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIC4uLiAqL1xuICAgICAgICAgICAgICAgICAgICAuZm9udF9kaXNwbGF5X2FyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29sb3JfY29udGFpbmVyX3Jlc3BvbnNpdmVfbWFyZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIC4uLiAqL1xuICAgICAgICAgICAgICAgICAgICAuZm9udF9kaXNwbGF5X2FyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29sb3JfY29udGFpbmVyX3Jlc3BvbnNpdmVfbWFyZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgICAgICAgICAgICAvKiAuLi4gKi9cbiAgICAgICAgICAgICAgICAgICAgLmZvbnRfZGlzcGxheV9hcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbG9yX2NvbnRhaW5lcl9yZXNwb25zaXZlX21hcmdpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})