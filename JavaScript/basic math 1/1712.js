const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split(' ')
let 고정비용 = +input[0], 가변비용 = +input[1], 노트북가격 = +input[2]

function 손익분기점(고정비용, 가변비용, 노트북가격) {
    if((노트북가격 - 가변비용) <= 0) {
        return -1
    }
    return Math.floor(고정비용 / (노트북가격 - 가변비용)) + 1
}

console.log(손익분기점(고정비용, 가변비용, 노트북가격))
