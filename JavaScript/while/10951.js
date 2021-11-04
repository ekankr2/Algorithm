const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().split('\n')

let i = 0
let answer = ''
let length = input.length

while(i < length-1){
    let temp = input[i].split(' ')
    console.log(+temp[0] - -temp[1])
    i++
}
