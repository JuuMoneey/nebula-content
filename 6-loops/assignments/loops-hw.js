// // 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'
for(let i = 0; i <= 30; i++){
    console.log(`the current index is ${i}`)
}


// // 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index
for(let i = 1; i <= 10; i+=2){
    console.log(`the current index ${i}`)
}


// // 3.   Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.
let array = ['Nicki Minaj', 'Destinys Child', 'Micheal Jackson', 'Lola Brooke', 'Lil Baby']
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}


// 4.   Loop over your celebrity list and 
//      If a celebrity's full name has an even number of characters log it to the console
for(let i = 0; i < array.length; i++){
    if(array[i].length % 2 === 0){
        console.log(array[i])
    }
}


// 5.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names
let firstNames = []
for(let i = 0; i < array.length; i++){
    let fN = array[i].split(' ')[0]  
    firstNames.push(fN)
} 
console.log(firstNames)


// 6.   Use the celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only last names
let lastNames = []
for(let i = 1; i < array.length; i++){
    let lN = array[i].split(' ')[1]
    lastNames.push(lN)
}
console.log(lastNames)


// 7.   Loop over the celebrity list and then loop through each name. 
//      If a letter is a vowel, log it to the console
const vowels = 'a,e,i,o,u'
for(let i = 0; i < array.length; i++){
    const celebs = array[i]
    for(let j = 0; j < array.length; j++){
            const char = celebs[j]
        if(vowels.includes(char)){
            console.log(char)
        }
    }
}


// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console
for(let i = 0; i < array.length; i++){
    const celebs = array[i]
    for(let j = 0; j < array.length; j++){
            const char = celebs[j]
        if(char === char.toUpperCase() && char !== ' '){
            console.log(char)
        } 
    }
}


// // 9.   Convert your celebrity array to all caps and no spaces:
// //      Ex:
// //        Input:  ['Martha Stewart', 'David Beckham', etc..] 
// //        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
const upCaseArray = []
for(let i = 0; i < array.length; i++){
    upCaseArray.push(array.toString().toUpperCase().split(" ").join("-").split(","))
    break;
}
console.log(upCaseArray)


// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop

for(let i = 0; i < array.length; i++){
    let fav = 'Nicki Minaj'
    if(array[i] === fav){
        console.log(array[i])
            break;
    } 
}


//BONUS:
//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console
for(let i = 0; i <= 30; i++){
    if(i % 3 === 0 && i % 2 !== 0){
        console.log(i, 'fizz-buzz')
    }else if(i % 3 === 0){
        console.log(i, 'buzz')
    }else if(i % 2 ===0){
        console.log(i, 'fizz')
    }else{
        console.log(i)
    }
}


