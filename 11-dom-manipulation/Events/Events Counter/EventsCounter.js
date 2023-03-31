// COUNTER EXERCISE

// Select the body element from index.html
const body = document.querySelector("body")
console.log(body)

// Set an attribute of 'style' to the body tag and add a background color of anything other than white
body.style.fontSize = '200%'
body.style.backgroundColor = 'orange'
/* -------------------------------------------------------------------------- */

// Create an h1 element
const h1 = document.createElement('h1')
console.log(h1)

// Append a new h1 element to the body element as a child
const newH1 = document.createElement('h1')
h1.append(newH1)
console.log(newH1)

// Add text to the h1 element 
h1.textContent = 'My name is Juliet!'
document.body.append(h1)
// newH1.textContent = 'I am 23yrs old!'
// document.body.append(newH1)

// Assign the background color of this element to something unique
h1.style.backgroundColor = 'brown'

//Set a new style attribute to the h1 element
h1.style.fontFamily = 'cursive'

// Add font size to the h1Element
h1.style.fontSize = '300%'

// Set the default text to the number zero
h1.textContent = 0;

/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
const button = document.createElement('button')
console.log(button)

// Append the button element to the body element
document.body.append(button)

// Add text to the button that says "Add One"
button.textContent = 'Add One'

// Add a class attribute to button
button.style.backgroundColor = 'green'
/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
//subtract
const button1 = document.createElement('button')
console.log(button1)

// Add the button element to the body element
document.body.append(button1)

// Add text to the button element that says "Subtract One"
button1.textContent = 'Subtract One'

// Add a class attribute of style to the button element
button1.style.backgroundColor = 'yellow'
/* -------------------------------------------------------------------------- */
// INCREMENT BUTTON FUNTION
// Create functionality that, when you click this button it increases the h1 value
h1 += 1


/* -------------------------------------------------------------------------- */
// DECREMENT BUTTON FUNCTION 
// Create functionality that, when you click this button it decreases the h1 value