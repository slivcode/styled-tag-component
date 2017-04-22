"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partitionObj = function (l) { return function (o) {
    var isL = function (k) { return l.indexOf(k) !== -1; };
    var a = {}, b = {};
    Object.keys(o).forEach(function (k) { return isL(k) ? (a[k] = o[k]) : (b[k] = o[k]); });
    return [a, b];
}; };
