const input = require('fs').readFileSync('input.txt').toString()
const N = +input

let answer = ''

for (let i = 1; i <= N; i++) {
    for (let j = N-i; j > 0; j--) {
        answer += ' '
    }
    for (let j = 0; j < i; j++) {
        answer += '*'
    }

    answer += '\n'
}
console.log(answer)
