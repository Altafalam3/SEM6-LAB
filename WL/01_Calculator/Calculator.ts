import * as readlineSync from "readline-sync";

let number1 : number = readlineSync.questionInt("Please enter first number : ");
let number2 : number = readlineSync.questionInt("Please enter second number : ");
const options = ["Addition", "Substraction", "Multiplication", "Division"];
let operator: number = readlineSync.keyInSelect(options, "Finally select the operator : ",);


switch (operator) {
    case 0:
        console.log(`${number1} + ${number2} = ${number1+number2}`);
        break;
    case 1:
        console.log(`${number1} - ${number2} = ${number1-number2}`);
        break;
    case 2:
        console.log(`${number1} * ${number2} = ${number1*number2}`);
        break;
    case 3:
        console.log(`${number1} / ${number2} = ${number1/number2}`);
        break;
    case 4:
        console.log("Its ok if you don't want to calculate");
        break;
    default:
        console.log("Invalid or cancelled!");
        break;
}