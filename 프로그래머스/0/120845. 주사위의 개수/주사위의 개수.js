function solution(box, n) {
    let arr = box.map(e => Math.floor(e / n))
    return arr.reduce((a, c) => a * c);
}