let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [arrlength, total] = input[0].split(' ')

let arr = input.slice(1)

let cnt = 0
for (let i = arrlength - 1; i >= 0; i--) {




    cnt += parseInt(Number(total) / Number(arr[i]))

    total %= Number(arr[i])




}

console.log(cnt)

