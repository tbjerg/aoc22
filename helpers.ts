export const range = (start, end) => {
    const length = end + 1 - start;
    return Array.from({ length }, (_, i) => start + i);
}
export const smallest = (arr: number[]) => arr.reduce((pv, cv, i) => i == 0 ? cv : pv < cv ? pv : cv, arr[0])