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
var test = "R 4\nU 4\nL 3\nD 1\nR 4\nD 1\nL 5\nR 2";
var answer1 = function (inp) {
    var input = inp.split("\n");
    var points = [{ x: 0, y: 0 }];
    var hPos = { x: 0, y: 0 };
    var tPos = { x: 0, y: 0 };
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var x = input_1[_i];
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
// answer1(input)
var answer2 = function (inp) {
    var input = inp.split("\n");
    var points = [{ x: 0, y: 0 }];
    var hPos = new Array(10).fill({ x: 0, y: 0 });
    for (var _i = 0, input_2 = input; _i < input_2.length; _i++) {
        var x = input_2[_i];
        var operation = x.split(" ");
        var moves = Array(Number(operation[1]));
        console.log(x);
        for (var _a = 0, moves_2 = moves; _a < moves_2.length; _a++) {
            var _ = moves_2[_a];
            var hLength = 0;
            var h = hPos.shift();
            switch (operation[0]) {
                case "U":
                    hLength = hPos.unshift({ x: h.x, y: h.y - 1 });
                    break;
                case "D":
                    hLength = hPos.unshift({ x: h.x, y: h.y + 1 });
                    break;
                case "L":
                    hLength = hPos.unshift({ x: h.x - 1, y: h.y });
                    break;
                case "R":
                    hLength = hPos.unshift({ x: h.x + 1, y: h.y });
                    break;
            }
            console.log(hPos);
            for (var i = 1; i < hPos.length; i++) {
                var diagMove = Math.abs(hPos[i - 1].x - hPos[i].x) == 1 && Math.abs(hPos[i - 1].y - hPos[i].y) == 2 || Math.abs(hPos[i - 1].x - hPos[i].x) == 2 && Math.abs(hPos[i - 1].y - hPos[i].y) == 1;
                if (diagMove) {
                    hPos[i].x += operation[0] == "R" ? 1 : hPos[i].x > hPos[i - 1].x ? 1 : -1;
                    hPos[i].y += operation[0] == "U" ? 1 : hPos[i].y < hPos[i - 1].y ? 1 : -1;
                }
                else {
                    if (Math.abs(hPos[i - 1].x - hPos[i].x) > 1 && Math.abs(hPos[i - 1].y - hPos[i].y) == 0)
                        hPos[i].x += operation[0] == "R" ? 1 : -1;
                    if (Math.abs(hPos[i - 1].y - hPos[i].y) > 1 && Math.abs(hPos[i - 1].x - hPos[i].x) == 0)
                        hPos[i].y += operation[0] == "U" ? 1 : -1;
                }
            }
        }
    }
};
answer2(test);
