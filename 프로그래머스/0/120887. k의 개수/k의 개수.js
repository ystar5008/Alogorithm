function solution(i, j, k) {
    let char = ''
    for (let z = i; z <= j; z++) {
        char += z.toString()

    }
    return char.split('').filter(e => +e === k).length;
}