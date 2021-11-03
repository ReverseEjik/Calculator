function calc(operation, firstNumber, secondNumber) {
    let arrayOperation = ["+", "plus", "-", "minus", "*", "multiply", "/", "divide", "%", "remainder", "**", "exponentiation"]
    let result = 0;
    checkOperation(operation);
    checkNumber(firstNumber);
    checkNumber(secondNumber);

    function checkOperation(operation) {
        if (arrayOperation.includes(operation) !== true) {
            return operation = "Error operation"
        } else {
            return operation
        }
    }

    function checkNumber(number) {
        if (typeof (number) !== "number") {
            return number = 'Wrong number'
        } else {
            return number
        }
    }

    function resultCalc() {
        if (checkOperation(operation) === "Error operation"
            || checkNumber(firstNumber) === 'Wrong number'
            || checkNumber(secondNumber) === 'Wrong number') {
            return "Error"
        } else {
            return `${checkNumber(firstNumber)} ${checkOperation(operation)} ${checkNumber(secondNumber)} = ${result}`
        }
    }

    if (operation === "+" || operation === "plus") {
        result = firstNumber + secondNumber;
        return resultCalc();
    } else if (operation === "-" || operation === "minus") {
        result = firstNumber - secondNumber;
        return resultCalc();
    } else if (operation === "*" || operation === "multiply") {
        result = firstNumber * secondNumber;
        return resultCalc();
    } else if (operation === "/" || operation === "divide") {
        if (firstNumber == 0 || secondNumber == 0) {
            result = "Error because you cannot be divided by zero"
            return resultCalc();
        } else {
            result = firstNumber / secondNumber;
            return resultCalc();
        }
    } else if (operation === "%" || operation === "remainder") {
        result = firstNumber % secondNumber;
        return resultCalc();
    } else if (operation === "**" || operation === "exponentiation") {
        result = firstNumber ** secondNumber;
        return resultCalc();
    } else {
        result = "unknown operation"
        return resultCalc();
    }
}

console.log(`Tests:`);
console.log(calc("+", 4, 4));
console.log(calc("plus", 4, 4));
console.log(calc("-", 4, 4));
console.log(calc("minus", 4, 4));
console.log(calc("*", 4, 4));
console.log(calc("multiply", 4, 4));
console.log(calc("/", 4, 4));
console.log(calc("divide", 4, 4));
console.log(calc("%", 4, 4));
console.log(calc("remainder", 4, 4));
console.log(calc("**", 4, 4));
console.log(calc("exponentiation", 4, 4));
console.log(`Errors:`);
console.log(calc("", 2, 4));
console.log(calc("+", "", 4));
console.log(calc("+", 2, ""));
console.log(calc("+", "", ""));