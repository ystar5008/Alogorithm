function solution(num_list) {
    return num_list.sort((a, b) => { return a - b; }).splice(0, 5);
}