
const arr = [1, 5, 2, 5, 3]
    //6, 8, 9, 5, 0, 7, 4, 7, 6, 3, 8, 7, 0, 8]
// for(let i =0; i < arr.length; i++){
//     console.log(i)
//     if(arr[i] === 5){
//         return true
//     }
// }

for(let i =0; i < arr.length; i++){
    for(let j = 0; j<arr.length;j++){
        console.log(j)
    }
}



function quadraticTimeExample(arr){

    console.time("myTimer");

    const holdPairs = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            holdPairs.push([arr[i], arr[j]]);
        }
    }

    console.timeEnd("myTimer");

    return holdPairs;
}

