function solution(my_string) {
    let arr = my_string.split('').filter(e => Number.isInteger(+e)).reduce((a, c) => +a + +c, 0)
    return arr;
}