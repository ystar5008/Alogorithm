function solution(myString) {
    if (myString.length > 10) {
        return myString.reduce((a, c) => a + c)
    } else {
        return myString.reduce((a, c) => a * c)
    }

}