"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./pages/about.jsx":
/*!*************************!*\
  !*** ./pages/about.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card/Card */ \"./components/Card/Card.jsx\");\n/* harmony import */ var _data_aboutData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/aboutData */ \"./data/aboutData.js\");\n/* harmony import */ var _data_homeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/homeData */ \"./data/homeData.js\");\n/* harmony import */ var _styles_about_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/about.style */ \"./styles/about.style.js\");\n/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../svg */ \"./svg/index.js\");\n\n\n\n\n\n\n\n\n\nfunction About() {\n    const about = _data_aboutData__WEBPACK_IMPORTED_MODULE_4__.aboutData;\n    delete about.button;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_about_style__WEBPACK_IMPORTED_MODULE_6__.AboutStyle, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Extravise | About us\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"about-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    cardType: \"horizontalCard\",\n                    ...about,\n                    className: \"about-header-details\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"clients-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: \"clinets-container\",\n                    children: _data_aboutData__WEBPACK_IMPORTED_MODULE_4__.clinets.map((client, index)=>{\n                        const { icon , heading , description  } = client;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            className: \"client-card\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"icon-wrapper\",\n                                    children: icon\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"heading\",\n                                    children: heading\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"description\",\n                                    children: description\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                cardType: \"horizontalCard\",\n                ..._data_homeData__WEBPACK_IMPORTED_MODULE_5__.whyChooseUs\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"how-we-work\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: \"works-container\",\n                    children: _data_aboutData__WEBPACK_IMPORTED_MODULE_4__.works.map((work, index)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            cardType: \"commonCard\",\n                            ...work,\n                            key: index,\n                            __source: {\n                                fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            },\n                            __self: this\n                        }))\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\extravise\\\\pages\\\\about.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ0g7QUFDaUI7QUFDbUI7QUFDZjtBQUNJO0FBQ2Y7QUFFcEMsU0FBU1MsUUFBUTtJQUNmLE1BQU1DLFFBQVFQLHNEQUFTQTtJQUN2QixPQUFPTyxNQUFNQyxNQUFNO0lBRW5CLHFCQUNFLDhEQUFDSiwyREFBVUE7OzBCQUNULDhEQUFDUCxrREFBSUE7MEJBQ0gsNEVBQUNZOzhCQUFNOzs7Ozs7Ozs7OzswQkFHVCw4REFBQ0M7Z0JBQU9DLFdBQVU7MEJBQ2hCLDRFQUFDWiw2REFBSUE7b0JBQ0hhLFVBQVM7b0JBQ1IsR0FBR0wsS0FBSztvQkFDVEksV0FBVTs7Ozs7Ozs7Ozs7MEJBSWQsOERBQUNFO2dCQUFRRixXQUFVOzBCQUNqQiw0RUFBQ0U7b0JBQVFGLFdBQVU7OEJBQ2hCVix3REFBVyxDQUFDLENBQUNjLFFBQVFDLFFBQVU7d0JBQzlCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxRQUFPLEVBQUVDLFlBQVcsRUFBRSxHQUFHSjt3QkFDdkMscUJBQ0UsOERBQUNGOzRCQUFRRixXQUFVOzs4Q0FDakIsOERBQUNTO29DQUFLVCxXQUFVOzhDQUFnQk07Ozs7Ozs4Q0FFaEMsOERBQUNJO29DQUFHVixXQUFVOzhDQUFXTzs7Ozs7OzhDQUN6Qiw4REFBQ0k7b0NBQUVYLFdBQVU7OENBQWVROzs7Ozs7Ozs7Ozs7b0JBR2xDOzs7Ozs7Ozs7OzswQkFJSiw4REFBQ3BCLDZEQUFJQTtnQkFBQ2EsVUFBUztnQkFBa0IsR0FBR1QsdURBQVc7Ozs7OzswQkFFL0MsOERBQUNVO2dCQUFRRixXQUFVOzBCQUNqQiw0RUFBQ0U7b0JBQVFGLFdBQVU7OEJBQ2hCVCxzREFBUyxDQUFDLENBQUNxQixNQUFNUCxzQkFDaEIscURBQUNqQiw2REFBSUE7NEJBQUNhLFVBQVM7NEJBQWMsR0FBR1csSUFBSTs0QkFBRUMsS0FBS1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12RDtLQTdDU1Y7QUErQ1QsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanN4PzUzYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQvQ2FyZFwiO1xyXG5pbXBvcnQgeyBhYm91dERhdGEsIGNsaW5ldHMsIHdvcmtzIH0gZnJvbSBcIi4uL2RhdGEvYWJvdXREYXRhXCI7XHJcbmltcG9ydCB7IHdoeUNob29zZVVzIH0gZnJvbSBcIi4uL2RhdGEvaG9tZURhdGFcIjtcclxuaW1wb3J0IHsgQWJvdXRTdHlsZSB9IGZyb20gXCIuLi9zdHlsZXMvYWJvdXQuc3R5bGVcIjtcclxuaW1wb3J0IHsgQ2xpZW50SWNvbiB9IGZyb20gXCIuLi9zdmdcIjtcclxuXHJcbmZ1bmN0aW9uIEFib3V0KCkge1xyXG4gIGNvbnN0IGFib3V0ID0gYWJvdXREYXRhO1xyXG4gIGRlbGV0ZSBhYm91dC5idXR0b247XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QWJvdXRTdHlsZT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkV4dHJhdmlzZSB8IEFib3V0IHVzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJhYm91dC1oZWFkZXJcIj5cclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgY2FyZFR5cGU9XCJob3Jpem9udGFsQ2FyZFwiXHJcbiAgICAgICAgICB7Li4uYWJvdXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYm91dC1oZWFkZXItZGV0YWlsc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjbGllbnRzLXNlY3Rpb25cIj5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjbGluZXRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge2NsaW5ldHMubWFwKChjbGllbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWNvbiwgaGVhZGluZywgZGVzY3JpcHRpb24gfSA9IGNsaWVudDtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjbGllbnQtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyXCI+e2ljb259PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkaW5nXCI+e2hlYWRpbmd9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICAgIDxDYXJkIGNhcmRUeXBlPVwiaG9yaXpvbnRhbENhcmRcIiB7Li4ud2h5Q2hvb3NlVXN9IC8+XHJcblxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJob3ctd2Utd29ya1wiPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndvcmtzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge3dvcmtzLm1hcCgod29yaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPENhcmQgY2FyZFR5cGU9XCJjb21tb25DYXJkXCIgey4uLndvcmt9IGtleT17aW5kZXh9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgIDwvQWJvdXRTdHlsZT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsIkNhcmQiLCJhYm91dERhdGEiLCJjbGluZXRzIiwid29ya3MiLCJ3aHlDaG9vc2VVcyIsIkFib3V0U3R5bGUiLCJDbGllbnRJY29uIiwiQWJvdXQiLCJhYm91dCIsImJ1dHRvbiIsInRpdGxlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiY2FyZFR5cGUiLCJhcnRpY2xlIiwibWFwIiwiY2xpZW50IiwiaW5kZXgiLCJpY29uIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwic3BhbiIsImgzIiwicCIsIndvcmsiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.jsx\n"));

/***/ })

});