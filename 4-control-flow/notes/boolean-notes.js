//console.log(5 > 2)
// This is an expression which evaluates to the value true

//console.log(6 === "6") // false

//assignment 
//let x = 3



// This is an expression which evaluates to the value false

/// const storedEvaluation = 10 < 5;
//console.log(storedEvaluation)

5 > 2
// This is an expression which evaluates to the value true

6 === "6"
// This is an expression which evaluates to the value false

// const storedEvaluation = 10 < 5;
// Here I am storing the evaluation of an expression. What value is stored in the above variable? 

// console.log("3" > "2")
// Evaluates to the boolean true

// console.log("5" > "10")
// Evaluates to the boolean false

20 >= 20
// Evaluates to the boolean true - because 20 is greater than or equal to 20


// console.log("a" < "b")
// Evalutes to true

// console.log("e" > "d")
// Evalutes to true

"a" > "z"
// Evalutes to false

// console.log("cat" < "dog")

// !==
// ===

"5" !== 5
// Evaluates to true

"5" != 5
// Evaluates to false, because we are using a loose equality check

5 === 5
// Evaluates to true

5 === "5"
// Evaluates to false, because we are using a strict equality check


// null === undefined
// console.log(null === undefined) //false

// console.log(5 == "5") // true

// console.log(10 !== "10") // true

// console.log(20 === "20") // false

// console.log(20 >= "20") // true

// console.log(30 < 35) // true

// console.log(13 !== 13) // false



//if(20 > 10){
//console.log(20 > 10)
    // perform actions if condition above evaluates to true
//}
  

//let agent = "James Bond";
  
//if(agent === "James Bond") {
  //  console.log("Welcome, Bond. Lets go over your mission debrief.");
//}

//if(5 > 2){
  //  console.log("Of course 5 is greater than 2!");
//}


//let agent2 = "Johnny Bravo";

//if(agent2 === "James Bond"){
  //  console.log("Welcome, Bond. Lets go over your mission debrief.");
//} else {
  //  console.log("Intruder Alert! You have 5 seconds to leave the premises or be dealt with!");
//}


//if(0){
  //  console.log("ZERO")
//}



//if(true && true){
  //  console.log('this is true')
//}

// as long as one is false everything is false no matter how many statements are true.


// if(false || true ){
   // console.log("this is true")
//}


//const userName = 'juliet'
//if(userName){
   // console.log(`Welcome ${userName}`)
//}


  //let y = 10;
  //let x = 25;

  //let text = y > x ? "Hello World" : "y needs to be greater than x";
  //let isOpen = true
//let popup = isOpen ? "show popup" : "hide popup"
//console.log(popup)


//if(y < w){
   // console.log("this is true")
// }else {
   // console.log("this is false")
//}





 // console.log(text);
  // This will log "y needs to be greater than x"

  let food = "Bananas"

  switch(food){
    case "Watermelon":
      console.log("Yes, Watermelon is available for purchase");
      break;
    case "Strawberries":
      console.log("Yes, Strawberries are available for purchase");
      break;
    case "Bananas":
      console.log("Yes, Bananas are available for purchase");
    default:
      console.log(`Sorry, ${food} is not available right now.`);
  }
    switch(true){
        case 10 < 5:
            console.log("10 bigger than 10")
    }


    console.log(typeof 10)

let student1 = 'Juliet'
if(student1 === 'Juliet'){
  console.log(`Welcome ${student1}, thankyou for joining Nebula Academy`)
}

let child = 'Aiden'
if (child === 'Aiden'){
  console.log(`if child has done their chores, they get TV time`)
}
if(agent === "James Bond"){
  console.log("Welcome, Bond. Lets go over your mission debrief.");
} else if(agent === "Johnny Bravo"){
  console.log("You again?! Get out of here Johnny, before I ring the alarm.");
} else {
  console.log("Intruder Alert! You have 5 seconds to leave the premises or be dealt with!");
}

//"if a student scored 80-100 they did "excellent", 60-70 they did "OK", and if they got less than 59 they "failed""

let grade = Math.ceil(Math.random() * 100);
let student = 'Renayah'

if(student === Math.ceil(Math.random() * 100)){
  console.log(`excellent`);
  }else if(student === Math.ceil(Math.random() * 70)){
    console.log(`ok`);
  } else {
    console.log(failed)
  }

  let driver = 'Renayahh'
  let position = Math.ceil(Math.random() * 3)
  switch(position){
    case 1:
    console.log(`Congratulations ${driver} you finished in first place!`);
    break;
    case 2:
      console.log(`Congrats ${driver} you finished in second!`)
    break;
    case 3:
      console.log(`${driver} came in third better luck next time!`)
  }
  