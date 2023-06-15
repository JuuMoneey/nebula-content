// let dishPromise = true;
// let cleanedDishes = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (dishPromise) {
//             resolve('I cleaned the dishes');
//         } else {
//             reject('I did not clean the dishes');
//         }
//     }, 5 * 1000);
// });

// console.log(cleanedDishes);
// setTimeout(() => {console.log(cleanedDishes)}, 5001)

function makePromise(dishPromise) {
    return new Promise(function (resolve, reject) {
       setTimeout(() => {
           if (dishPromise) {
               resolve('I cleaned the dishes');
           } else {
               reject('I did not clean the dishes');
           }
       }, 5 * 1000);
   });
}
let dishPromise = makePromise(true);
dishPromise
    .then(success => console.log(success))
    .catch(reason => console.log(reason))
    .finally(() => console.log("I've already told you if I washed the dishes!"));

const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('foo');
        }, 300);
      });
      
      myPromise
        .then(handleResolvedA, handleRejectedA)
        .then(handleResolvedB, handleRejectedB)
        .then(handleResolvedC, handleRejectedC);

        