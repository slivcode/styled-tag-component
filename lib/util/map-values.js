"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapValues = function (f) { return function (o) {
    var t = {};
    for (var k in o)
        t[k] = f(o[k]);
    return t;
}; };
