// .forEach Practice

/* Question 1
Given an array of numbers, log each number to the console. */
const nums = [21, 8 ,24 , 13, 16, 28];
nums.forEach((num) => {
    console.log(num)
})


/* Question 2
Given an array of people, log a greeting to the console for each person. */
let v10 = ['Judah', 'Dayana', 'Matt', 'Juliet', 'Asadur', 'Amy', 'Eric']
v10.forEach((person) => {
    console.log(person)
})

v10.forEach((person) => console.log(`Hello ${person}`))



/* Question 3
Given an array of mixed values, log whether or not each value is undefined. */
const mixed = [1, 'hello', undefined, true, null, false, 'world', undefined]
mixed.forEach((val) => {
    val === undefined ? console.log(true) : console.log(false)
})


/* Question 4
Given an array of strings, log the vowel count for each string. */
const arrayOfStrings = ['Hi!', '🎶', "It's", 'a', 'beautiful', 'day', 'in', 'the', 'neighborhood', '🎶']
// arrayOfStrings.split('').forEach(num => {
//     console.log(num)
// })
arrayOfStrings.forEach((string) => {
    let count = 0;
    let vowels = ' a e i o u'
    string.toLowerCase().split('').forEach((char) => {
        if(vowels.includes(char)){
            count++
        }
    })
    console.log(string, count)
})


/* Question 5
Given an array of numbers, double each of them and log them to the console */
const numbers = [1, 2, 3, 4, 5]
numbers.forEach((num) => {
    console.log (num * 2)
})
