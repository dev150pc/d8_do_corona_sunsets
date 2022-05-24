"use strict";
(self["webpackChunkdama"] = self["webpackChunkdama"] || []).push([["src_ts_components_BigPhoto_tsx"],{

/***/ "./src/ts/components/BigPhoto.tsx":
/*!****************************************!*\
  !*** ./src/ts/components/BigPhoto.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utilities_revealText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/revealText */ "./src/ts/utilities/revealText.tsx");

// Import Utilities

var BigPhoto = function () {
    // REF
    var textToReveal = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    // STATE
    var title = react__WEBPACK_IMPORTED_MODULE_0__.useState('TAN NATURAL QUE hicimos UN LOUNGE EN EL LUGAR MÁS NATURAL DEL MUNDO')[0];
    // USE EFFECT
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        (0,_utilities_revealText__WEBPACK_IMPORTED_MODULE_1__.revealText)(textToReveal);
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { className: "bigPhoto" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("picture", { className: "bigPhoto__bg" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: "https://eccorona.s3.us-east-2.amazonaws.com/imgs/bg-beach.jpg", alt: "", className: "bigPhoto__bg__img" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bigPhoto__container" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bigPhoto__box max450" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: "bigPhoto__title", ref: textToReveal, dangerouslySetInnerHTML: (0,_utilities_revealText__WEBPACK_IMPORTED_MODULE_1__.encodedWord)(title) })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BigPhoto);


/***/ })

}]);
//# sourceMappingURL=src_ts_components_BigPhoto_tsx.main.js.map