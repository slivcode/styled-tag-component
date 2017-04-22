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
var react_1 = require("react");
var cond_arr_1 = require("../util/cond-arr");
var partition_obj_1 = require("../util/partition-obj");
var map_values_1 = require("../util/map-values");
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
