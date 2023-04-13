// 1. Write a function that takes in 1 number and returns that number + 1
function addOne(num){
    return num += 1
}
console.log(addOne(9))


// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
function nameGreet(name){
    let night = `Goodnight`
    return (`${night} ${name}`);
  }
console.log(nameGreet('Juliet'))


// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
function zero(array){
    for(let i = 0; i < array.length; i++){
      if(array[i] === 0){
        return `This array has the number zero in it`
      }else{
        return `This array doesn't have number zero in it`
        }
    }
}
console.log(zero([1, 2, 3]))
console.log(zero([1, 2, 3, 0]))

// 4. Write a function that console logs 'hello world' 10 times to the console. 
function string(){
    for(let i = 0; i < 10; i++){
        console.log("Hello World")
    }
}
string()

// 5. Write the prior function utilizing a 'fat arrow' function
const string1 = (fatArrow) => {
    for(let i = 0; i < 10; i++){
        console.log(fatArrow)
    }
}
string1("Hello World")





