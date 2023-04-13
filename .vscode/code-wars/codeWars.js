//MATT PROBLEM
// Sort an array alphabetically by first letter in the sequence
// Input: array of strings
// Output: sorted array of strings
// ‘5JL-598’
// ‘BFW-752’
// ‘HX1-309’
// ‘QZN-146’
// ‘VTP-415’
// ‘99O-827’
// ‘RGA-932’
// ‘643-H81’
// ‘NYX-675’
// ‘UMB-249’
function firstLetter(string) { 
    //input a string 
    //loop through string, if the character is alphabetic return that character 
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    for(let i = 0; i < string.length; i++){ 
        let currentLetter = string[i].toUpperCase() 
        if(alpha.includes(currentLetter)){ return currentLetter 
        } 
    } 
} 
function sortFirst(arr){ 
    let output = '' 
    for(let i = 0; i < arr.length; i++){ 
        let currentPlate = arr[i] 
        //If output does not exist or the first letter in the current plate is before the first letter in the output 
        if(!output || firstLetter(output) > firstLetter(currentPlate)){ 
            output = currentPlate 
        } 
    } return output
}

// Count the number of ‘J’s in a string
// Input str
// Output count of letter ‘J’
// ’Jacob Jinglehiemersmithj’ 
// output 2
// let str = 'Juliet, 25, true, jacob, Josh'
// output 2
// 'bob' 
// output 0
// 'jadJ bbhKKKJjjJ'
// output 3
// 'today was a joke'
// output 0
function firstLetter(string){ 
    //input a string 
    //loop through string, if the character is alphabetic return that character 
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    for(let i = 0; i < string.length; i++){ 
        let currentLetter = string[i].toUpperCase() 
        if(alpha.includes(currentLetter)){ 
            return currentLetter 
        } 
    } 
} 
function sortFirst(arr){ 
    let output = '' 
    for(let i = 0; i < arr.length; i++){ 
        let currentPlate = arr[i] 
        //If output does not exist or the first letter in the current plate is before the first letter in the output 
        if(!output || firstLetter(output) > firstLetter(currentPlate)){ 
            output = currentPlate
         } 
        } return output
    }



//DAYANAS PROBLEM
// Summing up the value of an array (just numbers)
// Input array
// Output number all elements summed together
// [4,2,4,0] = 10


//ASADS PROBLEM
// Given an array of grades of students find the number of passing students (65%)
// Input array student grades
// Output count of students who are above the passing gradepoint
// [70, 55, 2, 100, 95, 85] = 4


//
// Is an element in a string or array (remake the includes function)
// Input haystack (array | string), needle (any)
// Output boolean is the needle inside the haystack
// [‘1’,’2’,3,’4’], 4 = false 
// [‘1’,’2’,3,’4’], 3 = true
//set a variable = to


//JUDAHS PROBLEM
// 5. Given a nested array of strings, write a function that returns a new array 
// with the sum length of each string in the nested arrays, 
//if the array is empty, return 0
function sumLengths(array){
    // aggregate the total value
    let sum = 0
    //loop through the array
    for(let i = 0; i < array.length; i++){
    //currentword represents the strings
        let currentWord = array[i]
        if(Array.isArray(currentWord)){
            sum += sumLengths(currentWord)
        } else {
                sum += currentWord.length    
        }
    } 
    console.log(sum)
    return sum 
}
console.log(sumLengths([])) //0
console.log(sumLengths(['judah'])) //5
console.log(sumLengths(['judah', 'eric'])) //9
console.log(sumLengths([['hello', 'world'], ['how', 'are', 'you'], ['wonderful', 'day', 'today']])); //36
console.log(sumLengths([['preference', 'equation'], ['nuance', 'vague'], ['economist', 'round']])); //43


//Dayana's problem
// Summing up the value of an array (just numbers) Input array Output number all elements summed together
//reduce method compares a,b parameters, converting to added sum each iteration
// const sumArray = (arr) => {
//     return arr.reduce((a,b)=>a+b)
// }
//set counter variable, use for loop to iterate through array, add to sum each iteration
// const sumArray1 = (arr) => {
// let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//      }
//     return sum
// }
// const test1 = [10,77] //= 87
// const test2 = [28,52] //= 80
// const test3 = [20,20,60] //= 100
// const test4 = [7,11,3] //= 21
// const test5 =  [4,2,4,0] //= 10

//tests both methods

// console.log(sumArray(test1))
// console.log(sumArray1(test1))
// console.log(sumArray(test2))
// console.log(sumArray1(test2))
// console.log(sumArray(test3))
// console.log(sumArray1(test3))
// console.log(sumArray(test4))
// console.log(sumArray1(test4))
// console.log(sumArray(test5))
// console.log(sumArray1(test5))