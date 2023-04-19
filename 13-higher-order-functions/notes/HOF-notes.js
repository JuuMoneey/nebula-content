const calculateThis = (num1, num2, func) => {
    const calculation = func(num1, num2);
    return calculation;
}

function multiplyTwoNumbers(num1, num2){
    return num1 * num2;
}

const divideTwoNumbers = (num1, num2) => {
    return num1 / num2;
}


// console.log((calculateThis(20,10,divideTwoNumbers)))
// console.log((calculateThis(20,10,multiplyTwoNumbers)))


const returnFunction = (func) => {
    return func;
}


const holdfunc = returnFunction(divideTwoNumbers);
console.log(holdfunc(10, 2), "<-- holding...");