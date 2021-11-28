const input = +require('fs').readFileSync('input.txt').toString()

function IfHundreds(N){
    let hundred = Math.floor(N/100)
    let ten = Math.floor(N%100/10)
    let one = Math.floor(N%10)

    if(hundred - ten === ten - one || hundred === 0){
        return true
    }
}

function Solve(N){
    let answer = 0

    if(N < 100) {
        return N
    }else if(N === 1000){
        return 144
    }else{
        for (let i = 1; i <= N; i++) {
            if(IfHundreds(i)){
                answer++
            }
        }
    }
    return answer
}

console.log(Solve(input))
