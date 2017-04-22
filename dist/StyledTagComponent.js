(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["StyledTagComponent"] = factory(require("React"));
	else
		root["StyledTagComponent"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var styled_tag_component_1 = __webpack_require__(1);
exports.default = styled_tag_component_1.StyledTagComponent;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(5);
var cond_arr_1 = __webpack_require__(2);
var partition_obj_1 = __webpack_require__(4);
var map_values_1 = __webpack_require__(3);
exports.StyledTagComponent = function (a) {
    var _a = a.tag, tag = _a === void 0 ? 'div' : _a, _b = a.ep, ep = _b === void 0 ? [] : _b, cn = a.cn, _s = a.style, nullIf = a.nullIf;
    return function (p) {
        var _a = partition_obj_1.partitionObj(ep.concat('innerRef'))(p), eP = _a[0], dP = _a[1];
        if (nullIf && nullIf(eP))
            return null;
        var className = cn ? cond_arr_1.condArr(cn(eP)).join(' ') : null;
        var style = _s && map_values_1.mapValues(cond_arr_1.applyIfIsArr(function (v) {
            var t = v.find(function (_a) {
                var b = _a[0];
                return b;
            });
            return (t && t[1]) || null;
        }))(_s(eP));
        return react_1.createElement(tag, __assign({ className: className, style: style, ref: eP.innerRef }, dP));
    };
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.applyIfIsArr = function (f) { return function (a) { return Array.isArray(a) ? f(a) : a; }; };
exports.condArr = function (a) { return a.map(exports.applyIfIsArr(function (i) { return i[0] ? i[1] : false; })).filter(function (i) { return i; }); };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mapValues = function (f) { return function (o) {
    var t = {};
    for (var k in o)
        t[k] = f(o[k]);
    return t;
}; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.partitionObj = function (l) { return function (o) {
    var isL = function (k) { return l.indexOf(k) !== -1; };
    var a = {}, b = {};
    Object.keys(o).forEach(function (k) { return isL(k) ? (a[k] = o[k]) : (b[k] = o[k]); });
    return [a, b];
}; };


/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function() { module.exports = global["React"]; }());

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});