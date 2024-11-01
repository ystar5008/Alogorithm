function solution(my_string, m, c) {

    let answre = ''
    for (let i = 0; i < my_string.length; i += m) {
        answre += my_string.slice(i, i + m)[c - 1]
    }
    return answre;
}