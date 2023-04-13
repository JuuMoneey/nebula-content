// function getIssuer(number) { 
    // Code your solution here 
    // input : number 
    // output: String 
    // convert number to a string 
    // lets us get the length , get the index and loop 
    // string methods 
    // if statements 
    // logic 
    // if/else 
    // Switch
// }

//  function getIssuer(number) {
//      let str = String(number)
//     if(str.length === 15 ){
//         return 'AMEX'
//     }else if(str.length === 16){
//         return 'Discover'
//     }else if(str.length === 16){
//         return 'Mastercard'
//     }else if(str.length === 13 || str.length === 16){
//         return 'VISA'
//     } 
// }

// function getIssuer(number) {
//     let str = String(number)
//     i
// }



//    function getIssuer(number) {
//     let str = number.string
//     console.log(str)
//     if(str[0] === 3 && str[1] === 4, 7){
//      return Amex
//     } 
//    }

function filter_list(l) {
    const newArray = []
    for(let i = 0; i < l.length; i++){
      //let str = l[i].split('')
      //currentelement is num
      if(typeof l[i] === 'number'){

          newArray.push(nums)
      }
    }
    return newArray
  }
  console.log(filter_list([1,2,'a','b']))


  //look at one sample test at a time
//input '0207ERGQREG88349F82!efRF'
//output "02078834982"
//2 simplify sample test
//input "02078834982"
//output "02078834982"
function isItANum(str) {
  //input str
  //output str
  //variable before loop 
    let phoneNum = ''
    //new string
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      continue;
    // looking at the space at i
    }
    //if the current element is a # add to phone num
    let currentElement = +str[i]
    //+ (parseInt) converting to # 
    if(!Number.isNaN(currentElement)){
      phoneNum += currentElement
    }
    console.log(phoneNum, 'nL', currentElement, 'l', str[i])
  }
    if(phoneNum.length === 11 && phoneNum.startsWith('0')){
      return phoneNum
    }else{
      return 'Not a phone number'
    }
  }



  var number = function(busStops){
    let totalEntries = 0
    let totalDowns = 0
  
    busStops.map((arr)=> { 
      totalEntries += arr[0] 
      totalDowns += arr[1]
    })
  
    return totalEntries  - totalDowns
  
  }



  function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(function(el) {
  return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
  }

  function disemvowel(str) {
    const vowels = 'a, e, i, o, u';
    const newLetters = [];
    for(let i = 0; i < str.length; i++){
      const char = str[i]
    if(!vowels.includes(char)){
      newLetters.push(char);   
    }
      }
    return newLetters.join('');
  }
  console.log(disemvowel('This is a string'))
  // function disemvowel(str) {
  //   const vowels = 'a, e, i, o, u';
  //   const newLetters = []
  //   for(let i = 0; i < str.length; i++){
  //     const char = str[i]
  //     //opposite 
  //   if(!vowels.includes(char)){
      
  //   }
  //     }
  //   return str;
  // }