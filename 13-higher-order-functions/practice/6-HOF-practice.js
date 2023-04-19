// .reduce() Practice

/* Question 1
Write a HOF to reduce an array of numbers to all the numbers added up */
//Expected ouput : 55
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
let total = (nums.reduce((num, num2) => {
    return num + num2
}))
console.log(total)


/* Question 2
Write a HOF to reduce all numbers in an array to all numbers multiplied together */
//Expected output : 3,628,800
let total2 = (nums.reduce((num, num2) => {
    return num * num2
}))
console.log(total2)

/* Question 3
Write a HOF to reduce all numbers in an array to the largest number */
let total3 = (nums.reduce((num, num2) => {
    return num * num2
}, 100))
console.log(total3)


/* Question 4
Write a HOF to find the oldest person in a group */
const partyPeople = [{ name: 'John', age: 25 }, { name: 'Jordan', age: 18 }, { name: 'Frank', age: 50 }, { name: 'Anna', age: 12 }]
