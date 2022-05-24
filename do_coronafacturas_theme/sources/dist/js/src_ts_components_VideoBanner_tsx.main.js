"use strict";
(self["webpackChunkdama"] = self["webpackChunkdama"] || []).push([["src_ts_components_VideoBanner_tsx"],{

/***/ "./src/ts/components/GoUp.tsx":
/*!************************************!*\
  !*** ./src/ts/components/GoUp.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-locomotive-scroll */ "./node_modules/react-locomotive-scroll/module/index.js");

// Import Libraries

var GoUp = function () {
    // const optionScroll:ScrollToOptions = {
    //     top: 0,
    //     left: 0,
    //     behavior: 'smooth'
    // }
    // GO TO UP
    function goToUp(e) {
        e.preventDefault();
        scroll.scrollTo('top');
        // window.scroll(optionScroll)
    }
    // VARIABLES
    var scroll = (0,react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_1__.useLocomotiveScroll)().scroll;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { className: "goUp", onClick: function (e) { return goToUp(e); } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "goUp__arrow" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "goUp__text" }, "Volver al inicio")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoUp);


/***/ }),

/***/ "./src/ts/components/VideoBanner.tsx":
/*!*******************************************!*\
  !*** ./src/ts/components/VideoBanner.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _GoUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoUp */ "./src/ts/components/GoUp.tsx");
/* harmony import */ var _utilities_revealText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/revealText */ "./src/ts/utilities/revealText.tsx");

// Import Components

// Import Utilities

var VideoBanner = function () {
    // REF
    var textToReveal = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    // STATE
    var title = react__WEBPACK_IMPORTED_MODULE_0__.useState('TE INVITAMOS A VISITAR NUESTRO NATURAL LOUNGE EN GALAPAGOS')[0];
    // USE EFFECT
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        (0,_utilities_revealText__WEBPACK_IMPORTED_MODULE_2__.revealText)(textToReveal);
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { className: "videoBanner" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "videoBanner__video" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", { src: "https://player.vimeo.com/video/604319813?h=7eddb80078&autopause=false&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&background=1", allow: "autoplay; fullscreen; picture-in-picture", className: "landscapeBox__video__iframe" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "videoBanner__container" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "videoBanner__btnBox" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "#", className: "videoBanner__btn" }, "Viajar")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { className: "videoBanner__title", ref: textToReveal, dangerouslySetInnerHTML: (0,_utilities_revealText__WEBPACK_IMPORTED_MODULE_2__.encodedWord)(title) }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GoUp__WEBPACK_IMPORTED_MODULE_1__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoBanner);


/***/ })

}]);
//# sourceMappingURL=src_ts_components_VideoBanner_tsx.main.js.map