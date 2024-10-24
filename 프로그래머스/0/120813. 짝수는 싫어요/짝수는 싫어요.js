function solution(n) {

    return arr = new Array(n).fill(1).map((e, i) => (e + i)).filter((e) => e % 2 !== 0)
}