// 1.   Create an array that contains two of your favorite things to do
let array = ['cooking', 'dancing']
console.log(array)

// 2.   Using an array method, add another thing you like to do to that list
array.push('cleaning')
console.log(array)

// 3.   Reverse the order of the array (remember, if needed use MDN)
array.reverse()
console.log(array)

//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let arr = weekDays.length
console.log(arr)

// 5.   log the 4th element in the array
let index = weekDays[3]
console.log(index)

// 6.   Remove the first element in the array. Log the new array and the element removed from the array
let removedElement = weekDays.shift()
console.log(removedElement)
console.log(weekDays)

// 7.   Put 'Sunday' back at the beginning of the array and log the new array
weekDays.unshift(removedElement)
console.log(weekDays)

// 8.   Remove the last element in the array. Log the new array and log the element removed
let lastElement = weekDays.pop()
console.log(lastElement)
console.log(weekDays)

// 9.   Add 'Saturday' back to the end of the array and log the new array
weekDays.push('Saturday')
console.log(weekDays)

//10.   Replace 'Thursday' with 'Friday Junior'
weekDays.splice(4, 1, 'Friday Junior')
console.log(weekDays)

//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
let favDay = weekDays[6]
console.log(`My favorite day of the week is ${favDay}`)

//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
const tech = phone.concat(laptop)
console.log(tech)
//const tech = [...phone, ...laptop]

//13.   Write a line of code to test if something is an array or not
let j = [3,6,9] 
console.log(Array.isArray(j))
let v = 'Nope!'
console.log(Array.isArray(v))


// if(Array.isArray(j)){
//    console.log(true)
// }
