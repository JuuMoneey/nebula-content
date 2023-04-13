// document.body.style.backgroundColor = 'white'
// const button = document.createElement('button')
// console.log(button)
// button.textContent = 'Change Background'
// document.body.append(button)


// const changeBg = (event) => {
//     const button = event.target
//     document.body.style.backgroundColor = 'pink'
// }
// button.addEventListener("click", changeBg);

// button.addEventListener('click', () =>{
//     if(document.body.style.backgroundColor === 'white'){
//         document.body.style.backgroundColor = 'pink'
//     }else {
//         document.body.style.backgroundColor = 'white'
//     }
// })



// let clicked = true;
// button.addEventListener("click", (e) => {
//     if(clicked === true){
//         document.body.style.backgroundColor = 'pink'
//         clicked = false;
//      } else {
//        document.body.style.backgroundColor = 'white'
//        clicked = true; 
//      }
// })


// const h1 = document.querySelector('h1')

// const changeColor = (event) => {
//     const h1 = event.target
//     h1.classList.add("someClass");
// }

// h1.addEventListener("click", changeColor)


// let dynamicH1 = document.querySelector('.dynamicH1');
// let clicked = true;

// document.addEventListener("click", (e) => {
//     if(e.target === dynamicH1 && clicked){
//         dynamicH1.style.backgroundColor = "purple";       
//         dynamicH1.style.color = "teal";   
//         clicked = false;    
//     } else if(e.target === dynamicH1 && !clicked){
//         dynamicH1.style.backgroundColor = "teal";       
//         dynamicH1.style.color = "purple";
//         clicked = true;       
//     }
// })
