import { input } from "./input"

const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`

interface IListObj {
    left: number[]
    right: number[]
}

const buildLists = (input: string): IListObj => {
    const left = []
    const right = []
    input
        .split('\n')
        .forEach(x => {
            const split = x.split(' ')
            left.push(Number(split[0]))
            right.push(Number(split[split.length - 1]))
        })
    return { left, right }
}


const smallestWithIndex = (arr: number[]): { val: number, idx: number } => {
    let idx = 0
    const val = arr.reduce((pv, cv, i) => {
        if (i == 0)
            pv
        if (pv < cv)
            return pv
        idx = i
        return cv
    }, arr[0])
    return { val, idx }
}

let counter = 0
const findSmallest = ({ left, right }: IListObj) => {
    if (left.length == 0 && right.length == 0)
        return
    const foundLeft = smallestWithIndex(left)
    const foundRight = smallestWithIndex(right)
    counter += Math.abs(foundLeft.val - foundRight.val)
    return findSmallest({ left: left.filter((_, i) => i != foundLeft.idx), right: right.filter((_, i) => i != foundRight.idx) })

}

findSmallest(buildLists(input))
console.log(counter)




