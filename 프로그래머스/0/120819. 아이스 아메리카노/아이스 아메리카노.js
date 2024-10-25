function solution(money) {
    //  1. 가진돈 / 아메리카노 = 마실수 있는 아메리카노 잔수
    let 아메리카노 = ~~(money / 5500)
    // 2. 남은돈 => (마실 수 있는 아메리카노 잔수 * 5500) - money
    let 남은돈 = Math.abs((아메리카노 * 5500) - money)
    return [아메리카노, 남은돈];
}