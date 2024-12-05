// const input = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`

import { input } from "./input"

const split = input.split('\n')
let sumOfMutalItems = 0
const determineScore = (letter: string) => (letter == letter.toUpperCase() ? 26 : 0) + parseInt(letter, 36) - 9
split.forEach(x => {
    var sackSize = x.length / 2
    let sackOne = [], i = 0
    for (let y of x.split('')) {
        if (i < sackSize) {
            sackOne.push(y)
        } else if (sackOne.includes(y)) {
            sumOfMutalItems += determineScore(y)
            break
        }
        i++
    }
})
//answer1
console.log(sumOfMutalItems)

sumOfMutalItems = 0
for (let i = 0; i < split.length; i += 3) {
    const s1 = split[i].split(""), s2 = split[i + 1].split(""), s3 = split[i + 2].split("")
    for (let x of s1) {
        if (s2.includes(x) && s3.includes(x)) {
            sumOfMutalItems += determineScore(x)
            break
        }
    }
}
//answer2
console.log(sumOfMutalItems)