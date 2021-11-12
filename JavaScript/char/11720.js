const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split('\n')
const N = +input[0]
let numbers = input[1].split('')
// let answer = 0
//
// // for (let i = 0; i < N; i++) {
// //     answer += +numbers[i]
// // }
// // console.log(answer)

let answer = numbers.reduce(
    (acc, curr) => +acc + +curr,

)
console.log(answer)
