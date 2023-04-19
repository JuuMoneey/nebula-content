// .map() Practice

/* Question 1
Using .map() create a new array that doubles all the numbers in a given array */
const numbers = [ 1, 2, 3, 4, 5 ]

const doubledArray = numbers.map(num => {
   return num * 2
});
//or could write like this either or doesnt matter
const doubled = numbers.map((num) => num * 2)

console.log(doubledArray)
//console.log(doubled)

/* Question 2
Using .map() create a new array that halves all numbers in a given array */
const halvedArray = numbers.map(num => {
    return num / 2
 });

 console.log(halvedArray)

/* Question 3
Using .map() create a new array that squares all of the numbers in a given array */
const squaredArray = numbers.map(num => {
    return num * num 
 });

 console.log(squaredArray)

/* Question 4
Using .map() create a new array of all capital strings from an array of lower case strings */
const lowerCase = ['hello', 'world', 'how', 'are', 'you']

const UpperCase = lowerCase.map(strings => {
    return strings.toUpperCase()
 });

 console.log(UpperCase)

/* Question 5
Using .map() create a new array of greeting sentences from an array of given people
  Expected output:
    ['Hello Pamela', 'Hello Michael', 'Hello Angela'] */
const people = ['Pamela', 'Michael', 'Angela']

const greeting = people.map(strings => {
    return `Hello ${strings}`
 });
//or could write like this either or doesnt matter
const greetings = people.map((person) => `Hello ${person}`)

console.log(greeting)
//console.log(greetings)
