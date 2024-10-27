function solution(my_string) {

    return [...my_string].filter(e => Number.isInteger(+e)).map(e => +e).sort();
}