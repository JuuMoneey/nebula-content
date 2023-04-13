// Remeber to console.log() to debug your code and check your solutions!


// Declare a variable and assign it to a numeric value
// Half that value and re-assign it to the previous variable 
let num = 24 
num /= 2
console.log(num)


// Create two negative numbers, assign them to variables and subtract one from the other together 
let x2 = '-3'
let y2 = '-5'
x2 -= y2
console.log(x2)

// Create three numbers, assign them to variables and multiply them together 
let fig = 5
let fig2 = 8
let fig3= 11


// Create two even numbers, assign them to variables and divide one from the other 
let x1 = 12
let y1 = 6
x1 /= y1
console.log(x1 / y1)
// Expected output: 2


// Create two odd numbers, assign them to variables and find the remainder of dividing one by the other 
let x3 = 9
let y3 = 5
console.log(x3 % y3)


// find the minimum value in a set of numbers: 10,20,30,40,50 
let a = 10
let b = 20
let c = 30
let d = 40
let e = 50
console.log(Math.min(a, b, c, d, e))

// Expected output: 10


// find the maximum value in a set of numbers: -1,-2,-3,-4,-5 
let a1 = '-1'
let b1 = '-2'
let c1 = '-3'
let d1 = '-4'
let e1 = '-5'
console.log(Math.max(a1, b1, c1, d1, e1))
// Expected output: -1
// const max = Math.max(-1, -2, -3, -4, -5)


// Create a variable and find it's remainder, if divided by 2
let j = 24
console.log(j % 2)
// find the square root of 144 
let num1 = Math.sqrt(144)
console.log(num1)
// Expected output: 12


// find the value of 3 to the power of 7 
let x = 3   
let y = 7
console.log(Math.pow(x, y))
// Expected output: 2187


// find the value of 73.2 rounded 
let num2 = '73.2'
console.log(Math.ceil(num2));
// Expected output: 74

console.log(Math.round(73.2))
// find the rounded-down value of 9.9 
let figure = Math.floor(9.9)
console.log(Math.floor(figure))
// Expected output: 9


// find the absolute value of -1231
let num3 = '-1231'
console.log(Math.abs(num3))
// Expected output: 1231