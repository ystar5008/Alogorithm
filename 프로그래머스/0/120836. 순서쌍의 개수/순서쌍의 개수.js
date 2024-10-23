function solution(n) {

    let count = 0;

    // 1부터 n까지의 수 중에서 n을 나누어 떨어지게 하는 수를 찾는다.
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++; // i가 n의 약수이면 (i, n/i) 순서쌍을 찾음
        }
    }

    return count;
}