import { input } from "./input"

const answer = (bufferLength: number) => {
    let buffer = [], charCount = 0
    for (const char of input.split("")) {
        charCount++
        if (buffer.length == bufferLength) {
            buffer.shift()
            buffer.push(char)
        }
        else {
            buffer.push(char)
            continue;
        }
        let local = []
        buffer.forEach(x => {
            if (!local.includes(x))
                local.push(x)
        })
        if (local.length == bufferLength)
            break
    }
    console.log(charCount)
}
//answer1
answer(4)
//answer2
answer(14)