const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split('\n')
const C = +input[0]
let scores
let sum
let average
let overAverageCnt
for (let i = 1; i <= C; i++) {
    scores = input[i].split(' ')

    sum = 0
    average = 0
    overAverageCnt = 0

    for (let j = 1; j <= scores[0]; j++){
        sum += +(scores[j])
    }

    average = sum/scores[0]

    for (let j = 1; j <= scores[0]; j++){
        if(scores[j] > average){
            overAverageCnt++
        }
    }
    let answer = ((overAverageCnt/scores[0])*100).toFixed(3)
    console.log(`${answer}%`)
}
