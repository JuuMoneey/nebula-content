// function greeting(){
//     console.log("Hello World!");
// }
// greeting()

// all three are greeting just in different ways.


// const greeting = function(){
//     console.log("Hello World!");
// }
// greeting()


// arrow function 
// const greeting = () => {
//     console.log("Hello World");
// }


//  parameter
// function greetName(name){
//     console.log(`Greetings ${name}! How are you?`);
// }
// greetName("Juliet") //Argument
// greetName("Dayana")

// function greetName(name){
//     return(`Greetings ${name}! How are you?`);
// }
// const response = `Greetings ${name}! How are you?`
// greetName("Amy")
// console.log(response)


// function hasLetterZ(text){
//     for(let i = 0; i < text.length; i++){
//         if(text[i] === 'z' || text[i] === 'Z'){
//             return true;
//         }
//     }
//     return false;
// }




// console.log(hasLetterZ("zoo"))
// console.log("bird")

// const applicant = "Zetra Sloan";

// if(hasLetterZ(applicant)){
//     console.log("Welcome to the Z-club! We are all proud to have that rare letter z in our names!");
// } else {
//     console.log("Unfortunately you didn't make the cut.")
// }


// function howManyZs(text){
//     let count = 0
//     for(let i = 0; i < text.length; i++){
//         if(text[i] === 'z' || text[i] === 'Z'){
//             count++
//         }
//     }
//     return count;
// }





// const neighbor = "Ned Flanders";

// if(neighbor === "Ned Flanders"){
//     const homer = "Homer Simpson";
//     const bart = "Bart Simpson";
//     const lisa = "Lisa Simpson";
//     const maggie = "Maggie Simpson";
//     const marge = "Marge Simpson"

//     console.log(`${bart} Says: "Go away ${neighbor}!"`);
// }

// console.log(bart);


let myAge = 29;

myAge = addOne(myAge);

console.log(myAge);
// Logs: 30

function addOne(num){
    return num + 1;
}

let myAge2 = 29;

myAge = addOne(myAge2);
// ReferenceError occurs here - all the code below won't get executed

console.log(myAge2);

const addOne = num => {
    return num + 1;
}


const name = "Ronald";

function printRonald(){
    const name = "Ronald Spacely"
    console.log(name);
}

printRonald();
// Logs: "Ronald Spacely"