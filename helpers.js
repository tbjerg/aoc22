"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
var range = function (start, end) {
    var length = end + 1 - start;
    return Array.from({ length: length }, function (_, i) { return start + i; });
};
exports.range = range;
