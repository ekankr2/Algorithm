const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().split('\n')
let temp = input[0].split(' ')
let a = temp[0], b = temp[1]
temp = input[1].split(' ')

let answer = ''

for (let i = 0; i < a; i++) {
    if(+temp[i] < b){
       answer += temp[i] + ' '
    }
}

console.log(answer)
