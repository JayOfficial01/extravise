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

/***/ "./styles/about.style.js":
/*!*******************************!*\
  !*** ./styles/about.style.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AboutStyle\": function() { return /* binding */ AboutStyle; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constant_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.style */ \"./styles/constant.style.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  .about-header {\\n    padding: 10rem 0 5rem 0;\\n  }\\n\\n  .clients-section {\\n    background: url(\"./images/bg/clients-bg.png\") no-repeat;\\n    background-size: cover;\\n    padding: 5rem 0;\\n    margin-bottom: 3rem;\\n\\n    .clinets-container {\\n      ',\n        \";\\n      \",\n        \";\\n      \",\n        \";\\n\\n      @media (max-width: \",\n        \") {\\n        grid-template-columns: 1fr;\\n      }\\n\\n      .client-card {\\n        \",\n        \";\\n\\n        color: \",\n        \";\\n        text-align: center;\\n\\n        .icon-wrapper {\\n          \",\n        \";\\n\\n          background: \",\n        \";\\n          padding: 1rem;\\n          border-radius: 0.8rem;\\n\\n          > svg {\\n            width: 3rem;\\n            fill: \",\n        \";\\n          }\\n        }\\n\\n        .heading {\\n          margin: 1.5rem 0;\\n        }\\n\\n        .description {\\n          line-height: 3.2rem;\\n        }\\n      }\\n    }\\n  }\\n\\n  .how-we-work {\\n    margin-top: 3rem;\\n    padding: 3rem 0;\\n    background: \",\n        \";\\n\\n    .works-container {\\n      \",\n        \";\\n      \",\n        \";\\n      \",\n        \";\\n\\n      @media (max-width: \",\n        \") {\\n        grid-template-columns: 1fr;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst AboutStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section(_templateObject(), (0,_constant_style__WEBPACK_IMPORTED_MODULE_1__.GirdBox)({\n    gap: \"10rem\"\n}), _constant_style__WEBPACK_IMPORTED_MODULE_1__.CustomContainer, _constant_style__WEBPACK_IMPORTED_MODULE_1__.CustomSpacing, (param)=>{\n    let { theme  } = param;\n    return theme.breakPoints.mediumDevices;\n}, (0,_constant_style__WEBPACK_IMPORTED_MODULE_1__.Flexbox)({\n    justify: \"center\",\n    direction: \"column\"\n}), (param)=>{\n    let { theme  } = param;\n    return theme.colors.whiteColor;\n}, (0,_constant_style__WEBPACK_IMPORTED_MODULE_1__.Flexbox)({\n    justify: \"center\"\n}), (param)=>{\n    let { theme  } = param;\n    return theme.gradients.iconGradient;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.colors.whiteColor;\n}, (param)=>{\n    let { theme  } = param;\n    return theme.colors.lightGreenColor;\n}, (0,_constant_style__WEBPACK_IMPORTED_MODULE_1__.GirdBox)({\n    columns: \"repeat(3, 1fr)\",\n    gap: \"5rem\",\n    align: \"flex-start\"\n}), _constant_style__WEBPACK_IMPORTED_MODULE_1__.CustomContainer, _constant_style__WEBPACK_IMPORTED_MODULE_1__.CustomSpacing, (param)=>{\n    let { theme  } = param;\n    return theme.breakPoints.mediumDevices;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvYWJvdXQuc3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFNYjtBQUVuQixNQUFNSyxhQUFhTCxpRUFBYyxvQkFZaENJLHdEQUFPQSxDQUFDO0lBQUVHLEtBQUs7QUFBUSxJQUN2Qk4sNERBQWVBLEVBQ2ZDLDBEQUFhQSxFQUVNLFNBQWVNO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLE1BQU1DLFdBQVcsQ0FBQ0MsYUFBYTtBQUFELEdBSzlEUCx3REFBT0EsQ0FBQztJQUFFUSxTQUFTO0lBQVVDLFdBQVc7QUFBUyxJQUUxQyxTQUFlSjtRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNSyxNQUFNLENBQUNDLFVBQVU7QUFBRCxHQUkxQ1gsd0RBQU9BLENBQUM7SUFBRVEsU0FBUztBQUFTLElBRWhCLFNBQWVIO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLE1BQU1PLFNBQVMsQ0FBQ0MsWUFBWTtBQUFELEdBTTlDLFNBQWVSO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLE1BQU1LLE1BQU0sQ0FBQ0MsVUFBVTtBQUFELEdBa0J2QyxTQUFlTjtRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNSyxNQUFNLENBQUNJLGVBQWU7QUFBRCxHQUdwRGIsd0RBQU9BLENBQUM7SUFDUmMsU0FBUztJQUNUWCxLQUFLO0lBQ0xZLE9BQU87QUFDVCxJQUNFbEIsNERBQWVBLEVBQ2ZDLDBEQUFhQSxFQUVNLFNBQWVNO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLE1BQU1DLFdBQVcsQ0FBQ0MsYUFBYTtBQUFELEdBS3RFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9hYm91dC5zdHlsZS5qcz9lZGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ3VzdG9tQ29udGFpbmVyLFxyXG4gIEN1c3RvbVNwYWNpbmcsXHJcbiAgRmxleGJveCxcclxuICBHaXJkQm94LFxyXG59IGZyb20gXCIuL2NvbnN0YW50LnN0eWxlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRTdHlsZSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIC5hYm91dC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTByZW0gMCA1cmVtIDA7XHJcbiAgfVxyXG5cclxuICAuY2xpZW50cy1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4vaW1hZ2VzL2JnL2NsaWVudHMtYmcucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG5cclxuICAgIC5jbGluZXRzLWNvbnRhaW5lciB7XHJcbiAgICAgICR7R2lyZEJveCh7IGdhcDogXCIxMHJlbVwiIH0pfTtcclxuICAgICAgJHtDdXN0b21Db250YWluZXJ9O1xyXG4gICAgICAke0N1c3RvbVNwYWNpbmd9O1xyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtQb2ludHMubWVkaXVtRGV2aWNlc30pIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNsaWVudC1jYXJkIHtcclxuICAgICAgICAke0ZsZXhib3goeyBqdXN0aWZ5OiBcImNlbnRlclwiLCBkaXJlY3Rpb246IFwiY29sdW1uXCIgfSl9O1xyXG5cclxuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGVDb2xvcn07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAuaWNvbi13cmFwcGVyIHtcclxuICAgICAgICAgICR7RmxleGJveCh7IGp1c3RpZnk6IFwiY2VudGVyXCIgfSl9O1xyXG5cclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZ3JhZGllbnRzLmljb25HcmFkaWVudH07XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xyXG5cclxuICAgICAgICAgID4gc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgIGZpbGw6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlQ29sb3J9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgICAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMy4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhvdy13ZS13b3JrIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodEdyZWVuQ29sb3J9O1xyXG5cclxuICAgIC53b3Jrcy1jb250YWluZXIge1xyXG4gICAgICAke0dpcmRCb3goe1xyXG4gICAgICAgIGNvbHVtbnM6IFwicmVwZWF0KDMsIDFmcilcIixcclxuICAgICAgICBnYXA6IFwiNXJlbVwiLFxyXG4gICAgICAgIGFsaWduOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgfSl9O1xyXG4gICAgICAke0N1c3RvbUNvbnRhaW5lcn07XHJcbiAgICAgICR7Q3VzdG9tU3BhY2luZ307XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha1BvaW50cy5tZWRpdW1EZXZpY2VzfSkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ3VzdG9tQ29udGFpbmVyIiwiQ3VzdG9tU3BhY2luZyIsIkZsZXhib3giLCJHaXJkQm94IiwiQWJvdXRTdHlsZSIsInNlY3Rpb24iLCJnYXAiLCJ0aGVtZSIsImJyZWFrUG9pbnRzIiwibWVkaXVtRGV2aWNlcyIsImp1c3RpZnkiLCJkaXJlY3Rpb24iLCJjb2xvcnMiLCJ3aGl0ZUNvbG9yIiwiZ3JhZGllbnRzIiwiaWNvbkdyYWRpZW50IiwibGlnaHRHcmVlbkNvbG9yIiwiY29sdW1ucyIsImFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/about.style.js\n"));

/***/ })

});