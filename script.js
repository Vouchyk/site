function handleButtonClick(value) {
    var inputField = document.getElementsByName("res")[0];

    playClickSound();

    if (value === 'AC') {
        inputField.value = '';
    } else if (value === '+' || value === '-' || value === '÷' || value === '*') {
        // Якщо натиснута кнопка "+" або "-" або "÷" або "*", викликати відповідну функцію
        handleOperation(value);
    } else if (value === '=') {
        // Якщо натиснута кнопка "=", викликати функцію для розрахунку
        calculateResult();
    } else {
        // Якщо натиснута кнопка з цифрою, додати її до поля вводу
        inputField.value += value;
    }
}

function playClickSound() {
    var clickSound = document.getElementById("clickSound");
    clickSound.play();
}

function appendDecimalPoint() {
    var inputField = document.getElementsByName("res")[0];

    // Перевірте, чи вже існує кома у введеному числі
    if (!inputField.value.includes('.')) {
        // Якщо немає коми, додаємо її
        inputField.value += '.';
    }
}


function toggleSign() {
    var inputField = document.getElementsByName("res")[0];
    var currentValue = parseFloat(inputField.value);

    // Змініть знак числа
    var newValue = -currentValue;

    // Оновіть значення в полі вводу
    inputField.value = newValue;
}


function handleOperation(operation) {
    var inputField = document.getElementsByName("res")[0];
    var currentInputValue = parseFloat(inputField.value);

    // Зберегти поточне значення та операцію
    currentOperation = operation;
    previousValue = currentInputValue;

    // Очистити поле вводу перед введенням другого числа для операції
    inputField.value = '';
}

function calculateResult() {
    var inputField = document.getElementsByName("res")[0];
    var currentInputValue = parseFloat(inputField.value);

    // Виконати розрахунок в залежності від попередньої операції
    var result;
    if (currentOperation === '+') {
        result = previousValue + currentInputValue;
    } else if (currentOperation === '-') {
        result = previousValue - currentInputValue;
    } else if (currentOperation === '÷') {
        result = previousValue / currentInputValue;
    } else if (currentOperation === '*') {
        result = previousValue * currentInputValue;
    }

    // Вивести результат у поле вводу
    inputField.value = result;
}

// Збережіть поточну операцію і попереднє значення глобально
var currentOperation;
var previousValue;
