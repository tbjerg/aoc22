import { input } from "./day2input"
// const input = `A Y
// B X
// C Z`

const split = input.split('\n')

const loss = (input) => input == 'X' ? 1 : input == 'Y' ? 2 : 3
const draw = (input) => loss(input) + 3
const win = (input) => loss(input) + 6
const guide = {
    A: (input) => (input == 'X' ? draw : input == 'Y' ? win : loss)(input),
    B: (input) => (input == 'X' ? loss : input == 'Y' ? draw : win)(input),
    C: (input) => (input == 'X' ? win : input == 'Y' ? loss : draw)(input),
}

let total = 0
split.forEach((x, i) => {
    const dirs = x.split(" ")
    if (dirs.length == 2) {
        const result = guide[dirs[0]](dirs[1])
        if (i < 20)
            console.log(dirs[0], dirs[1], result)
        total += result
    }
})
//answer1
console.log(total)

//x = lose
//y = draw
//z = win
const guide2 = {
    A: (input) => input == 'X' ? loss('Z') : input == 'Y' ? draw('X') : win('Y'),
    B: (input) => input == 'X' ? loss('X') : input == 'Y' ? draw('Y') : win('Z'),
    C: (input) => input == 'X' ? loss('Y') : input == 'Y' ? draw('Z') : win('X'),
}

let total2 = 0
split.forEach((x, i) => {
    const dirs = x.split(" ")
    if (dirs.length == 2) {
        const result2 = guide2[dirs[0]](dirs[1])
        if (i < 20)
            console.log(dirs[0], dirs[1], result2)
        total2 += result2
    }
})
//answer2
console.log(total2)