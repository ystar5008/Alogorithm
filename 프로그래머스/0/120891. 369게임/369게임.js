function solution(order) {
    let answer = 0
    let arr = [...order.toString()]
    for (const e of arr) {
        if (e === '3' || e === '6' || e === '9') {
            answer++
        }
    }
    return answer;
}