// const setup =
//     `    [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 `

// const operations = `move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2`

import { setup, operations } from "./input"

//would have finished ages ago.. but input was incorrect the whole time..

const answer1 = (setup: string, operations: string) => {
    const stacks: { [key: number]: string[] } = {}
    setup.split("\n").forEach(x => {
        for (let i = 0; i < x.length; i += 4) {
            const index = (i / 4) + 1
            const member = x[i] + x[i + 1] + x[i + 2]
            if (member.trim() != "") {
                if (!stacks[index])
                    stacks[index] = [member]
                else
                    stacks[index].push(member)
            }
        }
    })
    Object.keys(stacks).forEach(x => {
        if (Number.parseInt(stacks[x][stacks[x].length - 1]))
            stacks[x].pop()
        stacks[x].reverse()
    })
    const createOperation = (op: string) => {
        let split = op.split(" ")
        return [Number(split[1]), Number(split[3]), Number(split[5])]
    }
    let index = 0
    for (let x of operations.split("\n")) {
        const operation = createOperation(x)
        let i = 0
        while (i < operation[0]) {
            stacks[operation[2]].push(stacks[operation[1]].pop())
            i++
        }
        index++
    }

    let answer = ""
    Object.keys(stacks).forEach(x => {
        answer += stacks[x][stacks[x].length - 1][1]
    })
    console.log(answer)
}

answer1(setup, operations)

const answer2 = (setup: string, operations: string) => {
    const stacks: { [key: number]: string[] } = {}
    setup.split("\n").forEach(x => {
        for (let i = 0; i < x.length; i += 4) {
            const index = (i / 4) + 1
            const member = x[i] + x[i + 1] + x[i + 2]
            if (member.trim() != "") {
                if (!stacks[index])
                    stacks[index] = [member]
                else
                    stacks[index].push(member)
            }
        }
    })
    Object.keys(stacks).forEach(x => {
        if (Number.parseInt(stacks[x][stacks[x].length - 1]))
            stacks[x].pop()
        stacks[x].reverse()
    })
    const createOperation = (op: string) => {
        let split = op.split(" ")
        return [Number(split[1]), Number(split[3]), Number(split[5])]
    }
    let index = 0
    for (let x of operations.split("\n")) {
        const operation = createOperation(x)
        let i = 0
        let pops: string[] = []
        while (i < operation[0]) {
            pops.push(stacks[operation[1]].pop())
            i++
        }
        pops.reverse()
        stacks[operation[2]].push(...pops)
        index++
    }

    let answer = ""
    Object.keys(stacks).forEach(x => {
        answer += stacks[x][stacks[x].length - 1][1]
    })
    console.log(answer)
}
answer2(setup, operations)