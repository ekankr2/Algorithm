const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim()
gugudan(input)

function gugudan(n){
    for(let i = 1; i < 10 ; i++){
        console.log(`${n} * ${i} =`,n*i)
    }
}
