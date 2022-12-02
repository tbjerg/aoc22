"use strict";
exports.__esModule = true;
var day2input_1 = require("./day2input");
// const input = `A Y
// B X
// C Z`
var split = day2input_1.input.split('\n');
var loss = function (input) { return input == 'X' ? 1 : input == 'Y' ? 2 : 3; };
var draw = function (input) { return loss(input) + 3; };
var win = function (input) { return loss(input) + 6; };
var guide = {
    A: function (input) { return (input == 'X' ? draw : input == 'Y' ? win : loss)(input); },
    B: function (input) { return (input == 'X' ? loss : input == 'Y' ? draw : win)(input); },
    C: function (input) { return (input == 'X' ? win : input == 'Y' ? loss : draw)(input); }
};
var total = 0;
split.forEach(function (x, i) {
    var dirs = x.split(" ");
    if (dirs.length == 2) {
        var result = guide[dirs[0]](dirs[1]);
        if (i < 20)
            console.log(dirs[0], dirs[1], result);
        total += result;
    }
});
//answer1
console.log(total);
//x = lose
//y = draw
//z = win
var guide2 = {
    A: function (input) { return input == 'X' ? loss('Z') : input == 'Y' ? draw('X') : win('Y'); },
    B: function (input) { return input == 'X' ? loss('X') : input == 'Y' ? draw('Y') : win('Z'); },
    C: function (input) { return input == 'X' ? loss('Y') : input == 'Y' ? draw('Z') : win('X'); }
};
var total2 = 0;
split.forEach(function (x, i) {
    var dirs = x.split(" ");
    if (dirs.length == 2) {
        var result2 = guide2[dirs[0]](dirs[1]);
        if (i < 20)
            console.log(dirs[0], dirs[1], result2);
        total2 += result2;
    }
});
//answer2
console.log(total2);
