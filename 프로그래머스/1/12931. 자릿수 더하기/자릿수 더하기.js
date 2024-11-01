function solution(n) {

    let arr = n.toString().split('').reduce((a, c) => +a + +c, 0)



    return arr;
}