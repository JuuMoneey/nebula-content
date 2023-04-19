// write the function isAnagram
// var isAnagram = function(test, original) { 
    // input: 2 strings 
    // output: boolean 
    
    //// convert to array 
    // .split() is turning string to array 
    //// sort() both arrays 
    // .sort() is sorting array
    //// convert back to string
    // .join() is turning array back into string
    //// compare strings
    // x === y is comparing strings
    
    // "toffee"
    
    // const obj = {
        // t: 1,
        // o: 1,
        // f: 2,
        // e: 2
// }};


var isAnagram = function(test, original) {
    x = test.toLowerCase().split('').sort().join('');
    y = original.toLowerCase().split('').sort().join('');
        return x === y
}

var isAnagram = function(test, original) { 
    if(test.length !== original.length) 
    return false 
    const word1 = {} 
    const word2 = {} 
    for(let letter of test){ 
        letter = letter.toLowerCase() 
        word1[letter] ? word1[letter] ++ : word1[letter] = 1 
    } for(let letter of original){ 
        letter = letter.toLowerCase() 
        word2[letter]? word2[letter] ++ : word2[letter] = 1 
    } for(let key in word1){ 
        if(word1[key] !== word2[key]){ 
            return false 
        } 
    } 
    return true
};

