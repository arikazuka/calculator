let currentInput = '';
let firstNum = '';
let operator = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstNum === '') {
        firstNum = currentInput;
    } else {
        firstNum = calculateResult(firstNum, currentInput, operator).toString();
    }
    operator = op;
    currentInput = '';
    document.getElementById('display').value = '';
}

function clearDisplay() {
    currentInput = '';
    firstNum = '';
    operator = null;
    document.getElementById('display').value = '';
    document.getElementById('result').innerHTML = 'Result will be displayed here';
}

function calculateResult(firstNum, secondNum, operator) {
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(secondNum);
    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                document.getElementById('result').innerHTML = 'Cannot divide by zero';
                return null;
            }
            break;
        default:
            document.getElementById('result').innerHTML = 'Invalid Operator';
            return null;
    }
    return result;
}

function startCalculator() {
    if (currentInput === '' || firstNum === '' || operator === null) return;
    let result = calculateResult(firstNum, currentInput, operator);

    if (result !== null) {
        document.getElementById('result').innerHTML = 'Result: ' + result;
        document.getElementById('display').value = result;
    }
    documnet.getElementById('result').innerHTML =   'Result: ' + result;
    console.log(result);
    clearDisplay(); // Clear inputs but keep the result displayed
}
