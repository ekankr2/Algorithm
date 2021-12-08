function binary(number){
    if(number === 1 || number === 0){
        return +number
    }
    return binary(Math.floor(number/2)) + String(number % 2) //  1 0 0 1 0
}

console.log(binary(18))

function f(n) {
    if (n <= 1) {
        return 1 // 종료 조건
    }
    return n + f(n-1) // 재귀함수
}
console.log(f(100))
