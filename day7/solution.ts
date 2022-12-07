import { input } from "./input"
const answer = (input: string) => {
    const popCurrFile = (currFile) => {
        const tempArr = []
        currFile.split("_").forEach(x => {
            if (!!x.trim())
                tempArr.push(x)
        })
        tempArr.pop()
        return tempArr.toString().replaceAll(",", "_")
    }

    const addTotalForPath = (total, path) => {
        const tempArr = []
        path.split("_").forEach(x => {
            if (!!x.trim())
                tempArr.push(x)
        })
        if (tempArr.length <= 1)
            return
        tempArr.pop()
        let newPath = tempArr.toString().replaceAll(",", "_")
        dirWithSizes[newPath].total += total
        addTotalForPath(total, newPath)
    }
    const dirWithSizes: { [key: string]: { total: number, files: string[] } } = {}
    let currFile = "", i = 0
    for (const x of input.split("\n")) {
        i++
        const xSplit = x.split(" ")
        if (xSplit[0] == "$") { //is command
            if (xSplit[1] == "ls")
                continue
            if (xSplit[1] == "cd") {
                if (xSplit[2] == "..")
                    currFile = popCurrFile(currFile)
                else {
                    if (currFile == "")
                        currFile = `${xSplit[2]}`
                    else
                        currFile += `_${xSplit[2]}`
                    if (!dirWithSizes[currFile]) {
                        dirWithSizes[`${currFile}`] = { total: 0, files: [] }
                    }
                }
                continue
            }
            throw new Error("Step missing")
        }
        if (xSplit[0] == "dir")
            continue

        dirWithSizes[currFile].total += Number(xSplit[0])
        addTotalForPath(Number(xSplit[0]), currFile)
        dirWithSizes[currFile].files.push(xSplit[1])
    }

    let total = 0
    Object.keys(dirWithSizes).forEach(x => {
        if (dirWithSizes[x].total <= 100000)
            total += dirWithSizes[x].total
    })
    console.log("answer1", total)

    let rootDir = "/"
    let maxFileSize = 70000000
    let updateSpace = 30000000
    let spaceToFreeUp = updateSpace - (maxFileSize - dirWithSizes[rootDir].total)
    let answer2 = { path: "", size: 0 }
    Object.keys(dirWithSizes).forEach(key => {
        let size = dirWithSizes[key].total
        if (answer2.size == 0) {
            answer2.path = key
            answer2.size = dirWithSizes[key].total
        } else if (size > spaceToFreeUp && size < answer2.size) {
            answer2.path = key
            answer2.size = size
        }
    })
    console.log("answer2", answer2)
}

answer(input)