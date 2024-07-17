for(let i=1; i<=10; i++) {
    console.log(i)
}

for(let i=1; i<=10; i++) {
    console.log(i*5)
}

let sum=0
i = 1
while(i<=10) {
    sum += i
    i++
}
console.log("sum = ", sum)

i = 10
while(i>=1) {
    console.log(i)
    i--
}

i = 1
do {
    console.log(i)
    i++
} while(i<=5)

let fact = 1
num = 6
i = 1
do {
    fact *= i
    i++
} while(i<=num)

console.log(`Factorial of ${num} = ${fact}`)

for(let i=1; i<=5; i++) {
    let arr = []
    for(let j=1; j<=i; j++) {
        arr += "*" 
    }
    console.log(arr)
}

for(i = 1; i<=10; i++) {
    if(i == 5) continue
    console.log(i)
}

for(i = 1; i<=10; i++) {
    if(i == 7) break
    console.log(i)
}