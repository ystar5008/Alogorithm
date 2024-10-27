function solution(emergency) {
    // 응급도의 크기 순서대로 정렬한 복사본을 만듭니다.
    const sorted = [...emergency].sort((a, b) => b - a);

    // e=> 76 24 3
    console.log(emergency.map(e => sorted.indexOf(e)))
    // 각 응급도의 순위를 매깁니다.

    return emergency.map(e => sorted.indexOf(e) + 1);
}