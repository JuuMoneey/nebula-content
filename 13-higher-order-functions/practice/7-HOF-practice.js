//.find() Practice

/* Question 1
Write a HOF to find the first number greater than 10 in an array */
const nums = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 ]

const plus10 = nums.find(num => num > 10);
console.log(plus10);
//nums.find((num) => num > 10)

/* Question 2
Write a HOF to find the first string in an array */
const arr = [1,2,3,"pizza", "tacos","pie", {}, [], null, 123]

const string = arr.find((item) => typeof item === 'string')

console.log(string);


/* Question 3
Write a HOF to find the first instance of null in an array */
const arr2 = [1,2,3,"pizza", "tacos","pie", {}, [], null, 123]

const firstNull = arr.find((item) => item === null)

console.log(firstNull);

