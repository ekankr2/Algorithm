const input = +require('fs').readFileSync('input.txt').toString()

let answer = ''
for (let i = 0; i < input; i++) {
    answer += input-i + '\n'
}
console.log(answer)
