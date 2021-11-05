const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split('\n')
let N = +input[0]
let a = input[1].split(' ')

let max = +a[0]
let min = +a[0]

for (let i = 0; i < N; i++) {

    if(min >= +a[i]){
        min = +a[i]
    }

    if(max <= +a[i]){
        max = +a[i]
    }

}
console.log(min, max)
