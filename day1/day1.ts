import { input } from "./day1input"

const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

var split = input.split("\n")
const dict = {}
let k = 1
split.forEach((x, i) => {
    if (!dict[k])
        dict[k] = Number(x)
    else if (x != "")
        dict[k] += Number(x)
    else
        k++
})

let h1 = 0, h2 = 0, h3 = 0
Object.keys(dict).forEach(key => {
    if (dict[key] > h1) {
        h3 = h2
        h2 = h1
        h1 = dict[key]
    }
    else if (dict[key] > h2) {
        h3 = h2
        h2 = dict[key]
    }
    else if (dict[key] > h3) 
        h3 = dict[key]
})
//answer 1
console.log(h1)
//answer 2
console.log(h1 + h2 + h3)