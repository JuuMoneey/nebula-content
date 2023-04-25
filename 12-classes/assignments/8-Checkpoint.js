// ask questions on 11, 9 , 6 and 3 - 5 not sure what its asking me. 

// 2. What is a class?
// a class is a blueprint used to create objects that have similar properties/attributes and characteristics. 


// 3. Write a class for an elevator. It has properties that include, a current floor, whether it's in transit, and if it is being occupied.
class Elevator {
    constructor(currentFloor, transit, occupied){
        this.currentFloor = currentFloor
        this.transit = transit
        this.occupied = occupied
    }
}


// 4. Add a method to the elevator that you created in the problem above which logs the current floor
class Elevator {
    constructor(currentFloor, transit, occupied){
        this.currentFloor = currentFloor
        this.transit = transit
        this.occupied = occupied
    }

    printCurrentFloor(){
        console.log(`The elevator is on floor ${this.currentFloor}`)
    }
}

const pennStation = new Elevator(3, 'not in transit', '4 people')
pennStation.printCurrentFloor()


// 5. Add a method to the elevator that you created in the problem above which changes the elevators current floor to a new floor.
//incrament by 1 or -1

class Elevator {
    constructor(currentFloor, transit, occupied){
        this.currentFloor = currentFloor
        this.transit = transit
        this.occupied = occupied
    }

    printCurrentFloor(){
        console.log(`The elevator is on floor ${this.currentFloor}.`)
    }

    printNewFloor() {
        this.currentFloor -= 1;
        console.log(`The elevator is now on floor ${this.currentFloor}.`);
    }

}

const docsOffice = new Elevator(2, 'not in transit', '2 people')
docsOffice.printElevator()
docsOffice.printNewFloor()


// 6. Create a class for an animal and two different child classes for two different animals
class Animal {
    constructor(name, noise, eats, legs){
        this.name = name
        this.noise = noise
        this.eats = eats
        this.legs = legs
    }

    printAnimal(){
        console.log(`${this.name} have ${this.legs} legs, they ${this.noise} and are ${this.eats}.`)
    }
}
const lion = new Animal('Lions', 'Roar', 'carnivorous', 4)
lion.printAnimal()

class Bird extends Animal {
    constructor(name, noise, eats, legs, wings){
        super(name, noise, eats, legs);
        this.wings = wings
    }

    printBird(){
        console.log(`${this.name} have ${this.legs} legs, they ${this.noise}, have ${this.wings} wings to fly and are ${this.eats}.`)
    }
}
const duck = new Bird('Ducks', 'quack', 'omnivorous', 2, 2)
duck.printBird()

class Reptile extends Animal {
    constructor(name, noise, eats, legs, body){
        super(name, noise, eats, legs);
        this.body = body
    }

    printReptile(){
        console.log(`${this.name} have a ${this.body} back, make a ${this.noise}, have ${this.legs} and are ${this.eats}.`)
    }
}
const turtle = new Reptile('turtles', 'click noise', 'herbivores', 4, 'shell')
turtle.printReptile()


// 7. Create your own higher-order function which takes in two numbers and a callback function. The callback function should perform subtraction on those numbers.
// NOTE: Do not use any existing higher order functions, write your own callback function. You should be creating two functions, the higher order function & the callback. 
const calculate = (num1, num2, func) => {
    const calculation = func(num1, num2);
    return calculation;
}

function subtractTwoNums(num1, num2){
    return num1 - num2;
}
console.log(calculate(8,1,subtractTwoNums))
console.log(calculate(5,4,subtractTwoNums))


// 8. Using existing higher order functions, write a line of code that simplifies all numbers in an array into one number that is the product of all numbers multiplied together. 
const nums = [5, 1, 4]
let total = (nums.reduce((num, num2) => {
    return num * num2
}))
console.log(total)


// 9. Using existing higher order functions, write a line of code that returns an array with the strings reversed: Ex: ['hello', 'hi'] returns ['olleh', 'ih']
// create array or 
// .map

const reverse = (string) => {
    return string.map(str => str.split('').reverse().join(''));
}
console.log(reverse(['Desserts', 'Pink', 'Racecar', 'Blue']));    

// OR
// const reverse = strings.map(str => str.split('').reverse().join(''))
// console.log(reverse)


// 10. Using a higher order function on an array of strings, return all strings shorter than 5 characters  
//.filter
const strings = ['trees', 'puddles', 'rain', 'sun', 'leaves', 'snow']
const shorterStrings = strings.filter(str => str.length < 5)
console.log(shorterStrings)


// 11. Given an array of objects order the array from greatest to least based on an id property. 
// .sort
// create array with ID property
// look at HOF practice 8 quetsion 2 

const people = [{name: 'John', id: 45065}, 
                {name: 'Jordan', id: 20707}, 
                {name: 'Frank', id: 50332}, 
                {name: 'Anna', id: 13509}]
//Expected Output: frank, jhon, jordan, anna
function sortId (arr) {
    return arr.sort((a,b) => b.id - a.id)
}
console.log(sortId(people))
