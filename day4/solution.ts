// const input = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8`

import { range } from "../helpers"
import { input } from "./input"

const split = input.split("\n")
const answer1 = () => {
    let containedPairs = 0
    split.forEach(pair => {
        const ranges = pair.split(",")
        let r1 = ranges[0].split("-"), r2 = ranges[1].split("-")
        r1 = range(Number(r1[0]), Number(r1[1])), r2 = range(Number(r2[0]), Number(r2[1]))
        if (r1.every(x => r2.includes(x)) || r2.every(x => r1.includes(x)))
            containedPairs++
    })
    //answer 1
    console.log(containedPairs)
}

answer1()

const answer2 = () => {
    let result = 0
    split.forEach(pair => {
        const ranges = pair.split(",")
        let r1 = ranges[0].split("-"), r2 = ranges[1].split("-")
        r1 = range(Number(r1[0]), Number(r1[1])), r2 = range(Number(r2[0]), Number(r2[1]))
        if (r1.filter(x => r2.includes(x)).length > 0 || r2.filter(x => r1.includes(x)).length > 0) {
            result++
        }
    })
    //answer 2
    console.log(result)
}

answer2()
