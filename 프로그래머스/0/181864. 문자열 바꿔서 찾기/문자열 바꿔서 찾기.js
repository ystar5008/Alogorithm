function solution(myString, pat) {
    let myString2 = myString.split('').map(e => e === "A" ? e = "B" : e = "A")

    return myString2.join('').includes(pat) ? 1 : 0;
}