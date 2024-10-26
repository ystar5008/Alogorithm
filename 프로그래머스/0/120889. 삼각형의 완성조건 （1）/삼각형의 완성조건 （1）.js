function solution(sides) {
    let sort = sides.sort((a, b) => a - b)
    console.log(sort)
    return sort[0] + sort[1] > sort[2] ? 1 : 2;
}