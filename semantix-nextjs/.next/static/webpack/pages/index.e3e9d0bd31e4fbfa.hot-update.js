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

/***/ "./components/Slider/PostSlider.jsx":
/*!******************************************!*\
  !*** ./components/Slider/PostSlider.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Post */ \"./components/Post/index.jsx\");\n\n\n\n\n\nfunction PostSlider() {\n    const postData = [\n        {\n            url: \"/blog/blog-details\",\n            src: \"/images/post_1.jpeg\",\n            alt: \"Post\",\n            date: \"08 September 2023\",\n            title: \"Why Small-Scale Businesses Need Websites\"\n        },\n        {\n            url: \"/blog/blog-details\",\n            src: \"/images/post_1.jpeg\",\n            alt: \"Post\",\n            date: \"08 October 2023\",\n            title: \"Leveraging Tech Trends: A Blueprint for Business Growth\"\n        },\n        {\n            url: \"/blog/blog-details\",\n            src: \"/images/post_1.jpeg\",\n            alt: \"Post\",\n            date: \"10 October 2022\",\n            title: \"Building Your Brand Online: Strategies for Digital Success\"\n        }\n    ];\n    /** Slider Settings **/ const settings = {\n        dots: false,\n        arrows: false,\n        infinite: true,\n        autoplay: true,\n        autoplaySpeed: 4000,\n        speed: 1000,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        responsive: [\n            {\n                breakpoint: 1600,\n                settings: {\n                    slidesToShow: 3\n                }\n            },\n            {\n                breakpoint: 1200,\n                settings: {\n                    slidesToShow: 2\n                }\n            },\n            {\n                breakpoint: 992,\n                settings: {\n                    slidesToShow: 2\n                }\n            },\n            {\n                breakpoint: 768,\n                settings: {\n                    slidesToShow: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ...settings,\n        className: \"cs-gap-24\",\n        children: postData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    url: item.url,\n                    src: item.src,\n                    alt: item.alt,\n                    date: item.date,\n                    title: item.title\n                }, void 0, false, {\n                    fileName: \"D:\\\\Semantix\\\\semantix website v1\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\Slider\\\\PostSlider.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, this)\n            }, index, false, {\n                fileName: \"D:\\\\Semantix\\\\semantix website v1\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\Slider\\\\PostSlider.jsx\",\n                lineNumber: 72,\n                columnNumber: 11\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\Semantix\\\\semantix website v1\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\Slider\\\\PostSlider.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_c = PostSlider;\nvar _c;\n$RefreshReg$(_c, \"PostSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9Qb3N0U2xpZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDUTtBQUNSO0FBQ0U7QUFFWixTQUFTSSxhQUFhO0lBQ25DLE1BQU1DLFdBQVc7UUFDZjtZQUNFQyxLQUFJO1lBQ0pDLEtBQUk7WUFDSkMsS0FBSTtZQUNKQyxNQUFLO1lBQ0xDLE9BQU07UUFDUjtRQUNBO1lBQ0VKLEtBQUk7WUFDSkMsS0FBSTtZQUNKQyxLQUFJO1lBQ0pDLE1BQUs7WUFDTEMsT0FBTTtRQUNSO1FBQUU7WUFDQUosS0FBSTtZQUNKQyxLQUFJO1lBQ0pDLEtBQUk7WUFDSkMsTUFBSztZQUNMQyxPQUFNO1FBQ1I7S0FFRDtJQUVELHFCQUFxQixHQUNyQixNQUFNQyxXQUFXO1FBQ2ZDLE1BQU0sS0FBSztRQUNYQyxRQUFPLEtBQUs7UUFDWkMsVUFBVSxJQUFJO1FBQ2RDLFVBQVUsSUFBSTtRQUNkQyxlQUFlO1FBQ2ZDLE9BQU87UUFDUEMsY0FBYztRQUNkQyxnQkFBZ0I7UUFDaEJDLFlBQVk7WUFDVjtnQkFDRUMsWUFBWTtnQkFDWlYsVUFBVTtvQkFDUk8sY0FBYztnQkFDaEI7WUFDRjtZQUNBO2dCQUNFRyxZQUFZO2dCQUNaVixVQUFVO29CQUNSTyxjQUFjO2dCQUNoQjtZQUNGO1lBQ0E7Z0JBQ0VHLFlBQVk7Z0JBQ1pWLFVBQVU7b0JBQ1JPLGNBQWM7Z0JBQ2hCO1lBQ0Y7WUFDQTtnQkFDRUcsWUFBWTtnQkFDWlYsVUFBVTtvQkFDUk8sY0FBYztnQkFDaEI7WUFDRjtTQUNEO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ2pCLG1EQUFNQTtRQUFFLEdBQUdVLFFBQVE7UUFBRVcsV0FBVTtrQkFDN0JqQixTQUFTa0IsR0FBRyxDQUFDLENBQUNDLE1BQUtDLHNCQUNoQiw4REFBQ3ZCLDRDQUFHQTswQkFDRiw0RUFBQ0MsNkNBQUlBO29CQUNIRyxLQUFLa0IsS0FBS2xCLEdBQUc7b0JBQ2JDLEtBQUtpQixLQUFLakIsR0FBRztvQkFDYkMsS0FBS2dCLEtBQUtoQixHQUFHO29CQUNiQyxNQUFNZSxLQUFLZixJQUFJO29CQUNmQyxPQUFPYyxLQUFLZCxLQUFLOzs7Ozs7ZUFOWGU7Ozs7Ozs7Ozs7QUFZcEIsQ0FBQztLQTlFdUJyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NsaWRlci9Qb3N0U2xpZGVyLmpzeD80OWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgRGl2IGZyb20gJy4uL0Rpdic7XG5pbXBvcnQgUG9zdCBmcm9tICcuLi9Qb3N0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsaWRlcigpIHtcbiAgY29uc3QgcG9zdERhdGEgPSBbXG4gICAge1xuICAgICAgdXJsOicvYmxvZy9ibG9nLWRldGFpbHMnLCBcbiAgICAgIHNyYzonL2ltYWdlcy9wb3N0XzEuanBlZycsIFxuICAgICAgYWx0OidQb3N0JywgXG4gICAgICBkYXRlOicwOCBTZXB0ZW1iZXIgMjAyMycsIFxuICAgICAgdGl0bGU6J1doeSBTbWFsbC1TY2FsZSBCdXNpbmVzc2VzIE5lZWQgV2Vic2l0ZXMnXG4gICAgfSxcbiAgICB7XG4gICAgICB1cmw6Jy9ibG9nL2Jsb2ctZGV0YWlscycsIFxuICAgICAgc3JjOicvaW1hZ2VzL3Bvc3RfMS5qcGVnJywgXG4gICAgICBhbHQ6J1Bvc3QnLCBcbiAgICAgIGRhdGU6JzA4IE9jdG9iZXIgMjAyMycsIFxuICAgICAgdGl0bGU6J0xldmVyYWdpbmcgVGVjaCBUcmVuZHM6IEEgQmx1ZXByaW50IGZvciBCdXNpbmVzcyBHcm93dGgnXG4gICAgfSx7XG4gICAgICB1cmw6Jy9ibG9nL2Jsb2ctZGV0YWlscycsIFxuICAgICAgc3JjOicvaW1hZ2VzL3Bvc3RfMS5qcGVnJywgXG4gICAgICBhbHQ6J1Bvc3QnLCBcbiAgICAgIGRhdGU6JzEwIE9jdG9iZXIgMjAyMicsIFxuICAgICAgdGl0bGU6J0J1aWxkaW5nIFlvdXIgQnJhbmQgT25saW5lOiBTdHJhdGVnaWVzIGZvciBEaWdpdGFsIFN1Y2Nlc3MnXG4gICAgfSxcbiAgICBcbiAgXVxuICBcbiAgLyoqIFNsaWRlciBTZXR0aW5ncyAqKi9cbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogZmFsc2UsXG4gICAgYXJyb3dzOmZhbHNlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDQwMDAsXG4gICAgc3BlZWQ6IDEwMDAsXG4gICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTYwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSBjbGFzc05hbWU9J2NzLWdhcC0yNCc+XG4gICAgICB7cG9zdERhdGEubWFwKChpdGVtLGluZGV4KT0+KFxuICAgICAgICAgIDxEaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8UG9zdCBcbiAgICAgICAgICAgICAgdXJsPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgc3JjPXtpdGVtLnNyY30gXG4gICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9IFxuICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Rpdj5cbiAgICAgICAgKSl9XG4gICAgPC9TbGlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNsaWRlciIsIkRpdiIsIlBvc3QiLCJQb3N0U2xpZGVyIiwicG9zdERhdGEiLCJ1cmwiLCJzcmMiLCJhbHQiLCJkYXRlIiwidGl0bGUiLCJzZXR0aW5ncyIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Slider/PostSlider.jsx\n"));

/***/ })

});