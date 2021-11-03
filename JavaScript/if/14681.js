const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split('\n')
let a = parseInt(input[0])
let b = parseInt(input[1])
console.log(a)
console.log(b)
solve(a, b)

function solve(a, b){
    if (a > 0 && b > 0){
        console.log('1')
    }else if(a > 0 && b < 0){
        console.log('4')
    }else if(a < 0 && b < 0){
        console.log('3')
    }else if(a < 0 && b > 0){
        console.log('2')
    }
}
