// Reminder: control-c will kill an infinitely running node-process

// 1.   Write a while loop that loops over a string until it finds the letter "a"
const string = "Today is my aunts birthday party!"
let i = 0 //index counter

while(string[i] !== 'a'){
    i++
    console.log(i,string[i])
}

//while(i < String.length){
//    if (string[i] !== 'a'){
//        console.log('we found a')
//    }else { i++

//    }
//}


// 2.   Write a while loop that logs to the console the 'count' until the 'count' reaches 100
//      Inside the while loop be sure to increase count by some number
let count = 0; 

while(count < 100){
    count+=10; 
    console.log(count) 
}

// if we wanted it to start from 0 log before condition.
