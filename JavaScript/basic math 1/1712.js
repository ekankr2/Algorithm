const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split(' ')
let A = +input[0], B = +input[1], C = +input[2]
let Answer;

function 노트북매출 (고정비용, 가변비용, 판매량) {
    return 고정비용 + 가변비용 * 판매량
}

function 손익분기 (노트북매출, 노트북가격) {
    const 이익 = 노트북매출 - 노트북가격
    return 이익 > 0;
}

while(true){
    let i = 1
    if(손익분기(노트북매출(A, B, i), C)){
        Answer = i
        break
    }
    i++
}

console.log(Answer)