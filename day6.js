let arr = [1, 2, 3, 4, 5 ]
console.log("arr - ", arr)

console.log("First - ", arr[0])
console.log("Last - ", arr[arr.length-1])

arr.push(6)
console.log("Push - ", arr)

arr.pop()
console.log("Pop - ", arr)

arr.shift()
console.log("Shift - ", arr)

arr.unshift(0)
console.log("Unshift - ", arr)

let newArr = arr.map(num => num*2)
console.log("Map - ", newArr)

newArr = arr.filter(num => num%2 == 0)
console.log("Filter - ", newArr)

sum = newArr.reduce((sum, num) => sum+num, 0)
console.log("Reduce - ", sum)

console.log("arr")
for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
}

console.log("newArr")
newArr.forEach(num => console.log(num))

console.log("twodArr")
let twodArr = [[1,2], [3,4], [5,6], [7,8]]
// console.log("twodArr length - ", twodArr.length)
for(let i=0; i<twodArr.length; i++) { 
    console.log(twodArr[i])
}

console.log("twodArr[3][1] - ", twodArr[3][1])