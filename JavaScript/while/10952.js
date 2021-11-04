const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().split('\n')

let answer = ''
let i = 0
while (true){
    let temp = input[i].split(' ')
    if(+temp[0] === 0){
        break
    }
    answer += +temp[0] - -temp[1] + '\n'
    i++
}

console.log(answer)
