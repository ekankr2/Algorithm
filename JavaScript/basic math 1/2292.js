const fs = require('fs');
const input = +fs.readFileSync('input.txt').toString();

let start = 1
let end = 1
let range = 6
let cycle = 1

while (true) {

    cycle += 1
    end = end + range

    if(input === 1) {
        console.log(1)
        break
    }

    if(input >= start && input <= end) {
        console.log(cycle)
        break
    }

    start = end + 1
    range += 6
}
