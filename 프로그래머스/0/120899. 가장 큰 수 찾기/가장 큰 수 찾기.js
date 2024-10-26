function solution(array) {

    let answer = []
    for (let i = 0; i < array.length; i++) {
        // 현재 요소와 다음 요소의 값을 비교
        if (array[i] < array[i + 1]) {
            // 다음 요소가 크면 값과 인덱스를 answer에 넣기
            console.log(i)
            answer = [array[i + 1], i + 1]
        }


    }
    return answer;
}