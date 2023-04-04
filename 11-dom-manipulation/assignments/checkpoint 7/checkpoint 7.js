// 2. Define the DOM and its role
// DOM stands for document object model, DOM allows us to create, change, modify, or remove
// elements from the document. Its role is to define the structure of a document and how 
// its accessed


// 3. When we say 'querying the DOM', what does that mean? 
// When we say 'querying the DOM' that means we're calling on the DOM and returning one or more
// element in the DOM.


// 4. How to ids and classes come into play when determining how to query the DOM
// When 'querying the DOM' ids and classes come into play when you want to access them to manipulate
// them to access a class you would getElementByClassName and use a period (.) to specify that it is a class. 
// Where as for an id you would acces the id element using get element by id and use a hashtag (#) to specify 
// its an id. A period for class and a hashtag for ID are both also used when you want to select a class or id 
// from a document. Id's can only manipulate one element whereas a class can manipulate multiple elements. 


// 5. Show at least three different ways to manipulate the DOM
// const div = document.createElement('div')
// console.log(div)
//
// div.innerText = 'Juliet'
//
// const button = document.createElement('button')
// console.log(button)
// button.textContent = 'BG Color'
// document.body.append(button)


// 6. Make a div class and then show two different ways to make the background red
// HTML
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="checkpoint7.css">
// </head>
// <body>
    
// <script src="checkpoint7.js"></script>
// </body>
// </html>

// JS
// const body = document.querySelector("body")
// console.log(body)
// const div = document.createElement('div')
// console.log(div)
// div.className = 'divClass'
// document.body.append(div)

// body.style.backgroundColor = 'red'
// const changeBg = (e) => {
//     const button = e.target
//     document.body.style.backgroundColor = 'pink'
// }


// 7. Write an event listener
// HTML
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="checkpoint7.css">
// </head>
// <body>
    
// <script src="checkpoint7.js"></script>
// </body>
// </html>

// JS
// const body = document.querySelector("body")
// console.log(body)

// const button = document.createElement('button')
// console.log(button)
// button.textContent = 'BG Color'
// document.body.append(button)
// button.addEventListener('click', () =>{
//     if(document.body.style.backgroundColor === 'red'){
//         document.body.style.backgroundColor = 'pink'
//     }else {
//         document.body.style.backgroundColor = 'red'
//     }
// })


// 8. What is Asynchronicity?
// Asynchronicity is code thats waiting to be executed on its own time
// it doesnt need to be read top to bottom like synchronus code it basically 
// runs when events occur.


// 9. What is an event handler and how do you write one?
// An event handler is reaction you create for user events. first to write an event handler you want to 
// select the element you want javascript to look at then you choose the event you want to happen when the element 
// selected is triggered, chose the code you want to run when the event occurs.


// 10. Write a callback function
// function changeBackground(color) {
//     document.body.style.background = color;
//  } 
// console.log(changeBackground('red'))


// 11. Give three examples of user actions that event listeners handle
// Three examples would be clicking a button that allows you to change the
// background color, another example would be using event listner to submit 
// a form, and one more example would be being able select a text making
// the background of that text change.
