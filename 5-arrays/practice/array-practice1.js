// Declare an empty array
const x = []
// Declare an array with all the data types you can think of within it
const y = [0, 5689457, "thankyou", true, [3,6,9], "9 > 2"]
// Make a list of classmates names first names in an array
let roster = ["Juliet", 'Dayana', 'AuLexis', 'Abdel', 'Judah', 'Donald', 'Asadur', 'Matt']
// Get the length of that previous array
let array = roster.length
console.log(array) //8
// Check the type of the previous array
const Class = typeof roster
console.log(Class) //object
// Check if the previous array is an array
let check = Array.isArray(roster)
console.log(check) //true
// Using indexing, grab your name from that previous array
let index = roster[0]
console.log(index)
// Use the following variable to get the student at the index from the array of students 
let index2 = 2
console.log(roster[index2])
// Update the array to have each element as a students first and last name : 'firstName lastName'
roster[0] = 'Juliet Vorbe'
roster[1] = 'Dayana Senat'
roster[2] = 'Aulexis Rochell'
roster[3] = 'Abdel Bessard'
roster[4] = 'Judah Belgrave'
roster[5] = 'Donald Williams'
roster[6] = 'Asadur Rahman'
roster[7] = 'Matt Reilly'
console.log(roster)
//students[0] = students[0] +' '+ 'Vorbe'
//console.log(students)