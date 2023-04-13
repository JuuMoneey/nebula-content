//let horseName = "romero" 
//let position = Math.ceil(Math.random() * 5)
//console.log(position)




// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"

// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."


let horseName = "Romero";
let position = Math.ceil(Math.random() * 5)


if(position === 1){
    console.log("Romero finished in first place.");
}else if(position === 2) {
    console.log("Romero finished in second place.");
}else if(position === 3) {
    console.log("Romero finished in third place.");
}else {
    console.log("Romero did not finish in top 3.")
}

