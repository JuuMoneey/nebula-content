/* Question 1
Write a higher-order function which takes in two numbers and performs a calculation with them
Write the callback functions separately
  Example:
    calculate(multiply, 2,4) => 8
    calculate(subtract, 2,4) => -2
    calculate(exponent, 2,4) => 16   */

  // HOF
  const calculate = (num1, num2, func) => {
    const calculation = func(num1, num2);
    return calculation;
}
//CALLBACK FUNCTIONS
function subtractTwoNumbers(num1, num2){
  return num1 - num2;
}

function addTwoNumbers(num1, num2){
  return num1 + num2;
}

console.log((calculate(3,6,addTwoNumbers)))
console.log((calculate(9,1,subtractTwoNumbers)))


/* Question 2
Write a function that takes in any array of numbers and performs calculations on them
console.log(arguments) inside of a function to visualize your arguments
Write the callback functions separately
Example:
  calculateAll(multiply,[1,4,1,231,5]) => 4620
  calculateAll(subtract, [2,4,5,7]) => -14
*/
const calculateAll = (operation, array) => {
    for(let i = 0; i < array.length; i++){
        
    }
}


// const calculateAll = (operation, array) => {
//     return array.reduce(operation)
// }


/* Question 3
Write a function that takes in a string and performs some form of manipulation on it
Example:
  modify(yeller, 'I need a nap') => I NEED A NAP!!!
  modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
  modify(code, 'There is no cake') => Th-r- -s n- c-k-
*/




/* Question 4
Write a function that takes in an array filled with different data types and returns each data type
Examples:
  oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
  =>
  ['I love coding, 'goosfraba']

  oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
  =>
  ['Nested Array!']

  oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) 
  =>
  [10, Infinity]
*/

//array method filter 
  
  