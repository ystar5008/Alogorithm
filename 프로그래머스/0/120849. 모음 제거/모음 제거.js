function solution(my_string) {
    let moum = ['a', 'e', 'i', 'o', 'u']


    return my_string.split('').filter(e => !moum.includes(e)).join('');
}