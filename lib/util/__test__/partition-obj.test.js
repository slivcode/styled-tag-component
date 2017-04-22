"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var partition_obj_1 = require("../partition-obj");
test('partition obj test', function () {
    var t = partition_obj_1.partitionObj(['a', 'b'])({ a: 1, b: 2, c: 3, d: 4 });
    expect(t).toEqual([{ a: 1, b: 2 }, { c: 3, d: 4 }]);
});
