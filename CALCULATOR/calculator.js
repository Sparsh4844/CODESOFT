let currentNumber = '';
let operator = '';
let previousNumber = '';

function appendNumber(number) {
    currentNumber += number;
    document.getElementById('display').value = currentNumber;
}

function setOperator(op) {
    if (currentNumber === '') return;
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    if (previousNumber === '' || currentNumber === '') return;
    
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);
    let result = 0;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
    }

    document.getElementById('display').value = result;
    previousNumber = '';
    currentNumber = '';
    operator = '';
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    document.getElementById('display').value = '';
}
