// 1.   What is the order of output?
setTimeout(() => {
    console.log('a');
}, 10);
console.log('b');

new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
console.log('e');

setTimeout(() => {
  console.log('f');
}, 0);

setTimeout(() => {
    console.log('g');
}, 20);

new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))


//2. Create a new promise for something you may or may not do. 
//   After a few seconds log whether it has been done.
// randomize if its going to resolve or reject

const dishes = new Promise((res, rej) => {
    const randomChance = Math.random() >= .5
    setTimeout(() => {
        if(randomChance){
            res('I did the dishes!')
        }else{
            rej('Im not doing the dishes!')
        }
    }, 3000)
})


//3. Using the prior example use .then and .catch to handle responses and rejections
dishes
.then((result) => console.log(result))
.catch((error) => console.log(error))


//4. What does a promise resolve to?
// strings, number, arrays, objects, phrase, another promise

//5. What is the output of the following code?

const promise = new Promise(res => res(2));
promise.then(v => { //2
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v); //4
    return v * 2;
})
.then(v => {
    console.log(v); //8
    return v * 2;
})
.then((v) => {
    console.log(v); //16
  });
