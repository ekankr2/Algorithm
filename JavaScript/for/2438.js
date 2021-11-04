const input = require('fs').readFileSync('input.txt').toString()
const N = +input

let answer = ''
let temp = ''

for (let i = 0; i < N; i++) {
    temp += '*'
    answer += `${temp}\n`
}

console.log(answer)
