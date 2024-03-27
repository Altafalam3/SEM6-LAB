class Calculator {
    add = (x: number, y: number): number => x + y;

    subtract = (x: number, y: number): number => x - y;

    multiply = (x: number, y: number): number => x * y;

    divide = (x: number, y: number): number => {
        if (y === 0) {
            throw new Error("Cannot divide by zero");
        }
        return x / y;
    };
}

const calculator = new Calculator();

const getUserInput = (promptText: string): number => {
    const userInput = prompt(promptText);
    if (userInput === null) {
        throw new Error("User canceled the input");
    }
    const parsedInput = parseFloat(userInput);
    if (isNaN(parsedInput)) {
        throw new Error("Invalid input. Please enter a valid number.");
    }
    return parsedInput;
};

try {
    const num1 = getUserInput("Enter the first number:");
    const num2 = getUserInput("Enter the second number:");

    console.log("Addition: " + calculator.add(num1, num2));
    console.log("Subtraction: " + calculator.subtract(num1, num2));
    console.log("Multiplication: " + calculator.multiply(num1, num2));
    console.log("Division: " + calculator.divide(num1, num2));
} catch (error) {
    console.error(error.message);
}
