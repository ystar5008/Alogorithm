function solution(x) {

    return x % [...x.toString()].reduce((a, c) => +a + +c, 0) === 0 ? true : false;
}