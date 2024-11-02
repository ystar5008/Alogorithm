function solution(x, n) {
    let cnt = 0
    let arr = []
    for (let i = 0; i < n; i++) {
        cnt += x
        arr.push(cnt)
    }
    return arr;
}