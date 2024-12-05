import { input } from "./input"

const testInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

const leveler = (input: string) => input.split('\n').map(x => x.split(' ').map(x => Number(x)))
let counter = 0
const stacker = (arr: number[][]) => {
    arr.forEach(report => {
        let valid = false
        let trend
        for (let i = 1; i < report.length; i++) {
            if (!trend)
                trend = report[i - 1] > report[i] ? "dec" : "inc"
            const distance = Math.abs(report[i - 1] - report[i])
            if (distance < 1 || distance > 3) {
                valid = false
                break;
            }

            switch (trend) {
                case "dec":
                    valid = report[i] < report[i - 1]
                    break
                case "inc":
                    valid = report[i] > report[i - 1]
                    break
            }
            if (!valid)
                break
        }
        if (valid)
            counter++
    })
}





stacker(leveler(input))
console.log(counter)