function solution(before, after) {


    console.log(before.split('').sort().join(''))
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0
}