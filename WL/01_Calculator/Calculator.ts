import * as readlineSync from "readline-sync";

const number1: number = readlineSync.questionInt("Please enter first number : ");
const number2: number = readlineSync.questionInt("Please enter second number : ");

const add = (a: number, b: number): number => a + b;
const subtract = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number => a / b;

const options = ["Addition", "Subtraction", "Multiplication", "Division"];
const options2 = ["+", "-", "*", "/"];
const operator: number = readlineSync.keyInSelect(options, "Finally select the operator : ");

const calculate = (num1: number, num2: number, op: number): number => {
    switch (op) {
        case 0:
            return add(num1, num2);
        case 1:
            return subtract(num1, num2);
        case 2:
            return multiply(num1, num2);
        case 3:
            return divide(num1, num2);
        default:
            return NaN; // Invalid operator
    }
};

if (operator !== 4) {
    const result = calculate(number1, number2, operator);
    if (!isNaN(result)) {
        console.log(`${number1} ${options2[operator]} ${number2} = ${result}`);
    } else {
        console.log("Invalid operator!");
    }
} else {
    console.log("It's ok if you don't want to calculate");
}
