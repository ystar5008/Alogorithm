function solution(myString, pat) {

    let cnt = 0
    for (let i = 0; i < myString.length; i++) {
        console.log(myString.slice(i, pat.length + i))
        if (myString.slice(i, pat.length + i) === pat) {

            cnt++
        }
    }
    return cnt;
}