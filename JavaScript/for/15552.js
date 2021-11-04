//각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.
const input = require('fs').readFileSync('input.txt').toString().split('\n')
let testCase = (+input[0])
let answer = ''

for(let i = 1; i <= testCase; i++){
    let temp = input[i].split(' ')
    answer += +temp[0] - -temp[1] + '\n'
}
console.log(answer)
