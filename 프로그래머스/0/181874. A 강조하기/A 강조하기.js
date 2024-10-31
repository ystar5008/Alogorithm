function solution(my_string) {


    return my_string.replaceAll("a", "A").split('').map(e => e !== "A" ? e.toLowerCase() : e)
        .join('');
}