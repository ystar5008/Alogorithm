function solution(num_str) {
    let answer = 0
    for (const element of num_str) {
        console.log(+element)
        answer += + element
    }
    return answer;
}