// Connect your JS file to your HTML file
console.log("Good")

// Select the <h1> element using querySelector() and log it to the console
const holdH1 = document.querySelector("h1");
console.log(holdH1)

// Select the <p> element using querySelector() and log it to the console
const holdP = document.querySelector("p");
console.log(holdP)

// Select the <ul> element using getElementById() and log it to the console
const list = document.getElementById('list')
console.log(list)
//console.log(list.innerText)

// Select the first <li> element using querySelector() and log it to the console
const lis = document.querySelectorAll('li')
console.log(lis)

// Select the second <li> element using querySelectorAll() and array indexing, and log it to the console
const li1 = document.querySelectorAll('li')
console.log(lis)
console.log(lis[1])

///help/// Select all <li> elements using getElementsByClassName() and log them to the console
const li2 = document.getElementsByClassName('item') 
console.log(li2)

// Select the <ul> and create a new <li> and add it to the list
const newList = document.createElement('li')
newList.innerText = 'This is a new li'
list.appendChild(newList)
