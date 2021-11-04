const input = require('fs').readFileSync('input.txt').toString().split('\n')
const TestCase = +input[0]

let answer = ''
for (let i = 1; i <= TestCase; i++) {
    let temp = input[i].split(' ')
    answer += `Case #${i}: ${+temp[0]} + ${+temp[1]} = ${+temp[0] - -temp[1]}\n`
}
console.log(answer)
