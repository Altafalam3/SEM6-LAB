"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var addTwoNumbers = function (num1, num2) {
    return num1 + num2;
};
var subttwoNumbers = function (num1, num2) {
    return num1 - num2;
};
var multiplytwoNumbers = function (num1, num2) {
    return num1 * num2;
};
var dividetwoNumbers = function (num1, num2) {
    return num1 / num2;
};
function switchCalci(num1, num2, operation) {
    switch (operation) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        default:
            console.log("Invalid operator");
    }
}
// Example usage
//const number1: number = 5;
//const number2: number = 3;
var prompt = promptSync();
var n1 = prompt("Enter your first number");
var n2 = prompt("Enter your second number");
var str = prompt("Enter the operation");
var number1 = parseFloat(n1);
var number2 = parseFloat(n2);
var result1 = addTwoNumbers(number1, number2);
var result2 = subttwoNumbers(number1, number2);
var result3 = multiplytwoNumbers(number1, number2);
var result4 = dividetwoNumbers(number1, number2);
console.log("The sum of ".concat(number1, " and ").concat(number2, " is: ").concat(result1));
console.log("The subtraction of ".concat(number1, " and ").concat(number2, " is: ").concat(result2));
console.log("The product  of ".concat(number1, " and ").concat(number2, " is: ").concat(result3));
console.log("The division  of ".concat(number1, " and ").concat(number2, " is: ").concat(result4));
