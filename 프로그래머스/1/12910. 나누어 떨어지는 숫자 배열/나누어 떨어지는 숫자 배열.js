function solution(arr, divisor) {

    return arr.filter(e => e % divisor === 0).length > 0 ? arr.filter(e => e % divisor === 0).sort((a, c) => a - c) : [-1];
}