const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().split(' ')
let a = parseInt(input[0]), b = parseInt(input[1])

clock(a, b)

function clock(a, b){
    if(b >= 45){
        console.log(a,b-45)
    }else if(a !== 0 && b < 45){
        console.log(a-1,b+15)
    }else if(a === 0 && b < 45){
        console.log(23,b+15)
    }
}


