function calc() {
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const sumElement = document.getElementById('sum');

    let firstNumber = Number(num1Element.value);
    let secondNumber = Number(num2Element.value);

    sumElement.value = firstNumber + secondNumber;
}

