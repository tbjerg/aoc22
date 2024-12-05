"use strict";
exports.__esModule = true;
var input_1 = require("./input");
var testInput = "3   4\n4   3\n2   5\n1   3\n3   9\n3   3";
var buildLists = function (input) {
    var left = [];
    var right = [];
    input
        .split('\n')
        .forEach(function (x) {
        var split = x.split(' ');
        left.push(Number(split[0]));
        right.push(Number(split[split.length - 1]));
    });
    return { left: left, right: right };
};
var smallestWithIndex = function (arr) {
    var idx = 0;
    var val = arr.reduce(function (pv, cv, i) {
        if (i == 0)
            pv;
        if (pv < cv)
            return pv;
        idx = i;
        return cv;
    }, arr[0]);
    return { val: val, idx: idx };
};
var counter = 0;
var findSmallest = function (_a) {
    var left = _a.left, right = _a.right;
    if (left.length == 0 && right.length == 0)
        return;
    var foundLeft = smallestWithIndex(left);
    var foundRight = smallestWithIndex(right);
    counter += Math.abs(foundLeft.val - foundRight.val);
    return findSmallest({ left: left.filter(function (_, i) { return i != foundLeft.idx; }), right: right.filter(function (_, i) { return i != foundRight.idx; }) });
};
findSmallest(buildLists(input_1.input));
console.log(counter);
