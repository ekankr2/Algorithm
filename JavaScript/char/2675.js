const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split('\n')

const T = +input[0]

for (let i = 1; i <= T; i++) {
    let inputRow = input[i].split(' ')
    let R = inputRow[0]
    let S = inputRow[1]
    console.log(RepeatChar(R, S))
}

function RepeatChar(R, S){
    let result = ''
    for (let i = 0; i < S.length; i++) {
        for (let j = 0; j < R; j++) {
            result += S[i]
        }
    }
    return result
}
