'use strict';


function addition(a, b) {
    return a + b;
}


function subtraction(a, b) {
    return a - b;
}


function divide(a, b) {
    return a / b;
}


function multiply(a, b) {
    return a * b;
}


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return divide(arg1, arg2);
        case "*":
            return multiply(arg1, arg2);
        default:
            throw new Error("Операция " + operation + " не предусмотрена");
    }
}

console.log(mathOperation(12, 5, "+"));
console.log(mathOperation(111, 122, "-"));
console.log(mathOperation(134, 16, "/"));
console.log(mathOperation(32, 3, "*"));
console.log(mathOperation(0, 1, ":"));