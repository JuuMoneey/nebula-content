/* 1.   Using the provided dataset, write a hof function which returns all numbers larger than 100 */
const dataset = [ 192, -604, 593, 797, -327, 59, -730, 730, -444, 867, 461, 121, 129, 481, 302, -911 ]

/* 2.   Using the provided list of names assign each person a random age between 1 and 100 
Our Answer will be an array of objects like this:
const AnswerFormat = [
  { name: 'Dan', age: 81 },
  { name: 'Joe', age: 50 },
  { name: 'Samantha', age: 2 },
  { name: 'Jocelyn', age: 15 },
  { name: 'Sasha', age: 17 },
  { name: 'Tim', age: 23 }
]                                                                                       */
const names = ['John', 'Jane', 'Mary', 'Mark', 'Bob']

/* 3.   Uh-Oh, An issue with quality control has led this factory to produce faulty vehicles. Write a function which returns all vehicles with an active recall in an Array we can use to reach out to the owners and get them fixed. 
Your anwser should be an array of objects like this:
const cars = [
  { model: 's', assemblyMonth: 'July', assemblyYear: '18', activeRecall: true },
  { model: 's', assemblyMonth: 'January', assemblyYear: '21', activeRecall: true },
  { model: '3', assemblyMonth: 'August', assemblyYear: '18', activeRecall: true },
]
*/
const cars = [
  { model: 's', assemblyMonth: 'July', assemblyYear: '18', activeRecall: true },
  { model: 'y', assemblyMonth: 'September', assemblyYear: '20', activeRecall: false },
  { model: 's', assemblyMonth: 'January', assemblyYear: '21', activeRecall: true },
  { model: 's-plaid', assemblyMonth: 'March', assemblyYear: '17', activeRecall: false },
  { model: 'roadster', assemblyMonth: 'December', assemblyYear: '20', activeRecall: false },
  { model: 's', assemblyMonth: 'July', assemblyYear: '22', activeRecall: false },
  { model: '3', assemblyMonth: 'August', assemblyYear: '18', activeRecall: true },
  { model: 'x', assemblyMonth: 'April', assemblyYear: '18', activeRecall: false }
]

/* 4.   Using the areaCode object and this list of phone numbers return an object with the following structure:
{
  '718': ['718-555-1234', '718-555-5678'],
  '347': ['347-555-4321', '347-555-8765']
}                                                                                                           */

const areaCodes = {
  718: 'Brooklyn',
  516: 'Nassau',
  631: 'Suffolk',
  917: 'Manhattan',
  347: 'Bronx'
}
const phoneNums = [
  '718-647-9876',
  '516-722-3845',
  '631-477-9988',
  '917-987-2125',
  '347-123-4567'
]

/* 5.   The roster object contains a list of all the players on our coed basketball team. Write a function which returns an array of all the players who are injured in alphabetical order. */

const roster = [
  { name: 'John ', position: 'Point Guard', injured: true }, // a
  { name: 'Jane', position: 'Forward Guard', injured: false }, // b
  { name: 'Mary', position: 'Shooting Guard', injured: true },
  { name: 'Mark', position: 'Power Forward', injured: false },
  { name: 'Bob', position: 'Center', injured: true },
  { name: 'Joe', position: 'Center', injured: false },
  { name: 'Samantha', position: 'Power Forward', injured: true },
  { name: 'Jocelyn', position: 'Shooting Guard', injured: false },
  { name: 'Sasha', position: 'Forward Guard', injured: true },
  { name: 'Tim', position: 'Point Guard', injured: false },
  { name: 'Dan', position: 'Center', injured: true }
]

/* 6.   Utilizing the roster object from the previous question, let's write a function which returns an object of all the players who are not injured in an array, with the key being their position. The output should look like this:
{
  'Point Guard': ['John', 'Tim'],
  'Forward Guard': ['Jane', ...],
  'Shooting Guard': [...],
  'Power Forward': [...],
  Center: [...]
} */

/* 7.   Given an array of numbers, return the sum of all the numbers in the array. */
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* 8.   Given a list of Marines including their ranks, weapons qualification expiration dates, weapons qualifications scores, write a function which returns an array of all the Marines who possess an active weapons qualification(meaning not expired) sorted from highest scores to lowest. 
Our answer should look like this:
[
  { name: 'John Segre', rank: 'Private First Class', weaponsQualification: { score: 100, expirationDate: **dateObject** } },
  { name: 'Jane Foxmellow', rank: 'Sergeant', weaponsQualification: { score: 90, expirationDate: **dateObject** } },
...
]                                                                                                                   */
const marines = [
  { name: 'Jane Foxmellow', rank: 'Sergeant', weaponsQualification: { score: 90, expirationDate: new Date(2023, 1, 1) } },
  { name: 'John Segre', rank: 'Private First Class', weaponsQualification: { score: 100, expirationDate: new Date(2023, 1, 1) } },
  { name: 'Mary Jane', rank: 'lieutenant colonel', weaponsQualification: { score: 80, expirationDate: new Date(2019, 1, 1) } },
  { name: 'Mark Puckerberg', rank: 'Lance Corporal', weaponsQualification: { score: 70, expirationDate: new Date(2023, 1, 1) } },
  { name: 'Bob Dylan', rank: 'Lance Corporal', weaponsQualification: { score: 60, expirationDate: new Date(2024, 1, 1) } },
  { name: 'Joey Valtiniano', rank: 'Corporal', weaponsQualification: { score: 50, expirationDate: new Date(2023, 1, 1) } },
  { name: 'Samantha Fox', rank: 'Private First Class', weaponsQualification: { score: 40, expirationDate: new Date(2019, 1, 1) } },
  { name: 'Jocelyn James', rank: 'Lance Corporal', weaponsQualification: { score: 30, expirationDate: new Date(2023, 1, 1) } }
]
