function oddeven(a) {
    console.log(`${a} number is`, a%2 == 0? "even" : "odd")
}

oddeven(1)

function sqr(a) {
    return a*a
}

console.log(sqr(2))

const max = function (a, b) {
    return a > b ? a : b
}

console.log(max(5, 3))

const concat = function (a, b) {
    return a + " "+ b
}

console.log(concat("hello", "world"))

const sum = (a, b) => {
    console.log(a+b)
}

sum(1, 2)

let str = String()
const check = (str, a) => {
    return str.includes(a)
}

console.log(check("hello", "h"))

function prod(a, b = 0) {
    return a*b
}

console.log(prod(5))

const greet = (name, age = 30) => {
    return `Hello ${name}, your age is ${age}`
}

console.log(greet("John", 45))

function callback() {
    console.log("callback called")
}

function hofunc(callback, num) {
    while(num--) {
        callback()
    }
}

hofunc(callback, 5)

function square(num) {
    return num*num
}

function half(num) {
    return num/2
}

function anotherhofunc(func1, func2, num) {
    return half(square(num))
}

console.log(anotherhofunc(square, half, 5))