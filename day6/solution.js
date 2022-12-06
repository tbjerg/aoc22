"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = require("./input");
var answer = function (bufferLength) {
    var buffer = [], charCount = 0;
    var _loop_1 = function (char) {
        charCount++;
        if (buffer.length == bufferLength) {
            buffer.shift();
            buffer.push(char);
        }
        else {
            buffer.push(char);
            return "continue";
        }
        var local = [];
        buffer.forEach(function (x) {
            if (!local.includes(x))
                local.push(x);
        });
        if (local.length == bufferLength)
            return "break";
    };
    for (var _i = 0, _a = input_1.input.split(""); _i < _a.length; _i++) {
        var char = _a[_i];
        var state_1 = _loop_1(char);
        if (state_1 === "break")
            break;
    }
    console.log(charCount);
};
//answer1
answer(4);
//answer2
answer(14);
