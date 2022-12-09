"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = require("./input");
var test = "R 4\nU 4\nL 3\nD 1\nR 4\nD 1\nL 5\nR 2";
var answer1 = function (inp) {
    var input = inp.split("\n");
    var points = [{ x: 0, y: 0 }];
    var hPos = { x: 0, y: 0 };
    var tPos = { x: 0, y: 0 };
    for (var _i = 0, input_2 = input; _i < input_2.length; _i++) {
        var x = input_2[_i];
        var operation = x.split(" ");
        var moves = Array(Number(operation[1]));
        for (var _a = 0, moves_1 = moves; _a < moves_1.length; _a++) {
            var _ = moves_1[_a];
            switch (operation[0]) {
                case "U":
                    hPos.y += +1;
                    break;
                case "D":
                    hPos.y -= 1;
                    break;
                case "L":
                    hPos.x -= 1;
                    break;
                case "R":
                    hPos.x += 1;
                    break;
            }
            var diagMove = Math.abs(hPos.x - tPos.x) == 1 && Math.abs(hPos.y - tPos.y) == 2 || Math.abs(hPos.x - tPos.x) == 2 && Math.abs(hPos.y - tPos.y) == 1;
            if (diagMove) {
                tPos.x += operation[0] == "R" ? 1 : tPos.x < hPos.x ? 1 : -1;
                tPos.y += operation[0] == "U" ? 1 : tPos.y < hPos.y ? 1 : -1;
            }
            else {
                if (Math.abs(hPos.x - tPos.x) > 1)
                    tPos.x += operation[0] == "R" ? 1 : -1;
                if (Math.abs(hPos.y - tPos.y) > 1)
                    tPos.y += operation[0] == "U" ? 1 : -1;
            }
            if (!points.find(function (z) { return z.x == tPos.x && z.y == tPos.y; }))
                points.push(__assign({}, tPos));
        }
    }
    console.log(points.length);
};
answer1(input_1.input);
var answer2 = function (inp) {
    var input = inp.split("\n");
    var points = [{ x: 0, y: 0 }];
    var hPos = [{ x: 0, y: 0 }]; //hPos is now an linked list
    var tPos = { x: 0, y: 0 };
    var moveCounter = 0;
    for (var _i = 0, input_3 = input; _i < input_3.length; _i++) {
        var x = input_3[_i];
        var operation = x.split(" ");
        var moves = Array(Number(operation[1]));
        for (var _a = 0, moves_2 = moves; _a < moves_2.length; _a++) {
            var _ = moves_2[_a];
            switch (operation[0]) {
                case "U":
                    hPos.push({ x: hPos[hPos.length - 1].x, y: hPos[hPos.length - 1].y - 1 });
                    break;
                case "D":
                    hPos.push({ x: hPos[hPos.length - 1].x, y: hPos[hPos.length - 1].y + 1 });
                    break;
                case "L":
                    hPos.push({ x: hPos[hPos.length - 1].x - 1, y: hPos[hPos.length - 1].y });
                    break;
                case "R":
                    hPos.push({ x: hPos[hPos.length - 1].x + 1, y: hPos[hPos.length - 1].y });
                    break;
            }
            if (hPos.length > 10) {
                hPos.shift();
                var diagMove = Math.abs(hPos[0].x - tPos.x) == 1 && Math.abs(hPos[0].y - tPos.y) == 2 || Math.abs(hPos[0].x - tPos.x) == 2 && Math.abs(hPos[0].y - tPos.y) == 1;
                if (diagMove) {
                    tPos.x += operation[0] == "R" ? 1 : tPos.x < hPos[0].x ? 1 : -1;
                    tPos.y += operation[0] == "U" ? 1 : tPos.y < hPos[0].y ? 1 : -1;
                }
                else {
                    if (Math.abs(hPos[0].x - tPos.x) > 1)
                        tPos.x += operation[0] == "R" ? 1 : -1;
                    if (Math.abs(hPos[0].y - tPos.y) > 1)
                        tPos.y += operation[0] == "U" ? 1 : -1;
                }
                if (!points.find(function (z) { return z.x == tPos.x && z.y == tPos.y; }))
                    points.push(__assign({}, tPos));
            }
        }
    }
    console.log(points.length);
};
answer2(test);
