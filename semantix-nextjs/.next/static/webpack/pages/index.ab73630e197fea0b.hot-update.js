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

/***/ "./components/LogoList/index.jsx":
/*!***************************************!*\
  !*** ./components/LogoList/index.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LogoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n\n\n\nfunction LogoList() {\n    const partnerLogos = [\n        {\n            src: \"/images/1.png\",\n            alt: \"Partner\"\n        },\n        {\n            src: \"/images/2.png\",\n            alt: \"Partner\"\n        },\n        {\n            src: \"/images/3.png\",\n            alt: \"Partner\"\n        },\n        {\n            src: \"/images/4.png\",\n            alt: \"Partner\"\n        },\n        {\n            src: \"/images/4.png\",\n            alt: \"Partner\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"cs-partner_logo_wrap\",\n        children: partnerLogos.map((partnerLogo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cs-partner_logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: partnerLogo.src,\n                    alt: partnerLogo.alt\n                }, void 0, false, {\n                    fileName: \"D:\\\\Semantix\\\\semantix website v1\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\LogoList\\\\index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"D:\\\\Semantix\\\\semantix website v1\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\LogoList\\\\index.jsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\Semantix\\\\semantix website v1\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\LogoList\\\\index.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c = LogoList;\nvar _c;\n$RefreshReg$(_c, \"LogoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ29MaXN0L2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ0Q7QUFFVixTQUFTRSxXQUFXO0lBQ2pDLE1BQU1DLGVBQWU7UUFDbkI7WUFDRUMsS0FBSztZQUNMQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRCxLQUFLO1lBQ0xDLEtBQUs7UUFDUDtRQUNBO1lBQ0VELEtBQUs7WUFDTEMsS0FBSztRQUNQO1FBQ0E7WUFDRUQsS0FBSztZQUNMQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRCxLQUFLO1lBQ0xDLEtBQUs7UUFDUDtLQUNEO0lBQ0QscUJBQ0UsOERBQUNKLDRDQUFHQTtRQUFDSyxXQUFVO2tCQUNaSCxhQUFhSSxHQUFHLENBQUMsQ0FBQ0MsYUFBYUMsc0JBQzlCLDhEQUFDQztnQkFBSUosV0FBVTswQkFDYiw0RUFBQ0s7b0JBQUlQLEtBQUtJLFlBQVlKLEdBQUc7b0JBQUVDLEtBQUtHLFlBQVlILEdBQUc7Ozs7OztlQURYSTs7Ozs7Ozs7OztBQU05QyxDQUFDO0tBaEN1QlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dvTGlzdC9pbmRleC5qc3g/MzkwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERpdiBmcm9tICcuLi9EaXYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvTGlzdCgpIHtcbiAgY29uc3QgcGFydG5lckxvZ29zID0gW1xuICAgIHtcbiAgICAgIHNyYzogJy9pbWFnZXMvMS5wbmcnLFxuICAgICAgYWx0OiAnUGFydG5lcicsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6ICcvaW1hZ2VzLzIucG5nJyxcbiAgICAgIGFsdDogJ1BhcnRuZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiAnL2ltYWdlcy8zLnBuZycsXG4gICAgICBhbHQ6ICdQYXJ0bmVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogJy9pbWFnZXMvNC5wbmcnLFxuICAgICAgYWx0OiAnUGFydG5lcicsXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6ICcvaW1hZ2VzLzQucG5nJyxcbiAgICAgIGFsdDogJ1BhcnRuZXInLFxuICAgIH0sIFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxEaXYgY2xhc3NOYW1lPVwiY3MtcGFydG5lcl9sb2dvX3dyYXBcIj5cbiAgICAgIHtwYXJ0bmVyTG9nb3MubWFwKChwYXJ0bmVyTG9nbywgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcy1wYXJ0bmVyX2xvZ29cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8aW1nIHNyYz17cGFydG5lckxvZ28uc3JjfSBhbHQ9e3BhcnRuZXJMb2dvLmFsdH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRpdiIsIkxvZ29MaXN0IiwicGFydG5lckxvZ29zIiwic3JjIiwiYWx0IiwiY2xhc3NOYW1lIiwibWFwIiwicGFydG5lckxvZ28iLCJpbmRleCIsImRpdiIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LogoList/index.jsx\n"));

/***/ })

});