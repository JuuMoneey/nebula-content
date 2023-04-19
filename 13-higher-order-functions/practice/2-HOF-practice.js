/* Question 1
Write a higher order function to manipulate numbers in an array
  Examples:
    changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
    changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
    changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]            */
const changeNums = (arr, func) => {
    let newArr = []
    for(let num of arr){
        let newNum = func(num)
        newArr.push(newNum)
    }
    return newArr
} 

const doubler = (num) => {
    return num * 2
}

console.log(changeNums([1,2,3,4,5], doubler))

/* 
Question 2
Write a higher order function that calculates some features of a string
    Example:
    stringInfo(length, 'Howdy Partner!') => 14
    stringInfo(vowels, 'Howdy Partner!') => 3
    stringInfo(capitals, 'Howdy Partner!') => 2
    stringInfo(nonLetters, 'Howdy Partner!') => 2                    */

const stringInfo = (func, string) => {
    let count = 0;
    for(let char of string){
        if(func(char)){
            count++
        }
    }
    return count
}

const length = (char) => {
    return true
}

const vowels = (char) => {
    let vowels = 'a e i o u' 
    if(vowels.includes(char)){
        return true
    }else{
        return false
    }
}

console.log(stringInfo(length, 'Howdy Partner!'))
console.log(stringInfo(vowels, 'Howdy Partner!'))

/* 
Question 3
Write a higher order function that minimizes a given list of numbers into one number
    Example:
    minimizeNums(add, [2,3,5,8]) => 18                            */

const minimizeNums = (func, arr) => {
    let total = 0;
    for(let val of arr){
        total = func(total, val)
    }
    return total
}

const add = (total, val) => {
    return total + val
}
console.log(minimizeNums(add, [2,3,5,8]))

