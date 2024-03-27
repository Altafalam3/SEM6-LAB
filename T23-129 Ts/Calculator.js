var Calculator = /** @class */ (function () {
    function Calculator() {
        this.add = function (x, y) { return x + y; };
        this.subtract = function (x, y) { return x - y; };
        this.multiply = function (x, y) { return x * y; };
        this.divide = function (x, y) {
            if (y === 0) {
                throw new Error("Cannot divide by zero");
            }
            return x / y;
        };
    }
    return Calculator;
}());
var calculator = new Calculator();
var getUserInput = function (promptText) {
    var userInput = prompt(promptText);
    if (userInput === null) {
        throw new Error("User canceled the input");
    }
    var parsedInput = parseFloat(userInput);
    if (isNaN(parsedInput)) {
        throw new Error("Invalid input. Please enter a valid number.");
    }
    return parsedInput;
};
try {
    var num1 = getUserInput("Enter the first number:");
    var num2 = getUserInput("Enter the second number:");
    console.log("Addition: " + calculator.add(num1, num2));
    console.log("Subtraction: " + calculator.subtract(num1, num2));
    console.log("Multiplication: " + calculator.multiply(num1, num2));
    console.log("Division: " + calculator.divide(num1, num2));
}
catch (error) {
    console.error(error.message);
}
