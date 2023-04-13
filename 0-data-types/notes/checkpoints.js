// 1. An array is another form of listing characters but in square brackets. 
// Ex. [true, "thank you", 257, [1,2,3], BigInt, null, undefined, {}]



// 2. An array is non-primitive. The types of data that can go into an array is Boolean (true or false), 
// strings ("anything in quotations"), numbers (9), null (value = nothing or 0), 
// BigInt (12,345,678), an array [1,'hi',true], a symbol and undefined.



// 3. 
// let x = [24, 'JV', true, 'Nov', 9, 'Bentley', ]
// let index = x[4]
// console.log(index)



//4. 
//  let arr = [63,100,95,56,88]
//  let total = 0;
//  for(let i = 0; i < nums.length; i++) {
//      total += nums[i];
//  }
//  let mean = total / nums.length;
//  console.log(mean)

// function mean(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     } return sum / arr.length
// }
// console.log(mean(arr))

// function median(arr){
//     arr = arr.sort((a, b) => a - b);
//     if(arr.length % 2 !== 0){
//         return arr[Math.floor(arr.length / 2)]
//     }
// }
// console.log(median(arr))


// function range(arr){
//     let j = arr[1];
//     let v = arr[3];
//    return j - v
// }
// console.log(range(arr))



// 5. The purpose of using loops is to be able to create a code that doesn't 
// have to be written out multiple times.



// 6.
// let array = [9,6,0]
// for(let i = 0; i < array.length; i++){
//     console.log(i);
// }
// First part to a for loop is setting the variable to a value (let i = 0)
// Second part to a for loop is  creating your condition, in this case the condition is (i < array.length) 
// this will determine the length of the array starting from (i) which is (0). 
// Third part to a for loop is the iteration here we use (i++) to increase the value of (i).
// ***I used parentheses in my explanation to highlight key terms.***



// 7.
// function evenNums(array){
// 	let count = 0;
// 	for(let i = 0 ; i < array.length; i++) {
// 		if (array[i] % 2 === 0){
// 			count++;
// 		}
// 	}
// 	return count;
// } console.log(evenNums([2,3,4,5,60,9,24]))



// 8. A multi-dimensional array is an array within an array.



// 9.   
//     let i = 0
//     while(i < 25){
//     i += 2
//     console.log(`${i}`)
//   }



// 10. 
// for(let i = 0; i <= 100; i++){
//     if(i === 10){
//         break;
//     }
//         console.log(i)
// }


