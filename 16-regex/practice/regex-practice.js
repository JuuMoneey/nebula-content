// 1.   Write a function that tests if a string contains the string of '123' within it
const str = 'tJSaKX123nxattj'
function contains123(string) {
    const regex = /123/
    return regex.test(string)
}
console.log(contains123(str))


// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false
const testCafterA = (string) => {
    return /a.*c/.test(string)
}
console.log(testCafterA(str))


// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'
const instanceOf = (string,substring) => {
    const regex = new RegExp(substring, 'gi')
    return string.match(regex).length
}
console.log(instanceOf(str))

// 4.   Write a function that checks if all characters in a string are lowercase letters
function lowerCase(string){
    return /^[a-z]+$/.test(string)
}
console.log(lowerCase(str))

// 5.   Write a function that checks if a string has an uppercase letter
function upperCase(string){
    const regex = /[A-Z]/
    return regex.test(string)
}
console.log(upperCase(str))

// 6.   Write a function that checks if a string contains a dash or underscore 
function dashUnderScore(string) {
    const regex = /[-_]/
    return regex.test(string)
}
console.log(dashUnderScore(str))

// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end
function ending(string){
    return /\.com$/.test(string)
}
console.log(ending(str))

// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning
function httpCheck(string) {
    const regex = new RegExp('^(http|https:\/\/', 'i')
 // const regex = /^https?:\/\//
    return regex.test(string)
}
console.log(httpCheck(str))

// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not
function startsCapital(string) {
    return /^A-Z/.test(string)
}
console.log(startsCapital(str))
