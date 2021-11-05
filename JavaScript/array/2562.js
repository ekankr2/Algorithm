const input = require('fs').readFileSync('input.txt').toString().trim().split('\n')

let max = +input[0]
let order = ''
let answer = ''
for (let i = 0; i < 9; i++) {
    if(max <= input[i]){
        max = +input[i]
        order = i+1
        answer = max+'\n'+order
    }
}
console.log(answer)

