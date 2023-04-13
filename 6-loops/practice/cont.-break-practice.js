// 1.   Write a for loop that looks for the letter a
//      The loop should log the letter 'a' to the console
//      STOP immediately after finding the letter 'a'
let string = "Today is my aunts birthday party!" 

    for(let i = 0; i < string.length; i++){ 
           if (string[i] === 'a'){
                console.log('we found a')
                break;
            }else {

            }
    }


// 2.   Write a for loop that looks for a number
//      The loop should log 'at index _ there is the number _' to the console 
//      Stop immediately after finding that number
//      ex: Input: ['a','b','c', 100,'e']
//          Output: 'at index 3 there is the number 100'
let ar = [9, 'b', true, 'Juliet', 'happy']
for(let i = 0; i < ar.length; i++){
    if(typeof(ar[i]) === 9){
        console.log(`at index ${i} there is the number ${ar[i]}`)
        break;
    }
}

// 3.   Using the continue keyword loop over an array of numbers & strings
//      If the current element is a number skip it
//      Otherwise add the element to an array
//      After finishing the loop log the new array to the console




