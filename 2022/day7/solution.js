"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = require("./input");
var answer = function (input) {
    var popCurrFile = function (currFile) {
        var tempArr = [];
        currFile.split("_").forEach(function (x) {
            if (!!x.trim())
                tempArr.push(x);
        });
        tempArr.pop();
        return tempArr.toString().replaceAll(",", "_");
    };
    var addTotalForPath = function (total, path) {
        var tempArr = [];
        path.split("_").forEach(function (x) {
            if (!!x.trim())
                tempArr.push(x);
        });
        if (tempArr.length <= 1)
            return;
        tempArr.pop();
        var newPath = tempArr.toString().replaceAll(",", "_");
        dirWithSizes[newPath].total += total;
        addTotalForPath(total, newPath);
    };
    var dirWithSizes = {};
    var currFile = "", i = 0;
    for (var _i = 0, _a = input.split("\n"); _i < _a.length; _i++) {
        var x = _a[_i];
        i++;
        var xSplit = x.split(" ");
        if (xSplit[0] == "$") { //is command
            if (xSplit[1] == "ls")
                continue;
            if (xSplit[1] == "cd") {
                if (xSplit[2] == "..")
                    currFile = popCurrFile(currFile);
                else {
                    if (currFile == "")
                        currFile = "".concat(xSplit[2]);
                    else
                        currFile += "_".concat(xSplit[2]);
                    if (!dirWithSizes[currFile]) {
                        dirWithSizes["".concat(currFile)] = { total: 0, files: [] };
                    }
                }
                continue;
            }
            throw new Error("Step missing");
        }
        if (xSplit[0] == "dir")
            continue;
        dirWithSizes[currFile].total += Number(xSplit[0]);
        addTotalForPath(Number(xSplit[0]), currFile);
        dirWithSizes[currFile].files.push(xSplit[1]);
    }
    var total = 0;
    Object.keys(dirWithSizes).forEach(function (x) {
        if (dirWithSizes[x].total <= 100000)
            total += dirWithSizes[x].total;
    });
    console.log("answer1", total);
    var rootDir = "/";
    var maxFileSize = 70000000;
    var updateSpace = 30000000;
    var spaceToFreeUp = updateSpace - (maxFileSize - dirWithSizes[rootDir].total);
    var answer2 = { path: "", size: 0 };
    Object.keys(dirWithSizes).forEach(function (key) {
        var size = dirWithSizes[key].total;
        if (answer2.size == 0) {
            answer2.path = key;
            answer2.size = dirWithSizes[key].total;
        }
        else if (size > spaceToFreeUp && size < answer2.size) {
            answer2.path = key;
            answer2.size = size;
        }
    });
    console.log("answer2", answer2);
};
answer(input_1.input);
