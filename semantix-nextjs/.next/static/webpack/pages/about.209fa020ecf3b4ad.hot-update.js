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

/***/ "./components/Slider/TeamSlider.jsx":
/*!******************************************!*\
  !*** ./components/Slider/TeamSlider.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TeamSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Team */ \"./components/Team/index.jsx\");\n\n\n\n\n\nfunction TeamSlider() {\n    /** Team Member Data **/ const teamData = [\n        {\n            memberImage: \"/images/member_1.jpeg\",\n            memberName: \"Shobian Sathyamurthy\",\n            memberDesignation: \"Co-Founder / CEO\",\n            memberSocial: {\n                linkedin: \"/\",\n                twitter: \"/\",\n                youtube: \"/\",\n                facebook: \"/\"\n            }\n        },\n        {\n            memberImage: \"/images/umair.jpg\",\n            memberName: \"Umair Shukri\",\n            memberDesignation: \"C0-Founder / COO\",\n            memberSocial: {\n                linkedin: \"/https://www.linkedin.com/in/umair-s-09baa4137/\",\n                twitter: \"/\",\n                youtube: \"/\",\n                facebook: \"/\"\n            }\n        },\n        {\n            memberImage: \"/images/member_3.jpeg\",\n            memberName: \"Umair Ashfaq\",\n            memberDesignation: \"Chief Marketing Officer\",\n            memberSocial: {\n                linkedin: \"/\",\n                twitter: \"/\",\n                youtube: \"/\",\n                facebook: \"/\"\n            }\n        },\n        {\n            memberImage: \"/images/member_4.jpeg\",\n            memberName: \"Jameel Shuhaib\",\n            memberDesignation: \"Chief Sales Officer\",\n            memberSocial: {\n                linkedin: \"/\",\n                twitter: \"/\",\n                youtube: \"/\",\n                facebook: \"/\"\n            }\n        },\n        {\n            memberImage: \"/images/member_1.jpeg\",\n            memberName: \"Melon Bulgery\",\n            memberDesignation: \"Product Designer\",\n            memberSocial: {\n                linkedin: \"/\",\n                twitter: \"/\",\n                youtube: \"/\",\n                facebook: \"/\"\n            }\n        }\n    ];\n    /** Slider Settings **/ const SlickArrowLeft = (param)=>/*#__PURE__*/ {\n        let { currentSlide , slideCount , ...props } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...props,\n            className: \"slick-prev slick-arrow\" + (currentSlide === 0 ? \" slick-disabled\" : \"\"),\n            \"aria-hidden\": \"true\",\n            \"aria-disabled\": currentSlide === 0 ? true : false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                icon: \"bi:arrow-left\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\semantix\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\semantix\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n            lineNumber: 68,\n            columnNumber: 5\n        }, this);\n    };\n    const SlickArrowRight = (param)=>/*#__PURE__*/ {\n        let { currentSlide , slideCount , ...props } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...props,\n            className: \"slick-next slick-arrow\" + (currentSlide === slideCount - 1 ? \" slick-disabled\" : \"\"),\n            \"aria-hidden\": \"true\",\n            \"aria-disabled\": currentSlide === slideCount - 1 ? true : false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                icon: \"bi:arrow-right\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\semantix\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\semantix\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n            lineNumber: 80,\n            columnNumber: 5\n        }, this);\n    };\n    const settings = {\n        dots: false,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 4,\n        slidesToScroll: 1,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlickArrowLeft, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\semantix\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n            lineNumber: 98,\n            columnNumber: 16\n        }, this),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlickArrowRight, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\semantix\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n            lineNumber: 99,\n            columnNumber: 16\n        }, this),\n        responsive: [\n            {\n                breakpoint: 1200,\n                settings: {\n                    slidesToShow: 3\n                }\n            },\n            {\n                breakpoint: 991,\n                settings: {\n                    slidesToShow: 2,\n                    dots: true,\n                    arrows: false\n                }\n            },\n            {\n                breakpoint: 500,\n                settings: {\n                    slidesToShow: 1,\n                    dots: true,\n                    arrows: false\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ...settings,\n        className: \"cs-gap-24 cs-arrow_style2\",\n        children: teamData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Team__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    memberImage: item.memberImage,\n                    memberName: item.memberName,\n                    memberDesignation: item.memberDesignation,\n                    memberSocial: item.memberSocial\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\semantix\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n                    lineNumber: 130,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\semantix\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n                lineNumber: 129,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\semantix\\\\Semantix_website_v1\\\\semantix-nextjs\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, this);\n}\n_c = TeamSlider;\nvar _c;\n$RefreshReg$(_c, \"TeamSlider\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQjRCLEtBQUs1QixpQkFBaUI7b0JBQ3pDQyxjQUFjMkIsS0FBSzNCLFlBQVk7Ozs7OztlQUx6QjRCOzs7Ozs7Ozs7O0FBV2xCLENBQUM7S0FySXVCakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIvVGVhbVNsaWRlci5qc3g/ZGRkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uIH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xyXG5cclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCBEaXYgZnJvbSAnLi4vRGl2JztcclxuaW1wb3J0IFRlYW0gZnJvbSAnLi4vVGVhbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtU2xpZGVyKCkge1xyXG4gIC8qKiBUZWFtIE1lbWJlciBEYXRhICoqL1xyXG4gIGNvbnN0IHRlYW1EYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBtZW1iZXJJbWFnZTogJy9pbWFnZXMvbWVtYmVyXzEuanBlZycsXHJcbiAgICAgIG1lbWJlck5hbWU6ICdTaG9iaWFuIFNhdGh5YW11cnRoeScsXHJcbiAgICAgIG1lbWJlckRlc2lnbmF0aW9uOiAnQ28tRm91bmRlciAvIENFTycsXHJcbiAgICAgIG1lbWJlclNvY2lhbDoge1xyXG4gICAgICAgIGxpbmtlZGluOiAnLycsXHJcbiAgICAgICAgdHdpdHRlcjogJy8nLFxyXG4gICAgICAgIHlvdXR1YmU6ICcvJyxcclxuICAgICAgICBmYWNlYm9vazogJy8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWVtYmVySW1hZ2U6ICcvaW1hZ2VzL3VtYWlyLmpwZycsXHJcbiAgICAgIG1lbWJlck5hbWU6ICdVbWFpciBTaHVrcmknLFxyXG4gICAgICBtZW1iZXJEZXNpZ25hdGlvbjogJ0MwLUZvdW5kZXIgLyBDT08nLFxyXG4gICAgICBtZW1iZXJTb2NpYWw6IHtcclxuICAgICAgICBsaW5rZWRpbjogJy9odHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdW1haXItcy0wOWJhYTQxMzcvJyxcclxuICAgICAgICB0d2l0dGVyOiAnLycsXHJcbiAgICAgICAgeW91dHViZTogJy8nLFxyXG4gICAgICAgIGZhY2Vib29rOiAnLycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtZW1iZXJJbWFnZTogJy9pbWFnZXMvbWVtYmVyXzMuanBlZycsXHJcbiAgICAgIG1lbWJlck5hbWU6ICdVbWFpciBBc2hmYXEnLFxyXG4gICAgICBtZW1iZXJEZXNpZ25hdGlvbjogJ0NoaWVmIE1hcmtldGluZyBPZmZpY2VyJyxcclxuICAgICAgbWVtYmVyU29jaWFsOiB7XHJcbiAgICAgICAgbGlua2VkaW46ICcvJyxcclxuICAgICAgICB0d2l0dGVyOiAnLycsXHJcbiAgICAgICAgeW91dHViZTogJy8nLFxyXG4gICAgICAgIGZhY2Vib29rOiAnLycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtZW1iZXJJbWFnZTogJy9pbWFnZXMvbWVtYmVyXzQuanBlZycsXHJcbiAgICAgIG1lbWJlck5hbWU6ICdKYW1lZWwgU2h1aGFpYicsXHJcbiAgICAgIG1lbWJlckRlc2lnbmF0aW9uOiAnQ2hpZWYgU2FsZXMgT2ZmaWNlcicsXHJcbiAgICAgIG1lbWJlclNvY2lhbDoge1xyXG4gICAgICAgIGxpbmtlZGluOiAnLycsXHJcbiAgICAgICAgdHdpdHRlcjogJy8nLFxyXG4gICAgICAgIHlvdXR1YmU6ICcvJyxcclxuICAgICAgICBmYWNlYm9vazogJy8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWVtYmVySW1hZ2U6ICcvaW1hZ2VzL21lbWJlcl8xLmpwZWcnLFxyXG4gICAgICBtZW1iZXJOYW1lOiAnTWVsb24gQnVsZ2VyeScsXHJcbiAgICAgIG1lbWJlckRlc2lnbmF0aW9uOiAnUHJvZHVjdCBEZXNpZ25lcicsXHJcbiAgICAgIG1lbWJlclNvY2lhbDoge1xyXG4gICAgICAgIGxpbmtlZGluOiAnLycsXHJcbiAgICAgICAgdHdpdHRlcjogJy8nLFxyXG4gICAgICAgIHlvdXR1YmU6ICcvJyxcclxuICAgICAgICBmYWNlYm9vazogJy8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdO1xyXG4gIC8qKiBTbGlkZXIgU2V0dGluZ3MgKiovXHJcbiAgY29uc3QgU2xpY2tBcnJvd0xlZnQgPSAoeyBjdXJyZW50U2xpZGUsIHNsaWRlQ291bnQsIC4uLnByb3BzIH0pID0+IChcclxuICAgIDxkaXZcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICdzbGljay1wcmV2IHNsaWNrLWFycm93JyArIChjdXJyZW50U2xpZGUgPT09IDAgPyAnIHNsaWNrLWRpc2FibGVkJyA6ICcnKVxyXG4gICAgICB9XHJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgIGFyaWEtZGlzYWJsZWQ9e2N1cnJlbnRTbGlkZSA9PT0gMCA/IHRydWUgOiBmYWxzZX1cclxuICAgID5cclxuICAgICAgPEljb24gaWNvbj1cImJpOmFycm93LWxlZnRcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICBjb25zdCBTbGlja0Fycm93UmlnaHQgPSAoeyBjdXJyZW50U2xpZGUsIHNsaWRlQ291bnQsIC4uLnByb3BzIH0pID0+IChcclxuICAgIDxkaXZcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICdzbGljay1uZXh0IHNsaWNrLWFycm93JyArXHJcbiAgICAgICAgKGN1cnJlbnRTbGlkZSA9PT0gc2xpZGVDb3VudCAtIDEgPyAnIHNsaWNrLWRpc2FibGVkJyA6ICcnKVxyXG4gICAgICB9XHJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgIGFyaWEtZGlzYWJsZWQ9e2N1cnJlbnRTbGlkZSA9PT0gc2xpZGVDb3VudCAtIDEgPyB0cnVlIDogZmFsc2V9XHJcbiAgICA+XHJcbiAgICAgIDxJY29uIGljb249XCJiaTphcnJvdy1yaWdodFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIHByZXZBcnJvdzogPFNsaWNrQXJyb3dMZWZ0IC8+LFxyXG4gICAgbmV4dEFycm93OiA8U2xpY2tBcnJvd1JpZ2h0IC8+LFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA1MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gY2xhc3NOYW1lPVwiY3MtZ2FwLTI0IGNzLWFycm93X3N0eWxlMlwiPlxyXG4gICAgICB7dGVhbURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxEaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8VGVhbVxyXG4gICAgICAgICAgICBtZW1iZXJJbWFnZT17aXRlbS5tZW1iZXJJbWFnZX1cclxuICAgICAgICAgICAgbWVtYmVyTmFtZT17aXRlbS5tZW1iZXJOYW1lfVxyXG4gICAgICAgICAgICBtZW1iZXJEZXNpZ25hdGlvbj17aXRlbS5tZW1iZXJEZXNpZ25hdGlvbn1cclxuICAgICAgICAgICAgbWVtYmVyU29jaWFsPXtpdGVtLm1lbWJlclNvY2lhbH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9EaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9TbGlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSWNvbiIsIlNsaWRlciIsIkRpdiIsIlRlYW0iLCJUZWFtU2xpZGVyIiwidGVhbURhdGEiLCJtZW1iZXJJbWFnZSIsIm1lbWJlck5hbWUiLCJtZW1iZXJEZXNpZ25hdGlvbiIsIm1lbWJlclNvY2lhbCIsImxpbmtlZGluIiwidHdpdHRlciIsInlvdXR1YmUiLCJmYWNlYm9vayIsIlNsaWNrQXJyb3dMZWZ0IiwiY3VycmVudFNsaWRlIiwic2xpZGVDb3VudCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXJpYS1oaWRkZW4iLCJhcmlhLWRpc2FibGVkIiwiaWNvbiIsIlNsaWNrQXJyb3dSaWdodCIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiYXJyb3dzIiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Slider/TeamSlider.jsx\n"));

/***/ })

});