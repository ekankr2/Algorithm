const N = 10000
let arr = new Array(N+1)
arr.fill(true)
// 33
function d(n){
    let num = n
    while(n){
        num += n % 10
        n = Math.floor(n/10)
    }
    return num+n
}

for (let i = 0; i < N; i++) {
    let temp = d(i)
    if(temp < N){
        arr[temp] = false
    }
}

for (let i = 0; i < N; i++) {
    if(arr[i]){
        console.log(i)
    }
}
