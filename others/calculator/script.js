// Function to append characters to the expression
function appendToExpression(character) {
    var expressionInput = document.getElementById('expression');
    expressionInput.value += character;
}

// Function to clear the expression
function clearExpression() {
    var expressionInput = document.getElementById('expression');
    expressionInput.value = '';
}

// Function to delete the last character from the expression
function backspace() {
    var expressionInput = document.getElementById('expression');
    var currentExpression = expressionInput.value;
    expressionInput.value = currentExpression.slice(0, -1);
}

// Function to perform the calculation
function calculate() {
    var expressionInput = document.getElementById('expression');
    var resultDisplay = document.getElementById('result');

    var expression = expressionInput.value;
    try {
        var result = eval(expression);
        resultDisplay.textContent = 'Result: ' + result;
    } catch (error) {
        resultDisplay.textContent = 'Error: Invalid expression';
    }
}
