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

answer1(input)

