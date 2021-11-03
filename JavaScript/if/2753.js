const fs = require('fs')
const input = fs.readFileSync('input.txt').toString()
let a = parseInt(input)

console.log(solve(a))

function solve(value){
    if(value % 4 === 0 && value % 100 !== 0){
        return 1
    } else if(value % 400 === 0){
        return 1
    } else return 0
}
