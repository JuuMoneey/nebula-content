const myArray1 = [10, 9, "grab this"];

  const holdString = myArray1[2];

  console.log(holdString);

const numbersArray = [5, 20, 23, 254, 39919, 394019];



const lastIndex = numbersArray.length - 1
const lastElement = numbersArray[numbersArray.length - 1];

console.log(lastElement);




const top5pokemon = ["Mewtwo", "Mew", "Scizor", "Tyranitar", "Zapados"];
  top5pokemon[3] = "Gengar";
  top5pokemon[top5pokemon.length - 1] = "Moltres";

  console.log(top5pokemon);

  const myLuckyNumbers = [7, 9, 25, 11, 27]; 
  myLuckyNumbers[4] = myLuckyNumbers[4] / 3
  myLuckyNumbers[0] = 'Juliet'
  myLuckyNumbers[1] = myLuckyNumbers[1] * 3
  console.log(myLuckyNumbers)



  const checkMe = [5, 4, 3, 2, 1];

const checkMe2 = "Hah!";

Array.isArray(checkMe);
Array.isArray(checkMe2);

const checking = ["testing", "this", 5, 23];
checking.indexOf(5);



const myArray = ["here", "we", "are"];
//myArray.push("yes!");
console.log(myArray);
// Outputs: ["here", "we", "are", "yes!"]

//myArray.push("ok", "lets", "go");
//console.log(myArray);
// Outputs: ["here", "we", "are", "yes!", "ok", "lets", "go"]
myArray.pop()
const animes = ["Naruto", "Ghost in the Shell", "Full Alchemist", "I am Legend"];
animes.pop();
// const last = animes.pop();

console.log(animes);

const letters = ["a", "b", "c"]
const newLetters = letters.push('d')
console.log(letters)

const multiArray = [[1,2,3], [4,5,6], ["7","8","9"]];
console.log(multiArray[2][1])
const secondArray = multiArray[1]
console.log(secondArray)


console.log(`I have a niece who is ${multiArray[multiArray.length-1][0]} years old.`);

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
