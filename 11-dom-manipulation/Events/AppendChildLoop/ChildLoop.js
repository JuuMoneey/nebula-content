// Given this array
// We want to append a new list item to a list by looping over this array
// We want to do this only with JavaScript
// YOU SHOULD NOT TOUCH THE HTML FILE

// Steps
// Create a list and append it to the body
// Loop over todos and create a list item for each one and append it to the newly created list with the todo text.
const todos = ['Walk the dog', 'Make Dinner', 'Do Dishes', 'Mow Lawn', 'Make Bed']

const list = document.createElement('ul')
console.log(list)

for(let i = 0; i < 5; i++){
    let newLi = document.createElement('li') //list items
        newLi.innerText = todos[i];
    document.body.appendChild(newLi)
}



const body = document.querySelector('body')
body.style.fontFamily = 'cursive'
body.style.textAlign = 'center'
body.style.fontSize = '300%'
body.style.backgroundColor = 'pink'
body.style.color = 'brown'
