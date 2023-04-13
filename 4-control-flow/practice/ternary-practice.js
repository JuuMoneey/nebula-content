// USE FAKE INFO FOR THE FOLLOWING EXERCISE
//let x = 'juliet'
//const val = x ? "log in user" : "user is wrong"
//console.log(val)


// Initialize a variable called creditCardNum, set it equal to a fake credit card string-number
let creditCardNum = '103254769801'

// Initialize a variable called last4SS, set it equal to a 4 string-numbers (dont use your real SS last 4!)
let last4SS = '5699'

// Initialize a variable called userId, set it equal to a fake user ID
let userId = 'Sag23'

// Initialize a variable called password, set it equal to a fake password
let password = '$agittarius09'

// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password
let inputId = userId
let inputpass = password

// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass
// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'
const result = (inputId) && (inputpass) ? `${creditCardNum} ${last4SS}` : 'incorrect username or id'
console.log(result)



// if(userId === inputId){
  //  console.log()
// }else if(password){
  //  console.log(inputpass)
// }else ()