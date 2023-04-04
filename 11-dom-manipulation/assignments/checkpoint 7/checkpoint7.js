const body = document.querySelector("body")
console.log(body)


const div = document.createElement('div')
console.log(div)
div.className = 'divClass'
div.innerText = 'Juliet'
document.body.append(div)

body.style.backgroundColor = 'red'
// function changeBackground(color) {
//     document.body.style.background = color;
//  } 
// console.log(changeBackground('red'))
// const changeBg = (e) => {
//     const button = e.target
//     document.body.style.backgroundColor = 'pink'
// }

const button = document.createElement('button')
console.log(button)
button.textContent = 'BG Color'
document.body.append(button)
button.addEventListener('click', () =>{
    if(document.body.style.backgroundColor === 'red'){
        document.body.style.backgroundColor = 'pink'
    }else {
        document.body.style.backgroundColor = 'red'
    }
})

// const btn = document.querySelector('button')
// btn.onclick = () => {
//     console.log('Juliet');
// }





