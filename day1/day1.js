"use strict";
exports.__esModule = true;
var day1input_1 = require("./day1input");
var testInput = "1000\n2000\n3000\n\n4000\n\n5000\n6000\n\n7000\n8000\n9000\n\n10000";
var split = day1input_1.input.split("\n");
var dict = {};
var k = 1;
split.forEach(function (x, i) {
    if (!dict[k])
        dict[k] = Number(x);
    else if (x != "")
        dict[k] += Number(x);
    else
        k++;
});
var h1 = 0, h2 = 0, h3 = 0;
Object.keys(dict).forEach(function (key) {
    if (dict[key] > h1) {
        h3 = h2;
        h2 = h1;
        h1 = dict[key];
    }
    else if (dict[key] > h2) {
        h3 = h2;
        h2 = dict[key];
    }
    else if (dict[key] > h3)
        h3 = dict[key];
});
//answer 1
console.log(h1);
//answer 2
console.log(h1 + h2 + h3);
