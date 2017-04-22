"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyIfIsArr = function (f) { return function (a) { return Array.isArray(a) ? f(a) : a; }; };
exports.condArr = function (a) { return a.map(exports.applyIfIsArr(function (i) { return i[0] ? i[1] : false; })).filter(function (i) { return i; }); };
