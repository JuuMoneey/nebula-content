// 2. What three technologies are most websites composed of?
// HTML
// CSS
// SCRIPT


// 3. Write the outline for an html page that connects both the CSS and js pages.
// <!DOCTYPE html>
//  <html lang="en">
//  <head>
//      <title>Document</title>
//      <link rel="stylesheet" href="checkpoint6.css">
//  </head>
//  <body>
//      <script src='checkpoint6.js'></script>
//  </body>
//  </html>


// 4. Describe a parent vs a child element
// A parent element is the container the the child element is held in. For example
// if you were to create a 'div' and then put a 'p' (parargragh) within it, the 'div' becomes
// a parent to the child element 'p' .


// 5. Describe event bubbling 
// Event bubbling is when an event that targets an element also targets its parent 
// all the way to the root of the html. For example when you create a div 
// inside a body and inside that div you put a button whit the event of clck, 
// when that button is clicked essentially your also clicking 
// the div, the body, and the html.


// 6. Using div tags and CSS, make a solid red circle inside of a green square
// HTML:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Document</title>
//     <link rel="stylesheet" href="checkpoint6.css">
// </head>
// <body>
//    <div class="square">
//        <div class="circle"></div>
//    </div>
//     <script src='checkpoint6.js'></script>
// </body>
// </html>

//CSS:
// body{
//     display: flex;
//     justify-content: center;
// }

// .square{
//     height: 300px;
//     width: 300px;
//     background-color: green;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .circle{
//     background-color: red;
//     border-radius: 50%;
//     width: 100px;
//     height: 100px;
// }


// 7. Write a paragraph and use flexbox to center it
// HTML:
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <title>Document</title>
//     <link rel="stylesheet" href="checkpoint6.css">
// </head>

// <body>
//     <div class="square">
//         <div class="circle"></div>
//     </div>
//     <div id="P">
//         <p>Hey its me Juliet here, thankyou for taking the time to grade my checkpoint.
//             This bootcamp has shown me things about myself, that i've never thought to notice.
//             This is just one of the reasons why i am grateful to be apart of something that is
//             life changing not just financially or skills but too grow my mind and show myself
//             no matter what I can do anything as long as i work for it. Thankyou nebula academy. </p> 
//     </div>
//     <script src='checkpoint6.js'></script>
// </body>
// </html>

// CSS:
// *{
//     margin: auto; 
//     padding: 30px;

// body{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// }

// #P{ 
//     height: 200px;
//     width: 500px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

// }

// p{
//     display: flex;
//     justify-content: center;
//     flex-direction: row;
//     text-align: center;
// }


// 8. What is an anchor tag and why do we use them?
// An anchor tag is the <a> element that is used to link outside websites to your HTML so it 
// can appear onto your webpage. We use them to allow users to access links through the 
// webpage also to allow users to access certain parts within the webpage. For example 
// if its a really long article about different exotic fruits but you want users to be 
// able to just read only about dragonfruit if they liked, you would link the part of 
// your webpage about dragonfruit so that users could just click link bringing you 
// straight to the part of the article about dragonfruit.


// 9. What is the difference between an id and a class and when would you use which?
// The difference between class and id is, class can be used to assign multiple elements whereas an 
// id can be used when you want to assign a specific element. Class is used with a period (.); 
// where id is used with a hashtag (#).


// 10. Create both an id and a class and then access them in CSS
// HTML:
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <title>Document</title>
//     <link rel="stylesheet" href="checkpoint6.css">
// </head>

// <body>
//     <div class="square">
//         <div class="circle"></div>
//     </div>
//     <div id="P">
//         <p>Hey its me Juliet here, thankyou for taking the time to grade my checkpoint.
//             This bootcamp has shown me things about myself, that i've never thought to notice.
//             This is just one of the reasons why i am grateful to be apart of something that is
//             life changing not just financially or skills but too grow my mind and show myself
//             no matter what I can do anything as long as i work for it. Thankyou nebula academy. </p> 
//     </div>
//     <script src='checkpoint6.js'></script>
// </body>
// </html>

// CSS:
// body{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// }

// .circle{
//     background-color: red;
//     border-radius: 50%;
//     width: 100px;
//     height: 100px;
// } 

// #P{ 
//     height: 200px;
//     width: 500px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

// }


// 11. Give an example of a block element and an inline element?
// A block element example would be <div>, <p>, or <form> .
// A inline element example would be <button>, <script>, or <img> .

