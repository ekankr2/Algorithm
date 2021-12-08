let name = '임익환'

let a = name.split("").reverse().join("")
console.log(a)

let result = ''
for (let i = name.length-1; i >= 0; i--) {
    result += name[i]
}

console.log(result)
