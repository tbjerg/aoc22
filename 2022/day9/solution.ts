import { input } from "./input"

const test = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`



const answer1 = (inp: string) => {
    let input = inp.split("\n")
    const points = [{ x: 0, y: 0 }]
    const hPos = { x: 0, y: 0 }
    const tPos = { x: 0, y: 0 }
    for (const x of input) {
        let operation = x.split(" ")
        let moves = Array(Number(operation[1]))
        for (const _ of moves) {
            switch (operation[0]) {
                case "U":
                    hPos.y += + 1
                    break
                case "D":
                    hPos.y -= 1
                    break
                case "L":
                    hPos.x -= 1
                    break
                case "R":
                    hPos.x += 1
                    break
            }

            const diagMove = Math.abs(hPos.x - tPos.x) == 1 && Math.abs(hPos.y - tPos.y) == 2 || Math.abs(hPos.x - tPos.x) == 2 && Math.abs(hPos.y - tPos.y) == 1

            if (diagMove) {
                tPos.x += operation[0] == "R" ? 1 : tPos.x < hPos.x ? 1 : -1
                tPos.y += operation[0] == "U" ? 1 : tPos.y < hPos.y ? 1 : -1
            }
            else {
                if (Math.abs(hPos.x - tPos.x) > 1)
                    tPos.x += operation[0] == "R" ? 1 : -1
                if (Math.abs(hPos.y - tPos.y) > 1)
                    tPos.y += operation[0] == "U" ? 1 : -1
            }
            if (!points.find(z => z.x == tPos.x && z.y == tPos.y))
                points.push({ ...tPos })
        }
    }
    console.log(points.length)
}

// answer1(input)


const answer2 = (inp: string) => {
    let input = inp.split("\n")
    const points = [{ x: 0, y: 0 }]
    const hPos = new Array(10).fill({ x: 0, y: 0 })

    for (const x of input) {
        let operation = x.split(" ")
        let moves = Array(Number(operation[1]))
        console.log(x)
        for (const _ of moves) {
            let hLength = 0
            const h = hPos.shift()
            switch (operation[0]) {
                case "U":
                    hLength = hPos.unshift({ x: h.x, y: h.y - 1 })
                    break
                case "D":
                    hLength = hPos.unshift({ x: h.x, y: h.y + 1 })
                    break
                case "L":
                    hLength = hPos.unshift({ x: h.x - 1, y: h.y })
                    break
                case "R":
                    hLength = hPos.unshift({ x: h.x + 1, y: h.y })
                    break
            }

            console.log(hPos)
            for (let i = 1; i < hPos.length; i++) {
                const diagMove = Math.abs(hPos[i - 1].x - hPos[i].x) == 1 && Math.abs(hPos[i - 1].y - hPos[i].y) == 2 || Math.abs(hPos[i - 1].x - hPos[i].x) == 2 && Math.abs(hPos[i - 1].y - hPos[i].y) == 1
                if (diagMove) {
                    hPos[i].x += operation[0] == "R" ? 1 : hPos[i].x > hPos[i - 1].x ? 1 : -1
                    hPos[i].y += operation[0] == "U" ? 1 : hPos[i].y < hPos[i - 1].y ? 1 : -1
                }
                else {
                    if (Math.abs(hPos[i - 1].x - hPos[i].x) > 1 && Math.abs(hPos[i - 1].y - hPos[i].y) == 0)
                        hPos[i].x += operation[0] == "R" ? 1 : -1
                    if (Math.abs(hPos[i - 1].y - hPos[i].y) > 1 && Math.abs(hPos[i - 1].x - hPos[i].x) == 0)
                        hPos[i].y += operation[0] == "U" ? 1 : -1
                }
            }
        }

    }
}


answer2(test)