const fs = require('fs')
const [n, ...arr] = fs.readFileSync('input.txt').toString().trim().split('\n')

let score = 0
let answer = 0
for (let i = 0; i < n; i++) {
    let copy = []
    copy[i] = arr[i].trim().split('')
    for(let j = 0; j < copy[i].length; j++){
        if(copy[i][j] === 'O'){
            score += 1
        }else if(copy[i][j] === 'X'){
            score = 0
        }
        answer += score
    }
    console.log(answer)
    score = 0
    answer = 0
}

