function solution(my_string, n) {
    let newString = ''
    for (const v of my_string) {

        newString += v.repeat(n)
    }
    return newString;
}
