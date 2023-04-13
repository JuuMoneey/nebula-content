// 1. Write a function that multiplies 3 input numbers together.
function multiply(num1, num3, num2){
    return num1 * num2 * num3
}
console.log(multiply(9, 8, 1))


// 2. Write a function that takes in a number and logs all odd numbers leading up to that number
// const oddNumbers = (val) => {
//     let i = 1
//     while(i < val){
//         if(i % 2 !== 0){
//             console.log(i)
//         }
//     }
// }
function countup(input){
    for(let i = 0; i <= input; i++){
     if(i % 2 === 1){
        console.log(i)
     }
    }  
 }
 countup(10)
 

// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 
let celebs = ['Nicki Minaj', 'Destinys Child', 'Micheal Jackson', 'Lola Brooke', 'Lil Baby']
function initals(celebs){
    const initalsArray = []
for(let i = 0; i < celebs.length; i++){
    let initals = celebs[i].split(' ')[0][0] + celebs[i].split(' ')[1][0]
    initalsArray.push(initals)
    }
    return initalsArray
}
console.log(initals(celebs))


// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator
// function addOne(num){
//     let nums = 13
//     return num += nums
// }
// console.log(addOne(9))
function calculate(num1, num2, operation){
    if(operation === '+'){
        return num1 + num2
    }else if(operation === '-'){
        return num1 - num2
    }else if(operation === '*'){
        return num1 * num2
    }else if(operation === '/'){
        return num1 / num2
    } 
}
console.log(calculate(10, 8, '-'))
console.log(calculate(5, 5, '*'))
console.log(calculate(3, 4, '+'))
console.log(calculate(100, 10, '/'))


// 5. Write a function which takes in two arrays and returns those arrays combined together. 
let x = [1, 9, 9, 9]
let y = [1, 1, 2, 4]
function combined(cArray1, cArray2){
    let totalArray = cArray1.concat(cArray2)
    return totalArray 
}
console.log(combined(x, y))


