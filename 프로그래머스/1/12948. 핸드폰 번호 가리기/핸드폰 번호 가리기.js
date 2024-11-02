function solution(num) {

    return Array(num.length - 4).fill('*').concat(...num.slice(-4)).join('')



}