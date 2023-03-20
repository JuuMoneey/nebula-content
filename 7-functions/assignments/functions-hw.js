// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]
function addOne(array){
    for(let i = 0; i < array.length; i++){
      array[i] += 1
 }
  return array
}
console.log(addOne([1, 2, 3])) // [2,3,4]

  
  // 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
  // Example string = "happy birthday", letter = "a", should return true
  // Example string = "happy birthday", letter = "q" should return false
function hasLetter(string, letter){
    return string.includes(letter)
}
console.log(hasLetter("happy birthday", "a")) //true
console.log(hasLetter("happy birthday", "q")) //false


  // 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
  // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]
  function names(firstNames){
    const nameArray = []
    for(let i = 0; i < firstNames.length; i++){
      let name = firstNames[i].split(' ')[0]
        nameArray.push(name)
    } 
    return nameArray
  }
console.log(names(["Tom Smith", "Bob Jones", "Bill Williams"]))
  

  // 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
  // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"
  function nameGreet(name){
    let greeting = `Goodnight`
    return (`${greeting} ${name}`);
  }
console.log(nameGreet('Juliet'))
  

  // 5. Write a function that takes in the year someone was born and returns their age.
  // Example: birth year: 2000 returns 23
  function age(birthyear){
    return 2023 - birthyear
  }
  console.log(age(1999))