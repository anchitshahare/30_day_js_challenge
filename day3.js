let num = 3
if (num > 0) {
    console.log(`${num} is positive`)
} else if(num < 0) {
    console.log(`${num} is negative`)
} else {
    console.log(`${num} is zero`)
}

let arr = [4, 4, 3]
console.log(`Out of ${arr[0]}, ${arr[1]}, ${arr[2]}`)
if(arr[0] > arr[1]) {
    if(arr[0] > arr[2])
        console.log(`${arr[0]} is largest`)
    else {
        if(arr[1] > arr[2])
            console.log(`${arr[1]} is largest`)
        else
            console.log(`${arr[2]} is largest`)
    }
} else {
    if(arr[1] > arr[2])
        console.log(`${arr[1]} is largest`)
    else
        console.log(`${arr[2]} is largest`)
}

num = 3
console.log("num: ", num)
switch (num) {
    case 1:
        console.log("Today is Monday")
        break;
    case 2:
        console.log("Today is Tuesday")
        break;
    case 3:
        console.log("Today is Wednesday")
        break;
    case 4:
        console.log("Today is Thursday")
        break;
    case 5:
        console.log("Today is Friday")
        break;
    case 6:
        console.log("Today is Saturday")
        break;
    case 7:
        console.log("Today is Sunday")
        break;
    default:
        console.log("Invalid input")
        break;
}

score = 60
console.log("score: ", score)
switch(true) {
    case score >= 90:
        console.log("Grade: A")
        break;
    case score >= 70:
        console.log("Grade: B")
        break;
    case score >= 50:
        console.log("Grade: C")
        break;
    case score >= 30:
        console.log("Grade: D")
        break;
    default:
        console.log("Grade: F")
        break;
}

num = 4
console.log(`${num} number is`, num%2 == 0 ? "even" : "odd")

let year = 2024
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(`${year} is a leap year`)
} else {
    console.log(`${year} is not a leap year`)
}