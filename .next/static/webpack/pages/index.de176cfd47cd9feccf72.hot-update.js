webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/store */ \"./common/store.js\");\nvar _class;\n\n\n\n\n\n\n\n\n\n\nlet Index = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"observer\"])(_class = class Index extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      input_content: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqestuvwxyz  ',\n      footerGap: 200,\n      fontSizeState: 50,\n      fontWeightState: 300,\n      fontLetterSpacingState: 0,\n      fontLineSpacingState: 0.85,\n      fontColorState: '#000',\n      fontState: null,\n      isFontSizeAuto: false,\n      isFontWeightAuto: false,\n      isFontLetterSpacingAuto: false,\n      isFontLineSpacingAuto: false\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \" \",\n      style: {\n        width: '100%',\n        marginTop: 200,\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'center',\n        flexDirection: 'column'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"font_display_container  max-width-wrapper\",\n      style: {\n        marginTop: 40\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"font_display_area\",\n      style: {\n        fontSize: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontSizeState,\n        fontWeight: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontWeightState\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n      className: \"input_content\",\n      placeholder: \"Font Contents\",\n      name: \"input_content\",\n      value: this.state.input_content,\n      style: {\n        fontSize: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontSizeState,\n        fontWeight: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontWeightState,\n        color: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontColorState,\n        letterSpacing: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontLetterSpacingState,\n        lineHeight: _common_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fontLineSpacingState,\n        wordWrap: 'wrap',\n        whiteSpace: 'pre-wrap',\n        fontFamily: 'Earth_FinalGX'\n      },\n      onChange: e => {\n        this.handleChange('input_content', e);\n      }\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        height: 400\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      path: '/',\n      footerGap: this.state.footerGap\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"style\", {\n      jsx: \"true\",\n      global: \"true\",\n      suppressHydrationWarning: true\n    }, `\n                .font_value {\n                    width: calc(100% - 150px);\n                }\n                .auto_row {\n                    width: 100%;\n                    height: 40px;\n                    display: inline-flex;\n                    align-items:center;\n                }\n                .auto_buttton {\n                    width: 100px;\n                    height: 35px;\n                    font-size: 14px;\n                    border: 1px solid #000;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    \n\n                }\n                \n                    div.left {\n                    width: 50%;\n                    float: left;\n                    box-sizing: border-box;\n                    }\n                    div.right {\n                    width: 50%;\n                    float: right;\n                    box-sizing: border-box;\n                    }\n                    .font_display_control_label {\n                        height: 50px;\n                        color : #0a0a0a;\n                        width: 100%;\n                        align-items: center;\n                        justify-content: flex-start;\n                        white-space : nowrap;\n                    }\n                    .input_wrapper {\n                        width: 100%;\n                        height: 100%;\n                        border: solid 1px #eaeaea;\n                        background-color: #ffffff;\n                        display: flex;\n                        align-items: center;\n                    }\n                    .input_content {\n                        width : 100%;\n                        height: 100%;\n                        min-height: 600px;\n                        margin-left: 16px;\n                        resize: none;\n                        border : none;\n                        outline : none;\n                    }\n                    .font_display_container {\n                        width: calc(100% - 40px);\n                        min-height: 600px;\n                        display: flex;\n                        align-self: center;\n                        align-items: center;\n                        justify-content: center;\n                    }\n\n                    .font_controller_area {\n                        width: 300px;\n                        min-height: 600px;\n                        border: 1px solid #aaa;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        \n                    }\n\n                    .font_display_area {\n                        width: calc(100% - 320px);\n                        min-height: 600px;\n                        border: 1px solid #aaa;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding : 20px;\n                \n                    }\n                    .font_display_inner {\n\n                        width: calc(100% - 40px);\n                        height: calc(100% - 40px);\n                        border: 1px solid #aaa;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding : 20px;\n                    }\n                    .font_input_area {\n                        width: calc(100% - 20px);\n                        height: calc(100% - 20px);\n                        display: flex;\n                    }\n                    /* Extra small devices (phones, 600px and down) */\n                    @media only screen and (max-width: 600px) {\n                    /* ... */\n                        .font_display_area {\n                            flex-direction: column;\n                        }\n                        .color_container_responsive_margin {\n                            margin-top: 100px;\n                        }\n                    }\n                    /* Small devices (portrait tablets and large phones, 600px and up) */\n                    @media only screen and (min-width: 600px) {\n                    /* ... */\n                    .font_display_area {\n                        flex-direction: column;\n                    }\n                    .color_container_responsive_margin {\n                        margin-top: 100px;\n                    }\n                    }\n                    /* Medium devices (landscape tablets, 768px and up) */\n                    @media only screen and (min-width: 768px) {\n                    /* ... */\n                    .font_display_area {\n                        flex-direction: column;\n                    }\n                    .color_container_responsive_margin {\n                        margin-top: 100px;\n                    }\n                    }\n                    /* Large devices (laptops/desktops, 992px and up) */\n                    @media only screen and (min-width: 992px) {\n                    /* ... */\n                    .font_display_area {\n                        flex-direction: row;\n                    }\n                    .color_container_responsive_margin {\n                        margin-top: 0px;\n                    }\n                    }\n                    /* Extra large devices (large laptops and desktops, 1200px and up) */\n                    @media only screen and (min-width: 1200px) {\n                    /* ... */\n                    .font_display_area {\n                        flex-direction: row;\n                    }\n                    .color_container_responsive_margin {\n                        margin-top: 0px;\n                    }\n                    }\n                `));\n  }\n\n}) || _class;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsIm9ic2VydmVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaW5wdXRfY29udGVudCIsImZvb3RlckdhcCIsImZvbnRTaXplU3RhdGUiLCJmb250V2VpZ2h0U3RhdGUiLCJmb250TGV0dGVyU3BhY2luZ1N0YXRlIiwiZm9udExpbmVTcGFjaW5nU3RhdGUiLCJmb250Q29sb3JTdGF0ZSIsImZvbnRTdGF0ZSIsImlzRm9udFNpemVBdXRvIiwiaXNGb250V2VpZ2h0QXV0byIsImlzRm9udExldHRlclNwYWNpbmdBdXRvIiwiaXNGb250TGluZVNwYWNpbmdBdXRvIiwicmVuZGVyIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsImZvbnRTaXplIiwic3RvcmUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJsZXR0ZXJTcGFjaW5nIiwibGluZUhlaWdodCIsIndvcmRXcmFwIiwid2hpdGVTcGFjZSIsImZvbnRGYW1pbHkiLCJlIiwiaGFuZGxlQ2hhbmdlIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUtNQSxLLEdBRExDLDJELFVBQUQsTUFDTUQsS0FETixTQUNvQkUsK0NBRHBCLENBQzhCO0FBRTFCQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQWEsRUFBRyx5REFEUDtBQUdUQyxlQUFTLEVBQUcsR0FISDtBQUtUQyxtQkFBYSxFQUFHLEVBTFA7QUFNVEMscUJBQWUsRUFBRSxHQU5SO0FBT1RDLDRCQUFzQixFQUFHLENBUGhCO0FBUVRDLDBCQUFvQixFQUFFLElBUmI7QUFTVEMsb0JBQWMsRUFBRyxNQVRSO0FBVVRDLGVBQVMsRUFBRyxJQVZIO0FBWVRDLG9CQUFjLEVBQUcsS0FaUjtBQWFUQyxzQkFBZ0IsRUFBRyxLQWJWO0FBY1RDLDZCQUF1QixFQUFHLEtBZGpCO0FBZVRDLDJCQUFxQixFQUFHO0FBZmYsS0FBYjtBQWtCSDs7QUFHREMsUUFBTSxHQUFHO0FBQ0wsd0JBQ0kscUlBQ0EsMkRBQUMsMERBQUQsT0FEQSxlQUVJO0FBQUssZUFBUyxFQUFDLEdBQWY7QUFBbUIsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRSxNQUFUO0FBQWlCQyxpQkFBUyxFQUFFLEdBQTVCO0FBQWlDQyxlQUFPLEVBQUUsTUFBMUM7QUFBa0RDLGtCQUFVLEVBQUUsUUFBOUQ7QUFBd0VDLHNCQUFjLEVBQUUsUUFBeEY7QUFBa0dDLHFCQUFhLEVBQUU7QUFBakg7QUFBMUIsb0JBRUk7QUFBSyxlQUFTLEVBQUMsMkNBQWY7QUFBNEQsV0FBSyxFQUFFO0FBQUdKLGlCQUFTLEVBQUU7QUFBZDtBQUFuRSxvQkFFSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFtQyxXQUFLLEVBQUU7QUFDdENLLGdCQUFRLEVBQUdDLHFEQUFLLENBQUNsQixhQURxQjtBQUV0Q21CLGtCQUFVLEVBQUVELHFEQUFLLENBQUNqQjtBQUZvQjtBQUExQyxvQkFHSTtBQUNRLGVBQVMsRUFBQyxlQURsQjtBQUVRLGlCQUFXLEVBQUMsZUFGcEI7QUFHUSxVQUFJLEVBQUMsZUFIYjtBQUlRLFdBQUssRUFBRSxLQUFLSixLQUFMLENBQVdDLGFBSjFCO0FBS1EsV0FBSyxFQUFFO0FBQ0htQixnQkFBUSxFQUFHQyxxREFBSyxDQUFDbEIsYUFEZDtBQUVIbUIsa0JBQVUsRUFBRUQscURBQUssQ0FBQ2pCLGVBRmY7QUFHSG1CLGFBQUssRUFBRUYscURBQUssQ0FBQ2QsY0FIVjtBQUlIaUIscUJBQWEsRUFBRUgscURBQUssQ0FBQ2hCLHNCQUpsQjtBQUtIb0Isa0JBQVUsRUFBRUoscURBQUssQ0FBQ2Ysb0JBTGY7QUFNSG9CLGdCQUFRLEVBQUUsTUFOUDtBQU9IQyxrQkFBVSxFQUFFLFVBUFQ7QUFRSEMsa0JBQVUsRUFBRTtBQVJULE9BTGY7QUFlUSxjQUFRLEVBQUVDLENBQUMsSUFBSTtBQUNmLGFBQUtDLFlBQUwsQ0FBa0IsZUFBbEIsRUFBbUNELENBQW5DO0FBQ0M7QUFqQlQsTUFISixDQUZKLENBRkosQ0FGSixlQStCQTtBQUFLLFdBQUssRUFBRTtBQUFFRSxjQUFNLEVBQUU7QUFBVjtBQUFaLE1BL0JBLGVBZ0NBLDJEQUFDLDBEQUFEO0FBQVEsVUFBSSxFQUFFLEdBQWQ7QUFBbUIsZUFBUyxFQUFFLEtBQUsvQixLQUFMLENBQVdFO0FBQXpDLE1BaENBLGVBa0NBO0FBQ0EsU0FBRyxFQUFDLE1BREo7QUFFQSxZQUFNLEVBQUMsTUFGUDtBQUdBLDhCQUF3QjtBQUh4QixPQUlNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQUpOLENBbENBLENBREo7QUFrTUg7O0FBNU55QixDOztBQStOZlAsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCB0b0pTIH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL2NvbW1vbi9zdG9yZVwiO1xuXG5cblxuQG9ic2VydmVyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbnB1dF9jb250ZW50IDogJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaIGFiY2RlZmdoaWprbG1ub3BxZXN0dXZ3eHl6ICAnLFxuXG4gICAgICAgICAgICBmb290ZXJHYXAgOiAyMDAsIFxuXG4gICAgICAgICAgICBmb250U2l6ZVN0YXRlIDogNTAsXG4gICAgICAgICAgICBmb250V2VpZ2h0U3RhdGU6IDMwMCxcbiAgICAgICAgICAgIGZvbnRMZXR0ZXJTcGFjaW5nU3RhdGUgOiAwLFxuICAgICAgICAgICAgZm9udExpbmVTcGFjaW5nU3RhdGU6IDAuODUsXG4gICAgICAgICAgICBmb250Q29sb3JTdGF0ZSA6ICcjMDAwJyxcbiAgICAgICAgICAgIGZvbnRTdGF0ZSA6IG51bGwsXG5cbiAgICAgICAgICAgIGlzRm9udFNpemVBdXRvIDogZmFsc2UsXG4gICAgICAgICAgICBpc0ZvbnRXZWlnaHRBdXRvIDogZmFsc2UsXG4gICAgICAgICAgICBpc0ZvbnRMZXR0ZXJTcGFjaW5nQXV0byA6IGZhbHNlLFxuICAgICAgICAgICAgaXNGb250TGluZVNwYWNpbmdBdXRvIDogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpblRvcDogMjAwLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250X2Rpc3BsYXlfY29udGFpbmVyICBtYXgtd2lkdGgtd3JhcHBlclwiICBzdHlsZT17eyAgbWFyZ2luVG9wOiA0MCwgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udF9kaXNwbGF5X2FyZWFcIiBzdHlsZT17eyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemUgOiBzdG9yZS5mb250U2l6ZVN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHN0b3JlLmZvbnRXZWlnaHRTdGF0ZSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0X2NvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGb250IENvbnRlbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbnB1dF9jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0X2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemUgOiBzdG9yZS5mb250U2l6ZVN0YXRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBzdG9yZS5mb250V2VpZ2h0U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHN0b3JlLmZvbnRDb2xvclN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IHN0b3JlLmZvbnRMZXR0ZXJTcGFjaW5nU3RhdGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHN0b3JlLmZvbnRMaW5lU3BhY2luZ1N0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRXcmFwOiAnd3JhcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnRWFydGhfRmluYWxHWCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoJ2lucHV0X2NvbnRlbnQnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDQwMCB9fT48L2Rpdj5cbiAgICAgICAgICAgIDxGb290ZXIgcGF0aD17Jy8nfSBmb290ZXJHYXA9e3RoaXMuc3RhdGUuZm9vdGVyR2FwfS8+XG5cbiAgICAgICAgICAgIDxzdHlsZSBcbiAgICAgICAgICAgIGpzeD1cInRydWVcIlxuICAgICAgICAgICAgZ2xvYmFsPVwidHJ1ZVwiXG4gICAgICAgICAgICBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuZm9udF92YWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hdXRvX3JvdyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hdXRvX2J1dHR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRpdi5sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGl2LnJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mb250X2Rpc3BsYXlfY29udHJvbF9sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6ICMwYTBhMGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZSA6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW5wdXRfd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlYWVhZWE7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmlucHV0X2NvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlciA6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lIDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZm9udF9kaXNwbGF5X2NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZm9udF9jb250cm9sbGVyX2FyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvbnRfZGlzcGxheV9hcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA6IDIwcHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmZvbnRfZGlzcGxheV9pbm5lciB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mb250X2lucHV0X2FyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAvKiAuLi4gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb250X2Rpc3BsYXlfYXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2xvcl9jb250YWluZXJfcmVzcG9uc2l2ZV9tYXJnaW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIC4uLiAqL1xuICAgICAgICAgICAgICAgICAgICAuZm9udF9kaXNwbGF5X2FyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29sb3JfY29udGFpbmVyX3Jlc3BvbnNpdmVfbWFyZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogLi4uICovXG4gICAgICAgICAgICAgICAgICAgIC5mb250X2Rpc3BsYXlfYXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb2xvcl9jb250YWluZXJfcmVzcG9uc2l2ZV9tYXJnaW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogLi4uICovXG4gICAgICAgICAgICAgICAgICAgIC5mb250X2Rpc3BsYXlfYXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb2xvcl9jb250YWluZXJfcmVzcG9uc2l2ZV9tYXJnaW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIC4uLiAqL1xuICAgICAgICAgICAgICAgICAgICAuZm9udF9kaXNwbGF5X2FyZWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29sb3JfY29udGFpbmVyX3Jlc3BvbnNpdmVfbWFyZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})