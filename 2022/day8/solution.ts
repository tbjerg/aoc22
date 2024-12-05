// const input =

//     `30373
// 25512
// 65332
// 33549
// 35390`

import { input } from "./input"

const arr: number[][] = []
input.split("\n").forEach((x, i) => {
    arr[i] = x.split("").map(y => Number(y))
})

const isAtEdge = (arr, idx) => {
    return idx == 0 || idx == arr.length - 1
}

const answer1 = () => {
    const isTreeVisibleFromLeft = (treeToCompare: number, row: number[], rowIdx: number) => {
        if (rowIdx < 0)
            return true
        if (treeToCompare > row[rowIdx])
            return isTreeVisibleFromLeft(treeToCompare, row, rowIdx - 1)
        return false
    }

    const isTreeVisibleFromRight = (treeToCompare: number, row: number[], rowIdx: number) => {
        if (rowIdx > row.length - 1)
            return true
        if (treeToCompare > row[rowIdx])
            return isTreeVisibleFromRight(treeToCompare, row, rowIdx + 1)
        return false
    }

    const isTreeVisibleFromAbove = (treeToCompare: number, matrix: number[][], matrixIdx: number, rowIdx: number) => {
        if (matrixIdx < 0)
            return true
        if (treeToCompare > matrix[matrixIdx][rowIdx])
            return isTreeVisibleFromAbove(treeToCompare, matrix, matrixIdx - 1, rowIdx)
        return false
    }

    const isTreeVisibleFromBelow = (treeToCompare: number, matrix: number[][], matrixIdx: number, rowIdx: number) => {
        if (matrixIdx > matrix.length - 1)
            return true
        if (treeToCompare > matrix[matrixIdx][rowIdx])
            return isTreeVisibleFromBelow(treeToCompare, matrix, matrixIdx + 1, rowIdx)
        return false
    }

    let i = 0, j = 0, total = ((arr.length - 1) * 2) + ((arr[0].length - 1) * 2)
    for (const row of arr) {
        for (const tree of row) {
            if (isAtEdge(arr, i) || isAtEdge(row, j)) {
                j++
                continue
            }
            total += isTreeVisibleFromLeft(tree, row, j - 1) || isTreeVisibleFromRight(tree, row, j + 1) || isTreeVisibleFromAbove(tree, arr, i - 1, j) || isTreeVisibleFromBelow(tree, arr, i + 1, j) ? 1 : 0
            j++
        }
        j = 0
        i++
    }

    console.log(total)
}
answer1()

const answer2 = () => {

    const determineLeftScore = (treeToCompare: number, row: number[], rowIdx: number, score: number) => {
        if (rowIdx < 0)
            return score
        if (treeToCompare <= row[rowIdx])
            return score + 1
        return determineLeftScore(treeToCompare, row, rowIdx - 1, score + 1)
    }

    const determineRightScore = (treeToCompare: number, row: number[], rowIdx: number, score: number) => {
        if (rowIdx > row.length - 1)
            return score
        if (treeToCompare <= row[rowIdx])
            return score + 1
        return determineRightScore(treeToCompare, row, rowIdx + 1, score + 1)
    }

    const determineUpScore = (treeToCompare: number, matrix: number[][], matrixIdx: number, rowIdx: number, score: number) => {
        if (matrixIdx < 0)
            return score
        if (treeToCompare <= matrix[matrixIdx][rowIdx])
            return score + 1
        return determineUpScore(treeToCompare, matrix, matrixIdx - 1, rowIdx, score + 1)
    }

    const determineDownScore = (treeToCompare: number, matrix: number[][], matrixIdx: number, rowIdx: number, score: number) => {
        if (matrixIdx > matrix.length - 1)
            return score
        if (treeToCompare <= matrix[matrixIdx][rowIdx])
            return score + 1
        return determineDownScore(treeToCompare, matrix, matrixIdx + 1, rowIdx, score + 1)
    }

    let i = 0, j = 0, bestScenicScore = 0
    for (const row of arr) {
        for (const tree of row) {
            if (isAtEdge(arr, i) || isAtEdge(row, j)) {
                j++
                continue
            }
            const scenicScore = determineLeftScore(tree, row, j - 1, 0) * determineRightScore(tree, row, j + 1, 0) * determineUpScore(tree, arr, i - 1, j, 0) * determineDownScore(tree, arr, i + 1, j, 0)
            if (scenicScore > bestScenicScore)
                bestScenicScore = scenicScore
            j++
        }
        j = 0
        i++
    }
    console.log(bestScenicScore)
}
answer2()