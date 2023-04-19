let score = document.querySelector('#score').innerText

class Enemy {
    constructor(color, weapon, motive, height, width, x, y, health){
        this.color =color
        this.weapon = weapon
        this.motive = motive
        this.height = height
        this.width = width
        this.x = x
        this.y = y
        this.health = health
    }

    appendEnemy(){
        // create a div
    const enemyElement = document.createElement('div')
    // set attributes / styles 
//enemyElement.setAttribute('color','weapon','motive','height','width','x','y','health')
//Background image
        enemyElement.style.height = this.height
        enemyElement.style.width = this.width
        enemyElement.style.backgroundColor = `#${this.color}`
        // left and top properties (x,y)
        enemyElement.style.left = this.x
        enemyElement.style.top = this.y
        // position
        enemyElement.style.position = 'absolute'
        // add event listner
        enemyElement.addEventListener('click', (e) => this.removeEnemy(e))
        document.body.appendChild(enemyElement)
        // append to document
    document.body.appendChild(enemyElement)
    enemyElement.addEventListener('click', (e) => this.removeEnemy(e))
    document.body.appendChild(enemyElement)
    }

    removeEnemy(e){
        // change image to explosion
        // delay element being removeChild 
        // set timeout
        // 1 sec. -> 1000
        // remove it
        document.body.removeChild(e.target)
        //console.log('REMOVED')
        score.innerText++
        // let newScore = +score.innerText
        // newScore++
        // score.innerText = newScore
    }
}

const enemy = new Enemy('pink','sword','angry','100px','100px','200px','200px',100)
enemy.appendEnemy()
console.log(enemy)


function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// const addNums = (x,random)=> {
//     return x + random
// }
  
// for(let i = 0; i < 10; i++){ 
//     // height and width between 25 - 200px
//     const randomValue = randomNumber(25, 200)
//     // x 0 -1000px
//     const randomX = randomNumber(0, 1000)
//     // y 0 - 700px
//     const randomY = randomNumber(0, 700)
//     // random color
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);

//     const newEnemy = new Enemy(randomColor,'sword','angry',`${randomValue}px`,`${randomValue}px`,`${randomX}px`,`${randomY}px`,100) 
//     newEnemy.appendEnemy() 
// }


const createRandomEnemy = () => {
    const randomValue = randomNumber(25, 200)
    const randomX = randomNumber(0, 1000)
    const randomY = randomNumber(0, 700)
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    const newEnemy = new Enemy(randomColor,'sword','angry',`${randomValue}px`,`${randomValue}px`,`${randomX}px`,`${randomY}px`,100) 
    newEnemy.appendEnemy() 
}
createRandomEnemy()

setInterval(createRandomEnemy, 1000)

// const newEnemy = new Enemy('pink','sword','angry',randomHeight,randomWidth,'200px',100)
// newEnemy.appendNewEnemy()
// console.log(newEnemy)
