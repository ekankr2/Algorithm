const input = require('fs').readFileSync('input.txt').toString().trim()
const words = input.split(' ')

console.log(input === '' ? 0 : words.length)