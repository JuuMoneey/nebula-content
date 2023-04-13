// FUNCTIONS PRACTICE!

//// 1.  Define a function called multiplyBy10 that takes in one number argument and returns that number multiplied by 10. 
////     Test the function with some numbers.
function multiplyBy10(number){
    return number *10
}
console.log(multiplyBy10(10))
console.log(multiplyBy10(9))




//// 2.  Define a function called sayGoodbye that uses a name parameter and returns a farewell message incorporating that name.
function sayGoodbye(name){
         return (`Farewell ${name}! Have a good day!`);
     }
console.log(sayGoodbye('Juliet'))
console.log(sayGoodbye('Judah'))




//// 3.  Define a function called evenNumbers that takes in an array as an argument and iterates over that array and returns a 
////     new array with all the even numbers from that input array 
//        (Hint: you can use the modulus operator to check whether a number is even or not).
function evenNumbers(array){
   let evenNumbers = []
   for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
        evenNumbers.push(array[i])
    }
   } 
   return evenNumbers 
}
console.log(evenNumbers([3,6,9,12]))
console.log(evenNumbers(['jv',24,'Nov.',2000]))




//// 4.  Define a function called reverseWords that takes in a string and returns a string with the order of words reversed.
function reverseWords(string){
    return string.split('').reverse().join('') 
}
console.log(reverseWords(`Level`))
console.log(reverseWords('Rotator'))
