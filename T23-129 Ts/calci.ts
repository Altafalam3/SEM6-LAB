
import * as promptSync from 'prompt-sync';
const addTwoNumbers = (num1: number, num2: number): number => {
    return num1 + num2;
};
const subttwoNumbers= (num1:number,num2:number): number=>{
    return num1-num2;
}
const multiplytwoNumbers= (num1:number,num2:number): number=>{
    return num1*num2;
}
const dividetwoNumbers= (num1:number,num2:number): number=>{
    return num1/num2;
}
 function switchCalci(num1:number,num2:number,operation:string){
    switch (operation) {
        case "+":
          console.log(num1+ num2);
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
const prompt=promptSync();

const  n1=prompt("Enter your first number");
const  n2=prompt("Enter your second number");
let str=prompt("Enter the operation");
let number1:number=parseFloat(n1);
let number2:number=parseFloat(n2);



const result1: number = addTwoNumbers(number1, number2);
const result2:number=subttwoNumbers(number1,number2);
const result3:number= multiplytwoNumbers(number1,number2);
const result4:number=dividetwoNumbers(number1,number2);

console.log(`The sum of ${number1} and ${number2} is: ${result1}`);
console.log(`The subtraction of ${number1} and ${number2} is: ${result2}`);
console.log(`The product  of ${number1} and ${number2} is: ${result3}`);
console.log(`The division  of ${number1} and ${number2} is: ${result4}`);

