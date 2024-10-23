function solution(n, k) {
    let 양꼬치 = 12000
    let 음료수 = 2000
    let 서비스 = Math.floor(n / 10)
    console.log(서비스)
    return (양꼬치 * n) + (음료수 * k) - (서비스 * 음료수);
}

console.log(solution(64, 6)) 