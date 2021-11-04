// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim()
let n = parseInt(input)

let temp = 0
for(let i = 1; i <= n; i++){
    temp += i
}
console.log(temp)
