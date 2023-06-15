// Write a function that takes in a number and returns the 3rd digit from that number 
function get3rdDigit(n) { 
    return +((`${n}`)[2]) 
} 


// Write a function that returns an array of all the numbers between 50 - 150 that are divisible by 3
let divis3Values = []; 
for(let i = 50; i < 151; i += 3) { 
if( i % 3 === 0) { divis3Values.push(i); 
    }
} 

function fiftyto150DivisiableBy3() { 
    return divis3Values; 
} 

console.log(fiftyto150DivisiableBy3());
console.log(fiftyto150DivisiableBy3());
console.log(fiftyto150DivisiableBy3());


// Write a function that takes in an array of numbers and returns the average of all the numbers
function average(numbers) { 
     let sum = 0; 
     for(let i = 0; i < numbers.length; i++) { 
         sum += numbers[i];  
    } 
     return sum / numbers.length; 
    return numbers.reduce((a, c) => a + c, 0) / numbers.length; 
} 

console.log(average([2,2,2,2]), 2)
console.log(average([2,4,6,8,10]), 6)
console.log(average([99, 1]), 50)


// Write a function that takes in an array of elements and returns a true if every element inside is truthy
const isTrue = arr => arr.every(a => a); 

console.log(isTrue([1,2,3,4,5]), true);
console.log(isTrue([1,2,3,4,5, NaN]), false);
console.log(isTrue([0, 1,2,3,4,5]), false);


// Write a function that takes in a number and returns true if the number is odd and false otherwise
function oddOrNot(num) { 
    return !!(num % 2) 
} 

console.log(oddOrNot(7), true);
console.log(oddOrNot(6), false);
console.log(oddOrNot(5), true);


// Write a function that takes in an array of numbers and returns the sum of all positive numbers
function positiveSum(arr) { 
    let sum = 0; 
    arr.forEach(num => { 
        if(num > 0) { 
            sum += num; 
        } 
    }); 
    return sum; 
} 

console.log(positiveSum([1,2,3,4]), 10);
console.log(positiveSum([-4,1,2,3,4]), 10);
console.log(positiveSum([1,-2,3,-4]), 4);


// Write a function that takes in a string input and returns only the letters that are capital letters


// Write a function that takes in a string and returns a count of all the non - letter characters


// Write a function that sorts an array of strings by the last letter in each string

