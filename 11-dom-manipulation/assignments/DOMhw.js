// Connect your JS file to your HTML file


// Select the <h1> element using querySelector() and log it to the console
const holdH1 = document.querySelector("h1");
console.log(holdH1)

// Select the <p> element using querySelector() and log it to the console
const p = document.querySelector("p");

// Select the <ul> element using getElementById() and log it to the console


// Select the first <li> element using querySelector() and log it to the console
const lis = document.querySelectorAll('li')
console.log(lis)
console.log(lis[1])

// Select the second <li> element using querySelectorAll() and array indexing, and log it to the console
const li1 = document.querySelectorAll('li')
console.log(lis)
console.log(lis[2])

// Select all <li> elements using getElementsByClassName() and log them to the console
const li2 = document.getElementsByClassName('.list') 
console.log(li2)


// Select the <ul> and create a new <li> and add it to the list
