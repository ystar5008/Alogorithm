function solution(a, b) {
    let answer = 0
    if (a % 2 === 1 && b % 2 === 1) {
        answer += a ** 2 + b ** 2
        return answer
    } else if (a % 2 === 1 || b % 2 === 1) {
        answer += 2 * (a + b)
        return answer
    } else if (a % 2 !== 1 || b % 2 !== 1) {
        answer += a - b
        return Math.abs(answer)
    }
}