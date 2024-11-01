function solution(arr) {
    let length = arr.length;
    let powerOfTwo = 1;
    
    // 배열의 길이보다 크거나 같은 가장 작은 2의 거듭제곱 구하기
    while (powerOfTwo < length) {
        powerOfTwo *= 2;
    }
    
    // 필요한 만큼 0을 한 번에 추가
    while (arr.length < powerOfTwo) {
        arr.push(0);
    }
    
    return arr;
}