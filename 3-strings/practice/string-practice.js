// Turn the following string into all lowercase letters
const noCaps = 'This Should Not Have Capital Letters!'

console.log(noCaps.lowercase())


// Turn the following string into all uppercase letters
const loud = "i'm very loud!";

console.log(loud.uppercase())



// Join the prior two variables together 

let combine = `${noCaps}${loud}`
console.log(combined)



// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';

console.log(stringOfNames.split(" "))



// Make your own mad-libs using a template literal

let adjective = 'delicious'
let food = burger
let template = `i could really go for a ${adjective}${food}`
console.log(template)



// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"

const initals = iroman[0] + ironman[5]
console.log(initals)



// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"

const allstar = string.slice(19,27)
console.log(allstar)



// Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 

let qMark = string1[11]
const lastIndex = string1.length - 1
const lastChar = string1[lastIndex]



// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';

const sum = parseInt(ten) + parseInt(five)
console.log(+ten + +five)
console.log(sum1)



// Given the following sentence, turn it into an array.
const sentence = 'Welcome to the jungle!';

console.log(sentence.split(' '))



