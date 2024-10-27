function solution(numbers) {

    let arr = numbers.sort((a, c) => a - c)
    return arr[arr.length - 1] * arr[arr.length - 2]
}