const fs = require('fs');
const input = +fs.readFileSync('input.txt').toString();

const five = (input) => {
    if ((input - 5) % 3 === 0) {
        return 1
    }

    if (input % 5 % 3 > 0) {
        return 0
    }

    return Math.floor(input / 5)
}

const three = (input) => {
    if (five(input) === 0) {
        return input / 3
    }

    if (five(input) === 1) {
        return (input - 5) / 3
    }

    return input % 5 / 3
}

const solve = (input) => {
    const count = five(input) + three(input)

    if (count % 1 === 0) {
        return count
    }

    return -1
}

console.log(solve(input))