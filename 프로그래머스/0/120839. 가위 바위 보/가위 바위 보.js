function solution(rsp) {
    // "2" 는 "0"  "0" 은 "5"   "5"는 "2"
    let a = [...rsp].map(e => e === "2" ? "0" : e === "0" ? "5" : e === "5" ? "2" : "0")
    console.log(a)
    return a.join('');
}