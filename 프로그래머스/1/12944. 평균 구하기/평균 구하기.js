function solution(n) {

    let answer = n.reduce((a, c) => a + c, 0) / n.length
    return answer;
}