// Write a function that takes in a number and returns the 3rd digit from that number

// Write a function that returns an array of all the numbers between 50 - 150 that are divisible by 3
// function divisibleBy3(arr){
//     let newArray = []
//     return arr.filter((num) => 50 < num < 150).push(newArray)
// } 
// console.log(divisibleBy3())

function divisibleBy3(arr){
    let newArray = []
    for(let i = 50; i < 150; i+=3){
        if(i % 3 === 0){
            newArray.push(i)
        }
    }
} 
function fiftyToOneFifty(){
    return divisibleBy3;
}


// Write a function that takes in an array of numbers and returns the average of all the numbers
function avgArr(nums){
    return nums.reduce((acc,current) => acc + current, 0) / nums.length
}


function avgArr(nums){
    let sum = 0;
 for(let i = 0; i < nums.length; i++){
    sum += nums[i];
 } 
 return sum / nums.length;
}
console.log(avgArr([2,4,6,8,1,3,5,7,9]))

// Write a function that takes in an array of elements and returns a true if every element inside is truthy
function trueOrNot(nums){
    if(nums === 'true'){
        return true
    }else{
        return false
    }
}

const isTrue = arr => {
    return arr.every(a => a)
}

console.log(trueOrNot([2,4,6,8,1,3,5,7,9]), true)

// Write a function that takes in a number and returns true if the number is odd and false otherwise
function oddOrNot(num){
    if(num % 2){
        return true
    }else{
        return false
    }
}
console.log(oddOrNot(2), true)

// Write a function that takes in an array of numbers and returns the sum of all positive numbers
function filterPositiveNums(arr){
    return arr.find((num) => num % 2) + nums.length
}

function positiveSum(arr){
    let sum = 0;
    arr.forEach(num => {
        if(num > 0){
            sum += num
        }
    })
    return sum
}

// Write a function that takes in a string input and returns only the letters that are capital letters
function filterAllLetters(str){
    const myArray = str.split('')
    return myArray.filter((char) => char.toUpperCase() === char.toLowerCase()).join('')
  }
  console.log(filterAllLetters(string))


// Write a function that takes in a string and returns a count of all the non - letter characters

// Write a function that sorts an array of strings by the last letter in each string
function sortStrings(arr){
    const reversed = []
    for(let name of arr){
        let newName = name.split('').reverse().join('')
        reversed.push(newName)
    }
    const sorted = reversed.sort()
    return sorted.map(name => name.split('').reverse().join('') )
}

function sortStrings(arr){
    return arr.sort((a,b) => {
        if(a[a.length - 1] > b[b.length - 1]){
            return 1
        }else if(a[a.length - 1] < b[b.length - 1]){
            return -1
        }
    })
}

console.log(sortStrings(strings))