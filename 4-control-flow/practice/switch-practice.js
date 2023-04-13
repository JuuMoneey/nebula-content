// Utilize the switch statement to re-write your horse-racing exercise from earlier
// Feel free to copy the old if statement in and convert it into a switch statement
// Create a Horse Racing program that when executed, stores a random number in a variable called position between 1 and 5. 
// The program should then check to see what number is stored in the variable and output the messages indicated in the comments below.


// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."

let horseName = "Romero";
let position9 = Math.ceil(Math.random() * 5)

switch(position9){
 case 1:
    console.log(`${horseName} finished in first place!`);
    break;
 case 2:
    console.log(`${horseName} finished in second place!`);
    break;
 case 3:
    console.log(`${horseName} finished in third place!`);
    break;
 default:
    console.log(`${horseName} did not finish in top 3!`)
}

 // Romero finished in first place!


 

  let y = 34;
  let x = 45;

  let sub = (y < x && y === x) ? "Correct" : "y is not equal to or less than x";

  console.log(sub);
  


  let x1 = 456;
  let y1 = 259;
  if(x1 < 259 && y1 > 456){
   console.log(`Correct`);
  }
  