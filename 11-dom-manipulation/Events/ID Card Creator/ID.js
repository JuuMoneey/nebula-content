const body = document.querySelector('body')
console.log(body)
body.style.backgroundColor = 'burlywood'
body.style.color = 'brown'
body.style.fontSize = '100%'


const div = document.querySelector('.div')


const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()

    const { firstName, lastName, age, coHortNumber, funFact } = event.target
    console.log(firstName.value)
    console.log(lastName.value)
    console.log(age.value)
    console.log(coHortNumber.value)
    console.log(funFact.value)
    console.log(event.target)

    const value1 = document.createElement('h1')
    value1.textContent = firstName.value
    div.append(value1)
    
    const value2 = document.createElement('h1')
    value2.textContent = lastName.value
    div.append(value2)
    
    const value0 = document.createElement('h1')
    value0.textContent = age.value
    div.append(value0)

    const value3 = document.createElement('h1')
    value3.textContent = coHortNumber.value
    div.append(value3)
    
    const value4 = document.createElement('h1')
    value4.textContent = funFact.value
    div.append(value4)

    const image = document.createElement('img')
    image.src = 'IMG_4150.JPG'
    div.append(image)

    form.reset()
})
