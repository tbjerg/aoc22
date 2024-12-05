"use strict";
exports.__esModule = true;
var input_1 = require("./input");
var testInput = "7 6 4 2 1\n1 2 7 8 9\n9 7 6 2 1\n1 3 2 4 5\n8 6 4 4 1\n1 3 6 7 9";
var leveler = function (input) { return input.split('\n').map(function (x) { return x.split(' ').map(function (x) { return Number(x); }); }); };
var counter = 0;
var stacker = function (arr) {
    arr.forEach(function (report) {
        var valid = false;
        var trend;
        for (var i = 1; i < report.length; i++) {
            if (!trend)
                trend = report[i - 1] > report[i] ? "dec" : "inc";
            var distance = Math.abs(report[i - 1] - report[i]);
            if (distance < 1 || distance > 3) {
                valid = false;
                break;
            }
            switch (trend) {
                case "dec":
                    valid = report[i] < report[i - 1];
                    break;
                case "inc":
                    valid = report[i] > report[i - 1];
                    break;
            }
            if (!valid)
                break;
        }
        if (valid)
            counter++;
    });
};
stacker(leveler(input_1.input));
console.log(counter);
