// 2.What is a function and why is it useful?
// Functions are labeled chunks of code (or statements) that can be used over and over again waiting to be ran. 
// Functions are useful because its an easier way to type in arguments (or parameters) when executing a code, 
// also you don't have to call a function.


// 3.Explain a parameter and an argument 
// A parameter is a placeholder for typed in data that can be passed into a function when executed and 
// an argument will replace the name parameter when executed giving us a value of sort.


//4.Write a function declaration, a function expression, and an arrow function
// Function Declaration:
// let num = 5 
// function divideOne(num){
//     return num / 1;
// } 
// console.log(num)

// Function Expression:
// studentName();
// function studentName(){
//     console.log('Juliet');
// }

// Arrow Function:
// const favCar = (car) => {
//     return `My dream car is a ${car}.`;
// }
// console.log(favCar('Bentley'))


// 5.What is a higher order function and why do we use them?
// A higher order function is a that takes in a function, we use them 
// when we want to apply any argument to all values listed.


// 6. Declare an object that a school system may use to represent a student
// const student = (idNum, teacher, name) => {
//     idNum[teacher] = name
// }
// console.log('9904321', 'Mrs.davis', 'Billy')

//or

// const student = {
//     teacher: 'Mrs.Davis',
//     idNum: '9904321',
//     name: 'Billy'
// }
// console.log(student)


// 7.What is a property and what is a method in relation to objects?
// A property is simply key and value pairs that help describe an object. 
// A method in relation to an object is definig the function on the said object.


// 8.Describe a key-value pair
// A key - Value pair is simply a variable that holds a referenced value. A key value pair is a set contained of two data elements. 
// These two elements are key which is a variable that defines the set data where as the value is a number or string 
//that belongs to its given key.


// 9.Create an object with at least 5 key pairs and then access 3 of those keys
// const dinner = {
//     drink: 'Strawberries and cream Dr.pepper',
//     appetizer: 'chips and dip',
//     side1: 'Mac and Cheese',
//     side2: 'cabbage',
//     side3: 'Candied Yams',
//     protein: 'Honey Hot Fried Fish',
// }
// console.log(dinner)
// console.log(dinner.appetizer)
// console.log(dinner.drink)
// console.log(dinner.protein)



// 10.Create a method using your object
// const dinner = {
//     ateDinner: function(){
//         console.log('EVERYTHING was Delicious!');
//     }
// }
// dinner.ateDinner()

// or

//  const dinner = {
//         drink: 'Strawberries and cream Dr.pepper',
//          appetizer: 'chips and dip',
//          side1: 'Mac and Cheese',
//          side2: 'cabbage',
//          side3: 'Candied Yams',
//          protein: 'Honey Hot Fried Fish',
//            ateDinner: function(){
//                 console.log('EVERYTHING was Delicious!');
//             }
//      }
//      dinner.ateDinner()
//     console.log(dinner)



// 11.Create a function that allows you to add new properties to your object
// const addProperty = (obj, prop, val) => {
//     obj[prop] = val
// }
// addProperty(dinner, 'protein', 'Honey Hot Fried Fish')
// addProperty(dinner, 'bread', 'sweet potato cornbread')
// addProperty(dinner, 'Desert', 'louisiana crunch cake')
// console.log(dinner)

// for(let key in dinner){
//     console.log(dinner[key])
// }
