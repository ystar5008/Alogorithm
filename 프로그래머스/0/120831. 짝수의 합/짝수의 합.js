function solution(n) {

    let count = 0
    for (let i = 0; i <= n; i += 2) {
        count += i
    }
    return count;
}

console.log(solution(10)) 