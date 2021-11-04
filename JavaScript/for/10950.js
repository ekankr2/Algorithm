const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split('\n')
let testCase = parseInt(input[0])


for(let i = 1; i <= testCase; i++){
    let temp = input[i].split(' ')
    console.log(Number(temp[0])+Number(temp[1]))
    temp = 0
}


