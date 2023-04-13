const customers = ["John Doe", "Sally Sal", "Mally Mal", "Theodore Cumberbatch", 
"Curtis Jackson", "Clark Kent", "Peter Parker", "Pegasus Walters"];

//console.log(`Greetings ${customers[0]}`);
//console.log(`Greetings ${customers[1]}`);
//console.log(`Greetings ${customers[2]}`);
//console.log(`Greetings ${customers[3]}`);
//console.log(`Greetings ${customers[4]}`);
//console.log(`Greetings ${customers[5]}`);

//looping from front to back
//for(let i = 1; i < customers.length; i++){
   // console.log(`Greetings ${customers[i]}`);
  //}

//
//  for(let i = customers.length - 1; i >= 0; i--){
//    console.log(`Greetings ${customers[i]}`);
//  }


// const array = [0,9,1,8,2,7,3,6,4,5]
// for(let i = array.length - 1; i >= 0; i--){
//    console.log(`Goodmorning`)
// }



// let i = 0 
// while(i < 10){
//    console.log(i)
//    console.log("hey")
//    i++
//    j++
// } 



// do{
//    console.log(i)
//    i++
// } while(i < 10)
// a loop guaranteed to one once

// const arr = ['a', 'b', 'c', 'f','a', 'l', 'c' ]

// for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//     }    //for(let j = i + 1; j < arr.length; j++){
//          //counter++
//     console.log(arr[i],arr[j])
//     //}
// }

// for(let j = i + 1; j < arr.length; j++){
//     counter++
// }

// const string2 = 'Nobodys Home'
//  let i2 = 0; 
// while(string2[i2] === 'Home'){
//     i--
//     console.log(i2)
//     console.log(string[i2])
// }
    


const string = "Today is my aunts birthday party!"
let i = 0 //index counter

    while(i < string.length){
       i++ 
           if (string[i] === 'a'){
                console.log('we found a')
                //break;
            }else {

            }
                
    }


  const holdValues = [2, 3, 4, 10, 29, 39, 32, 20, 5];
  let i2 = 0;

  while(true){
    if(holdValues[i2] === 5){
      console.log("We Found the 5!");
      break;
    } else {
      i++
      console.log("Still searching...");
    }
  }

  console.log("Phew, you must have found 5!");

  const values = [2, 3, 4, 10, 29, 39, 32, 20, 5];
  let i3 = 0;

  while(true){
    if(holdValues[i3] === 5){
      console.log("We Found the 5!");
      break;
    } else {
      i++
      console.log("Still searching...");
    }
  }

  console.log("Phew, you must have found 5!");


  let favnums = '';

  for(let i4 = 0; i < 10; i++){
    if(i4 === 3 || i4 === 5 || i4 === 9){
        continue;
    }
    favnums += i4;
  }

  console.log(favnums)

  
  
  
  const myShoppingList = ["Apples", "Bread", "Cheese", "Grapes", "Sauerkraut", "Cucumber"];
  const myFridge = ["Tartar Sauce", "Pickles", "Sauerkraut", "Milk", "Cheese"];
  const iAlreadyHave = [];

  for(let i = 0; i < myShoppingList.length; i++){
    for(let j = 0; j < myFridge.length; j++){
      if(myShoppingList[i] === myFridge[j]){
        iAlreadyHave.push(myShoppingList[i]);
      }
    }
  }

  console.log(iAlreadyHave);
  // Output: ["Cheese", "Sauerkraut"]

  
