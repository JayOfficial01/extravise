"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Card/HorizontalCard.jsx":
/*!********************************************!*\
  !*** ./components/Card/HorizontalCard.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _Card_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card.style */ \"./components/Card/Card.style.js\");\n/* harmony import */ var _styles_constant_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/constant.style */ \"./styles/constant.style.js\");\n\n\n\n\n\n\nfunction HorizontalCard(props) {\n    const { image , heading , title , subHeading , description , direction , background , button ={} , className  } = props;\n    const { buttonText , url  } = button;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card_style__WEBPACK_IMPORTED_MODULE_3__.HorizotalCardStyle, {\n        dir: direction,\n        bg: background,\n        className: className,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            className: \"card-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"picutre\", {\n                    className: \"card-image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: image,\n                        alt: \"cardImagesss\",\n                        width: 500,\n                        height: 500\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                    className: \"card-details\",\n                    children: [\n                        heading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"heading\",\n                            children: [\n                                \"- \",\n                                heading\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 23\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"title\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        subHeading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"sub-heading\",\n                            children: subHeading\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 26\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"description\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        buttonText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            className: \"button-wrapper\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_constant_style__WEBPACK_IMPORTED_MODULE_4__.PrimaryButton, {\n                                href: url,\n                                children: [\n                                    buttonText,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsArrowRight, {}, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\extravise\\\\components\\\\Card\\\\HorizontalCard.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = HorizontalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HorizontalCard);\nvar _c;\n$RefreshReg$(_c, \"HorizontalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQvSG9yaXpvbnRhbENhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNLO0FBQ2U7QUFFSTtBQUNVO0FBRTVELFNBQVNLLGVBQWVDLEtBQUssRUFBRTtJQUM3QixNQUFNLEVBQ0pDLE1BQUssRUFDTEMsUUFBTyxFQUNQQyxNQUFLLEVBQ0xDLFdBQVUsRUFDVkMsWUFBVyxFQUNYQyxVQUFTLEVBQ1RDLFdBQVUsRUFDVkMsUUFBUyxDQUFDLEVBQUMsRUFDWEMsVUFBUyxFQUNWLEdBQUdUO0lBQ0osTUFBTSxFQUFFVSxXQUFVLEVBQUVDLElBQUcsRUFBRSxHQUFHSDtJQUU1QixxQkFDRSw4REFBQ1gsMkRBQWtCQTtRQUFDZSxLQUFLTjtRQUFXTyxJQUFJTjtRQUFZRSxXQUFXQTtrQkFDN0QsNEVBQUNLO1lBQVFMLFdBQVU7OzhCQUNqQiw4REFBQ007b0JBQVFOLFdBQVU7OEJBQ2pCLDRFQUFDZCxtREFBS0E7d0JBQUNxQixLQUFLZjt3QkFBT2dCLEtBQUk7d0JBQWVDLE9BQU87d0JBQUtDLFFBQVE7Ozs7Ozs7Ozs7OzhCQUc1RCw4REFBQ0M7b0JBQVdYLFdBQVU7O3dCQUNuQlAseUJBQVcsOERBQUNtQjs0QkFBR1osV0FBVTs7Z0NBQVU7Z0NBQUdQOzs7Ozs7O3NDQUN2Qyw4REFBQ29COzRCQUFHYixXQUFVO3NDQUFTTjs7Ozs7O3dCQUN0QkMsNEJBQWMsOERBQUNpQjs0QkFBR1osV0FBVTtzQ0FBZUw7Ozs7OztzQ0FDNUMsOERBQUNtQjs0QkFBRWQsV0FBVTtzQ0FBZUo7Ozs7Ozt3QkFFM0JLLDRCQUNDLDhEQUFDSTs0QkFBUUwsV0FBVTtzQ0FDakIsNEVBQUNYLGlFQUFhQTtnQ0FBQzBCLE1BQU1iOztvQ0FDbEJEO2tEQUNELDhEQUFDZTtrREFDQyw0RUFBQzdCLHdEQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTL0I7S0F6Q1NHO0FBMkNULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZC9Ib3Jpem9udGFsQ2FyZC5qc3g/MDk0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBCc0Fycm93UmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbmltcG9ydCB7IEhvcml6b3RhbENhcmRTdHlsZSB9IGZyb20gXCIuL0NhcmQuc3R5bGVcIjtcclxuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi9zdHlsZXMvY29uc3RhbnQuc3R5bGVcIjtcclxuXHJcbmZ1bmN0aW9uIEhvcml6b250YWxDYXJkKHByb3BzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaW1hZ2UsXHJcbiAgICBoZWFkaW5nLFxyXG4gICAgdGl0bGUsXHJcbiAgICBzdWJIZWFkaW5nLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkaXJlY3Rpb24sXHJcbiAgICBiYWNrZ3JvdW5kLFxyXG4gICAgYnV0dG9uID0ge30sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgYnV0dG9uVGV4dCwgdXJsIH0gPSBidXR0b247XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SG9yaXpvdGFsQ2FyZFN0eWxlIGRpcj17ZGlyZWN0aW9ufSBiZz17YmFja2dyb3VuZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxwaWN1dHJlIGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJjYXJkSW1hZ2Vzc3NcIiB3aWR0aD17NTAwfSBoZWlnaHQ9ezUwMH0gLz5cclxuICAgICAgICA8L3BpY3V0cmU+XHJcblxyXG4gICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImNhcmQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAge2hlYWRpbmcgJiYgPGgzIGNsYXNzTmFtZT1cImhlYWRpbmdcIj4tIHtoZWFkaW5nfTwvaDM+fVxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICB7c3ViSGVhZGluZyAmJiA8aDMgY2xhc3NOYW1lPVwic3ViLWhlYWRpbmdcIj57c3ViSGVhZGluZ308L2gzPn1cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuXHJcbiAgICAgICAgICB7YnV0dG9uVGV4dCAmJiAoXHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPFByaW1hcnlCdXR0b24gaHJlZj17dXJsfT5cclxuICAgICAgICAgICAgICAgIHtidXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxCc0Fycm93UmlnaHQgLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L1ByaW1hcnlCdXR0b24+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICA8L0hvcml6b3RhbENhcmRTdHlsZT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3Jpem9udGFsQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJCc0Fycm93UmlnaHQiLCJIb3Jpem90YWxDYXJkU3R5bGUiLCJQcmltYXJ5QnV0dG9uIiwiSG9yaXpvbnRhbENhcmQiLCJwcm9wcyIsImltYWdlIiwiaGVhZGluZyIsInRpdGxlIiwic3ViSGVhZGluZyIsImRlc2NyaXB0aW9uIiwiZGlyZWN0aW9uIiwiYmFja2dyb3VuZCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImJ1dHRvblRleHQiLCJ1cmwiLCJkaXIiLCJiZyIsImFydGljbGUiLCJwaWN1dHJlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWdjYXB0aW9uIiwiaDMiLCJoMiIsInAiLCJocmVmIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Card/HorizontalCard.jsx\n"));

/***/ })

});