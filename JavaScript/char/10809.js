const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim()

// 26길이의 배열을 만들어 -1을 채웁니다.
let array = Array(26).fill(-1)

// input의 길이 만큼 반복하며 ascii 코드로 바꿔서
// array[] 안에 집어넣습니다.
for (let i = 0; i < input.length; i++) {
    let ascii = input[i].charCodeAt(0)

    if(array[ascii-97] !== -1){
        continue
    }

    array[ascii-97] = i
}
// ...은 괄호를 벗겨달라는 의미
console.log(...array)

