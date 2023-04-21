/* Cumulative Practice
During this practice you will be honing your skills with higher order functions by making a choice of which higher order function to use for each problem. */

/* Question 1
Write a hof function which returns the first number larger than 100 */
const nums = [23,89,300,45,2,120]
const firstNum = nums.find((num) => num > 100)
console.log(firstNum)

/* Question 2
Write a hof which lists a set of people based on their birth year */
const people = [
    { name: "Dan", birthYear: 1981 },
    { name: "Joe", birthYear: 2005 },
    { name: "Samantha", birthYear: 2000 },
    { name: "Jocelyn", birthYear: 1995 },
    { name: "Sasha", birthYear: 1997 },
    { name: "Tim", birthYear: 2003 },
];

function sortBirthYear(arr){
    return arr.sort((a,b) => {
        return a.birthYear - b.birthYear
    })
}
console.log(sortBirthYear(people))


/* Question 3
Given an array of cars only list cars that are build pre-2000 */
const cars = [{model: "Dodge", make: 2001},{model:"Ford", make:2012},{model:"Honda", make:1989},{model:"Hondi",make:1990}]
//.filter

const pre2000 = cars.filter((car) => {
    return car.make < 2000
})



/* Question 4
Given an array of phone numbers return an array of protected phone numbers so that it has this structure: 
[
    input: 555-555-5555,
    output: 5##-###-#555
]
                                       */
const phoneNums = [
    "718-647-9876",
    "516-722-3845",
    "631-477-9988",
    "917-987-2125",
    "347-123-4567",
    ];
//.map or .forEach
const hashtags = phoneNums.map(tag => {
    let hash = tag.split('')
    hash[1] = '#'
    hash[2] = '#'
    hash[4] = '#'
    hash[5] = '#'
    hash[6] = '#'
    hash[8] = '#'
    return hash.join('')
})
console.log(hashtags)

/* Question 5
Given an array of numbers write a HOF that logs to the console:
    `Thats a big number!` if it's larger than 1000 or
    `This number isnt so big...` if its smaller than or equal to 1000 */
const nums1 = [345,57,765,2345,1098,32,9876]
//.forEach
function bigVsLil(num){
    if(num > 1000){
        console.log(`Thats a big number!`)
    }else{
        console.log(`This number isnt so big...`)
    }
}

nums1.forEach(bigVsLil)

//.map
// const bigVsLil = nums1.map(num => {
    //     if(num > 1000){
//         return `Thats a big number!`
//     }else{
//         return `This number isnt so big...`
//     }
// })



/* Question 6
Given an array of people's names write a hof that returns only people with names longer than 5 characters
    Example
      ["Dan", "Joe", "Samantha", "Jocelyn", "Sasha", "Tim"] => ["Samantha", "Jocelyn", "Sasha"] */
const peopleArray = ["Dan", "Joe", "Samantha", "Jocelyn", "Sasha", "Tim"]
//.filter
const longerNames = peopleArray.filter(name => name.length > 5)
console.log(longerNames)


/* Question 7
Given a list of people (all objects) list people over the age of 20 and under the age of 35 in order of youngest to oldest */
const people1 = [
    { name: "Dan", age: 12 },
    { name: "Joe", age: 33 },
    { name: "Samantha", age: 67 },
    { name: "Jocelyn", age: 23 },
    { name: "Sasha", age: 65 },
    { name: "Tim", age: 25 },
];
//.map
const ageGap = people1.filter(person => person.age > 20 && person.age < 35).sort((a,b) => a.age - b.age)
console.log(ageGap)


/* Question 8
Given an array of objects, each object is representing food. The objects are structured like this:
    {name: 'banana', expiration: "Dec 21, 2022"}

Write a hof that will return the object representing the food item that will expire soonest
    Example:
        let food = [
            {name: 'banana', expiration: "Dec 21, 2022"},
            {name: 'steak', expiration: "Jan 5, 2022"},
            {name: 'milk', expiration: "Jan 8, 2022"},
        ]
        youHOF(food) => {name: 'steak', expiration: "Jan 5, 2022"}

    hint: JavaScript Date object may be helpful
        new Date(year, monthIndex, day)
        const d1 = new Date(2010, 3, 28) => April, 28, 2010
        You can compare dates using the > and < operators */
const food = [
    { name: "Banana", exp: new Date(2023, 3, 21) },
    { name: "Steak", exp: new Date(2024, 0, 5) },
    { name: "Milk", exp: new Date(2024, 0, 8) },
    { name: "Eggs", exp: new Date(2023, 1, 28) },
    { name: "Bread", exp: new Date(2023, 11, 20) },
];
//.sort()
const expired = food.sort((a,b) => a.exp - b.exp)
console.log(expired)
