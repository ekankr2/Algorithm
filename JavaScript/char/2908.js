const input = require('fs').readFileSync('input.txt').toString().trim().split(' ')
const a = input[0]
const b = input[1]

function reverseNum(input) {
    const number = input.toString()
    return +number.split('').reverse().join('')
}

function filterBiggerNum(a, b) {
    if(a > b) {
        return a
    }
    return b
}

function solve(a, b){
    let reversedA = reverseNum(a)
    let reversedB = reverseNum(b)

    return filterBiggerNum(reversedA, reversedB)
}

console.log(solve(a, b))