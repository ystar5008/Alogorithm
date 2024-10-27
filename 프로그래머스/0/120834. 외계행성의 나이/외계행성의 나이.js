function solution(age) {
    let alpa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let answer = ''


    for (const num of age.toString().split('')) {
        answer += alpa[num]
    }
    return answer;
}