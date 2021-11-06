const fs = require('fs')
const [n, arr] = fs.readFileSync('input.txt').toString().trim().split('\n')
let grades = arr.split(' ')

const max = Math.max(...grades)
const scamGrades = grades.map(x => x/max*100 )

const sum = scamGrades.reduce((sum, curr)=>{
    return sum + curr
}, 0)
let answer = (sum/n).toFixed(7)
console.log(+answer)
