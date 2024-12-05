"use strict";
// const input = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = require("./input");
var split = input_1.input.split('\n');
var sumOfMutalItems = 0;
var determineScore = function (letter) { return (letter == letter.toUpperCase() ? 26 : 0) + parseInt(letter, 36) - 9; };
split.forEach(function (x) {
    var sackSize = x.length / 2;
    var sackOne = [], i = 0;
    for (var _i = 0, _a = x.split(''); _i < _a.length; _i++) {
        var y = _a[_i];
        if (i < sackSize) {
            sackOne.push(y);
        }
        else if (sackOne.includes(y)) {
            sumOfMutalItems += determineScore(y);
            break;
        }
        i++;
    }
});
//answer1
console.log(sumOfMutalItems);
sumOfMutalItems = 0;
for (var i = 0; i < split.length; i += 3) {
    var s1 = split[i].split(""), s2 = split[i + 1].split(""), s3 = split[i + 2].split("");
    for (var _i = 0, s1_1 = s1; _i < s1_1.length; _i++) {
        var x = s1_1[_i];
        if (s2.includes(x) && s3.includes(x)) {
            sumOfMutalItems += determineScore(x);
            break;
        }
    }
}
//answer2
console.log(sumOfMutalItems);
