function solution(numbers, k) {
    return k % 2 === 0 ? numbers.map(x => x + k) : numbers.map(x => x * k)



}