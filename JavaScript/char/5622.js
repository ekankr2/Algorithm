const input = require('fs').readFileSync('input.txt').toString().trim().split('')
const numbers = ['','','', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
let count = 0

for(let i = 0; i < input.length; i++){
    let alphabet = input[i]

    for(let j = 0; j < numbers.length; j++){

        if(numbers[j].includes(alphabet)){
            count += j
        }
    }
}

console.log(count)
