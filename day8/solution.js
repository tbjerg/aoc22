"use strict";
// const input =
Object.defineProperty(exports, "__esModule", { value: true });
//     `30373
// 25512
// 65332
// 33549
// 35390`
var input_1 = require("./input");
var arr = [];
input_1.input.split("\n").forEach(function (x, i) {
    arr[i] = x.split("").map(function (y) { return Number(y); });
});
var isAtEdge = function (arr, idx) {
    return idx == 0 || idx == arr.length - 1;
};
var answer1 = function () {
    var isTreeVisibleFromLeft = function (treeToCompare, row, rowIdx) {
        if (rowIdx < 0)
            return true;
        if (treeToCompare > row[rowIdx])
            return isTreeVisibleFromLeft(treeToCompare, row, rowIdx - 1);
        return false;
    };
    var isTreeVisibleFromRight = function (treeToCompare, row, rowIdx) {
        if (rowIdx > row.length - 1)
            return true;
        if (treeToCompare > row[rowIdx])
            return isTreeVisibleFromRight(treeToCompare, row, rowIdx + 1);
        return false;
    };
    var isTreeVisibleFromAbove = function (treeToCompare, matrix, matrixIdx, rowIdx) {
        if (matrixIdx < 0)
            return true;
        if (treeToCompare > matrix[matrixIdx][rowIdx])
            return isTreeVisibleFromAbove(treeToCompare, matrix, matrixIdx - 1, rowIdx);
        return false;
    };
    var isTreeVisibleFromBelow = function (treeToCompare, matrix, matrixIdx, rowIdx) {
        if (matrixIdx > matrix.length - 1)
            return true;
        if (treeToCompare > matrix[matrixIdx][rowIdx])
            return isTreeVisibleFromBelow(treeToCompare, matrix, matrixIdx + 1, rowIdx);
        return false;
    };
    var i = 0, j = 0, total = ((arr.length - 1) * 2) + ((arr[0].length - 1) * 2);
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var row = arr_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var tree = row_1[_a];
            //is tree at an edge?
            if (isAtEdge(arr, i) || isAtEdge(row, j)) {
                j++;
                continue;
            }
            //recursively traverse toward the edge for each cardinals..
            total += isTreeVisibleFromLeft(tree, row, j - 1) || isTreeVisibleFromRight(tree, row, j + 1) || isTreeVisibleFromAbove(tree, arr, i - 1, j) || isTreeVisibleFromBelow(tree, arr, i + 1, j) ? 1 : 0;
            j++;
        }
        j = 0;
        i++;
    }
    console.log(total);
};
var answer2 = function () {
    var determineLeftScore = function (treeToCompare, row, rowIdx, score) {
        if (rowIdx < 0)
            return score;
        if (treeToCompare <= row[rowIdx])
            return score + 1;
        return determineLeftScore(treeToCompare, row, rowIdx - 1, score + 1);
    };
    var determineRightScore = function (treeToCompare, row, rowIdx, score) {
        if (rowIdx > row.length - 1)
            return score;
        if (treeToCompare <= row[rowIdx])
            return score + 1;
        return determineRightScore(treeToCompare, row, rowIdx + 1, score + 1);
    };
    var determineUpScore = function (treeToCompare, matrix, matrixIdx, rowIdx, score) {
        if (matrixIdx < 0)
            return score;
        if (treeToCompare <= matrix[matrixIdx][rowIdx])
            return score + 1;
        return determineUpScore(treeToCompare, matrix, matrixIdx - 1, rowIdx, score + 1);
    };
    var determineDownScore = function (treeToCompare, matrix, matrixIdx, rowIdx, score) {
        if (matrixIdx > matrix.length - 1)
            return score;
        if (treeToCompare <= matrix[matrixIdx][rowIdx])
            return score + 1;
        return determineDownScore(treeToCompare, matrix, matrixIdx + 1, rowIdx, score + 1);
    };
    var i = 0, j = 0, bestScenicScore = 0;
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var row = arr_2[_i];
        for (var _a = 0, row_2 = row; _a < row_2.length; _a++) {
            var tree = row_2[_a];
            //is tree at an edge?
            if (isAtEdge(arr, i) || isAtEdge(row, j)) {
                j++;
                continue;
            }
            //recursively traverse toward the edge for each cardinals..
            var scenicScore = determineLeftScore(tree, row, j - 1, 0) * determineRightScore(tree, row, j + 1, 0) * determineUpScore(tree, arr, i - 1, j, 0) * determineDownScore(tree, arr, i + 1, j, 0);
            if (scenicScore > bestScenicScore)
                bestScenicScore = scenicScore;
            j++;
        }
        j = 0;
        i++;
    }
    console.log(bestScenicScore);
};
//286200 too low
answer2();
