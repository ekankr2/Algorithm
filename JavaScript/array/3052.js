const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split('\n')

let arr = new Array(10)

for(let i = 0; i < 10 ; i++){
    arr[i] = input[i] % 42
}

const set = new Set(arr)
const uniqueArr = [...set]
console.log(uniqueArr.length)

