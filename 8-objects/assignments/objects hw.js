// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const car = {
    isRunning: false,
    brand: 'Bentley',
    transmission: '8-speed Automatic',
    year: 2022,
    model: 'Continental GT',
    color: 'Black',
    interior: 'Red',
}
console.log(car)


// 2.   Using dot-notation Log to the console 3 properties from the previous object
console.log(car.brand, car.model, car.color)


// 3.   Using bracket-notation Log to the console 3 properties from the previous object
console.log(car['brand'], car['model'], car['color'])


// 4.   Try and log a property that doesn't already exist - what output do we get?
console.log(car.driveline)
//The output we get is undefined.


// 5.   Add a new key-value pair to the vehicle. 
car.horsepower = '650 hp'
console.log(car)



// 6.   Using bracket-notation update a property on the vehicle. 
car['color'] = 'pink'
console.log(car)


// 7.   Using dot-notation update a property on the vehicle. 
car.interior = 'Beige'
console.log(car)
