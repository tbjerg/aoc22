"use strict";
// const input = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8`
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
var input_1 = require("./input");
var split = input_1.input.split("\n");
var answer1 = function () {
    var containedPairs = 0;
    split.forEach(function (pair) {
        var ranges = pair.split(",");
        var r1 = ranges[0].split("-"), r2 = ranges[1].split("-");
        r1 = (0, helpers_1.range)(Number(r1[0]), Number(r1[1])), r2 = (0, helpers_1.range)(Number(r2[0]), Number(r2[1]));
        if (r1.every(function (x) { return r2.includes(x); }) || r2.every(function (x) { return r1.includes(x); }))
            containedPairs++;
    });
    //answer 1
    console.log(containedPairs);
};
answer1();
var answer2 = function () {
    var result = 0;
    split.forEach(function (pair) {
        var ranges = pair.split(",");
        var r1 = ranges[0].split("-"), r2 = ranges[1].split("-");
        r1 = (0, helpers_1.range)(Number(r1[0]), Number(r1[1])), r2 = (0, helpers_1.range)(Number(r2[0]), Number(r2[1]));
        if (r1.filter(function (x) { return r2.includes(x); }).length > 0 || r2.filter(function (x) { return r1.includes(x); }).length > 0) {
            result++;
        }
    });
    //answer 2
    console.log(result);
};
answer2();
