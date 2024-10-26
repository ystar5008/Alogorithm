function solution(num_list) {


    return String(num_list).split('').reduce((a, c) => +a + +c, 0);
}