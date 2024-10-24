function solution(my_string, letter) {
    let arr = my_string.split('')


    return arr.filter(x => x !== letter).join('')
}