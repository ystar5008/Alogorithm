function solution(my_string, num1, num2) {



    let arr = my_string.split('')
    let one = arr[num1]
    let two = arr[num2]
    arr[num1] = two
    arr[num2] = one
    return arr.join('');
}