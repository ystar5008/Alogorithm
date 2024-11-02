function solution(array) {

    let a = array.join('').split('').filter(e => e === '7').length
    return a
}