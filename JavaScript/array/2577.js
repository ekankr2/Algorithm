const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split('\n')
let A = +input[0], B = +input[1], C = +input[2]


solve(A, B, C)

function solve(A, B, C){
    let answer = []
    let result = (A * B * C).toString()
    let copy = ''

    for (let i = 0; i < 10; i++) {
        answer.push(0)
    }

    for (let i = 0; i < result.length; i++) {
        for(let j = 0; j < 10 ; j++){
            if(j.toString() === result[i]){
                answer[j] = answer[j]+1
            }
        }
    }

    for (let i = 0; i < answer.length; i++) {
        console.log(answer[i])
    }

}

