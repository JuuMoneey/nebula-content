// // 1.   Declare a for loop that starts at 0, goes until 20, and increments by 1
// //      Each loop it should log to the console the current index
for(let i = 0; i <= 20; i++){
    console.log(i)
}

// // 2.   Declare a for loop that starts at 1, goes until 40, and increments by 2
// //      Each loop it should log to the console the current index

// +(value) = operation reassign by 2
for(let i = 1; i <= 40; i+=2){
    console.log(i)
}

// // 3.   Create an array with all student names in it. 
// //      Loop over the array and log each student's name to the console.
// //      Inside the array declare an unrequired, but useful variable for 'currentStudent'
let students = ["Juliet", 'Dayana', 'AuLexis', 'Abdel', 'Judah', 'Donald', 'Asadur', 'Matt']
for(let i = 0; i < students.length; i++){
    const currentStudent = students[i]
    console.log(currentStudent)
}

// // 4.   Use the array below for the following question
// //      Loop over the numArray & ONLY log even numbers to the console.
// //      2 Hints: there will be an IF statement within the loop & be sure to check the value, not the index
const numArray = [5, 3, 2, 1, 10, 20, 30, 22, 33, 12, 11, 9, 6, 3];

for(let i = 0; i < numArray.length; i++){
    if(numArray[i] % 2 === 0){
        console.log(numArray[i])
    }
}

// // 5.   Use the above numArray array for this question
// //      Create a for loop which will iterate over each element of the above numArray and output a new array of only odd numbers
const oddNums = []
for(let i = 0; i < numArray.length; i++){
    if(numArray[i] % 2 === 1){
        console.log(numArray[i]); {
            oddNums.push(numArray[i])
        }
    }
}
console.log(oddNums)

// 6.   Using the nums and the two empty placeholder arrays below
//      Create a for loop which will fill the two separate arrays, one with only positive numbers, one with only negative numbers

        const nums = [5, 3, 2, -1, 10, 20, 30, -22, 33, 12, 11, 9, 6, -3];
        const positiveArr = [];
        const negativeArr = [];

for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0){
        positiveArr.push(nums[i]);
    }else {
        negativeArr.push(nums[i])
    }
} 
console.log(positiveArr)
console.log(negativeArr)


//with ternary
// for(let i = 0; i < nums.length; i++){
//    nums[i] < 0 ? negativeArr.push(nums[i]) : positiveArr.push(nums[i])
// }
// console.log(positiveArr)
// console.log(negativeArr)

