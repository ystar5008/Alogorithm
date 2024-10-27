function solution(n) {
    let factorial = 1; // 초기 팩토리얼 값
    let i = 1; // 팩토리얼을 계산할 정수

    // n 이하의 최대 팩토리얼을 찾습니다.
    while (factorial <= n) {
        i++;
        factorial *= i; // i! = i * (i-1)!
    }

    return i - 1; // 마지막으로 증가한 i는 n을 초과하므로 1을 빼줍니다.
}