"use strict";
// const setup =
//     `    [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 `
Object.defineProperty(exports, "__esModule", { value: true });
// const operations = `move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2`
var input_1 = require("./input");
//would have finished ages ago.. but input was incorrect the whole time..
var answer1 = function (setup, operations) {
    var stacks = {};
    setup.split("\n").forEach(function (x) {
        for (var i = 0; i < x.length; i += 4) {
            var index_1 = (i / 4) + 1;
            var member = x[i] + x[i + 1] + x[i + 2];
            if (member.trim() != "") {
                if (!stacks[index_1])
                    stacks[index_1] = [member];
                else
                    stacks[index_1].push(member);
            }
        }
    });
    Object.keys(stacks).forEach(function (x) {
        if (Number.parseInt(stacks[x][stacks[x].length - 1]))
            stacks[x].pop();
        stacks[x].reverse();
    });
    var createOperation = function (op) {
        var split = op.split(" ");
        return [Number(split[1]), Number(split[3]), Number(split[5])];
    };
    var index = 0;
    for (var _i = 0, _a = operations.split("\n"); _i < _a.length; _i++) {
        var x = _a[_i];
        var operation = createOperation(x);
        var i = 0;
        while (i < operation[0]) {
            stacks[operation[2]].push(stacks[operation[1]].pop());
            i++;
        }
        index++;
    }
    var answer = "";
    Object.keys(stacks).forEach(function (x) {
        answer += stacks[x][stacks[x].length - 1][1];
    });
    console.log(answer);
};
answer1(input_1.setup, input_1.operations);
var answer2 = function (setup, operations) {
    var _a;
    var stacks = {};
    setup.split("\n").forEach(function (x) {
        for (var i = 0; i < x.length; i += 4) {
            var index_2 = (i / 4) + 1;
            var member = x[i] + x[i + 1] + x[i + 2];
            if (member.trim() != "") {
                if (!stacks[index_2])
                    stacks[index_2] = [member];
                else
                    stacks[index_2].push(member);
            }
        }
    });
    Object.keys(stacks).forEach(function (x) {
        if (Number.parseInt(stacks[x][stacks[x].length - 1]))
            stacks[x].pop();
        stacks[x].reverse();
    });
    var createOperation = function (op) {
        var split = op.split(" ");
        return [Number(split[1]), Number(split[3]), Number(split[5])];
    };
    var index = 0;
    for (var _i = 0, _b = operations.split("\n"); _i < _b.length; _i++) {
        var x = _b[_i];
        var operation = createOperation(x);
        var i = 0;
        var pops = [];
        while (i < operation[0]) {
            pops.push(stacks[operation[1]].pop());
            i++;
        }
        pops.reverse();
        (_a = stacks[operation[2]]).push.apply(_a, pops);
        index++;
    }
    var answer = "";
    Object.keys(stacks).forEach(function (x) {
        answer += stacks[x][stacks[x].length - 1][1];
    });
    console.log(answer);
};
answer2(input_1.setup, input_1.operations);
