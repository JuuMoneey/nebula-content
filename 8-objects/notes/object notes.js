// const car = {
//     color: 'Green',
//     engine: 'V8',
//     exhaust: 'Dual Rear Exit',
//     'tail pipe': true
// };

// const tailPipe = 'tail pipe'
// // Have to use brackets when key name is is 2 words
// car['tail pipe']
// car[tailPipe]

// car.exhaust // Uses dot notation to access the exaust property
// // This evaluates to 'Dual Rear Exit'

// car['exhaust'] // Uses bracket notation to access the exaust property
// // This also evalutes to 'Dual Rear Exit'


// const str = 'string'

// // 2 ways of writing this
// str.split('')

// str['split']('') // weird



// const returnAnyProp = (object, propertyName) => {
//     return object[propertyName]
// };

// // console.log(returnAnyProp(car, 'engine'))
// // Evaluates to 'V8'


// const dad = {
//     name: "Jeff",
//     age: 55,
//     occupation: "Banker",
//     isMarried: true
// }

// const mom = {
//     name: "Mary",
//     age: 55,
//     occupation: "Banker",
//     isMarried: true
// }

// const kid1 = {
//     name: "Billy",
//     age: 12,
//     occupation: "student",
//     isMarried: false
// }





// // Nested Object
// const family = {
//     dad: {
//         name: "Jeff",
//         age: 55,
//         occupation: ["Banker", "Driver"],
//         isMarried: true
//     },
//     mom: {
//         name: "Mary",
//         age: 45,
//         occupation: "Banker",
//         isMarried: true
//     }
// }

// // console.log(family.dad.occupation[1])
// const dadSecondJob = family.dad.occupation[1]




// const car1 = {
//     color: 'Green',
//     engine: 'V8',
//     exhaust: 'Dual Rear Exit'
// };


// car1.engine = 'V6';
// // We've changed the engine property on our car1 object

// // this is same thing
// car1.topSpeed = '125 mph';
// car1['topSpeed'] = '125 mph';
// // What?? Oh, we can add a brand new property like this too

// delete car1.color
// // console.log(car1);



const car2 = {
    color: 'Green',
    engine: 'V6',
    exhaust: 'Dual Rear Exit',
    topSpeed: '125 mph',
    start: function(){
        console.log("Vroom Vroom!");
    },
    start1(){
        console.log("Vroom Vroom!");
    }
}

function turnOffCar(){
    console.log("powering down");
}

car2.turnOffCar = turnOffCar;

// car2.turnOffCar()



const car4 = {
    color: 'Green',
    engine: 'V6',
    exhaust: 'Dual Rear Exit',
    topSpeed: '125 mph',
    racingAccessories: {
        sharkfins: 10,
        wingSpoiler: { brand: 'Mophorn GT', material: 'Aluminum'},
        sideSkirt: { brand: 'Samurai', material: 'Carbon Fiber'}
    },
    start(){
        console.log("Vroom Vroom!");
    }
}

 console.log(car4.racingAccessories.wingSpoiler.material)

car4.turnOffCar = function turnOffCar () {
    console.log("Turning off")
}

console.log(car4)
car4.turnOffCar()







// const momsCar = {
//     color: 'Orange',
//     brand: 'Honda',
//     topSpeed: 90
// }

// let newSpeed = 125;

// function tryMutatePrimitive(prim, value){
//     prim = value;
//     return prim;
// }

// console.log(tryMutatePrimitive(newSpeed, 300))
// // Returns 300
// console.log(newSpeed);
// // Nothing changed - logs 125.



// function tryMutateObject(obj, prop, value){
//     obj[prop] = value
//     return obj;
// }

// console.log(tryMutateObject(momsCar, 'topSpeed', 300))
// // Returns the momsCar object
// console.log(momsCar.topSpeed);
// // Logs 300




// const car5 = {
//     color: 'Green',
//     engine: 'V6',
//     exhaust: 'Dual Rear Exit',
//     topSpeed: '125 mph'
// }

// const car6 = {
//     tires: 4,
//     scratched: true
// }

// const newCar = {...car5,...car6};

// // console.log(newCar);



// const newCar1 = {};

// Object.assign(newCar1, car5); // Here the left argument is the target object, and the right argument is the source object

// // console.log(newCar1);



// const person = {
//     name: 'John',
//     age: 67,
//     hobby: 'biking'
// }


// for(let x in person){
//     if(x === 'age'){
//         person[x]++
//     }
// }


// const keyArr = Object.entries(person)
// console.log(keyArr)
// for(let i = 0; i < keyArr.length; i++){
//     console.log(keyArr[i])
// }

// checkpoint 4 examples
// let num = 5 
// function divideOne(num){
//     return num / 1;
// } console.log(num)

// studentName();
// function studentName(){
//     console.log('Juliet');
// }

// greeting();
//      function greeting(){
//     console.log("Hello World!");
// }

// const greeting = (name) => {
//     return `Hello ${name}`;
// }

// // OR

// const greeting2 = name => `Hello ${name}`;

// const favCar = (car) => {
//     return `My dream car is a ${car}.`;
// }
// console.log(favCar('Bentley'))