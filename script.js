function calc(operation, firstNumber, secondNumber) {
    if (operation === undefined && firstNumber === undefined && secondNumber === undefined) {
        return "Error"
    } else if (typeof (firstNumber) !== "number" || typeof (secondNumber) !== "number") {
        return "Error"
    } else {
        if (operation === "plus") {
            return firstNumber + secondNumber;
        } else if (operation === "minus") {
            return firstNumber - secondNumber;
        } else if (operation === "multiply") {
            return firstNumber * secondNumber;
        } else if (operation === "divide") {
            return firstNumber / secondNumber;
        } else if (operation === "remainder") {
            return firstNumber % secondNumber;
        } else if (operation === "exponentiation") {
            return firstNumber ** secondNumber;
        } else {
            return "unknown operation"
        }
    }
}
