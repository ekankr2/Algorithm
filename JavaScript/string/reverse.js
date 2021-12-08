let name = '임익환'

let a = name.split("").reverse().join("")
console.log(a)

let result = ''
for (let i = name.length-1; i >= 0; i--) {
    result += name[i]
}

console.log(result)

function strReverse(str) {
    if (str.length === 1) {
        return str //종료 조건
    }
    return str[str.length-1] + strReverse(str.slice(0, str.length-1)); // 순서 더하는 순서 바꾸면 정순
}
console.log(strReverse('임익환'));
