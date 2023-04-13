// 1.   Given an array of strings
//      Loop over the array of strings
//      And loop over each string.
//      If a word has the letter "a" in it, log it to the console
const names = ['Bill', 'Jordan', 'Pete', 'Daniel']

for(let i = 0; i < names.length; i++){
    const name = names[i] 
for(let j = 0; j < name.length; j++){
    const letter = name[j]
    if(names[j] === 'a'){
        console.log(`a in ${name}`)
        }
    }
}



// 2.   Given an array of strings
//      Loop over the array
//      And loop over each string.
//      Create a new array of strings where every other letter in each string is capitalized 
//      Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']
const stringArray = ['This','is','an','array','of','strings']
const newArray = []
for(let i = 0; i < stringArray.length; i++){
    let word = stringArray[i]
    let newStr = ''
for(let j = 1; j < word.length; j++){
    const letter = word[j]
 if(j % 2 === 0){
    newStr += letter.toUpperCase()
 }else{
    newStr += letter
 }
   } 
   newArray.push(newStr)
}
console.log(newArray)



// 3.   Given an array of arrays of numbers (nested array)
//      Add all the inner values up and push them into a single array
//      Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]
const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] 
const sumsArr = []
for(let i = 0; i < arrayOfArrays.length; i++){
    const arr = arrayOfArrays[i]
    let sum = 0
    for(let j = 0; j < arr.length; j++){
        const num = arr[j]
        sum = sum + num
    }
    sumsArr.push(sum)
}
console.log(sumsArr)




// let arr = [5, 4, 3]
// let sum = 0

// for(let j = 0; j < arr.length; j++){
//      const num = arr[j]
//      sum = sum + num
//  }
//     console.log(sum)

