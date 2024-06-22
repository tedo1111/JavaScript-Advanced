function subtract() {
    const firstNumberValue = document.getElementById('firstNumber').value;
    const secondNumberValue = document.getElementById('secondNumber').value;

    const firstNumber = Number(firstNumberValue);
    const secondNumber = Number(secondNumberValue);

    const result = firstNumber - secondNumber;

    document.getElementById('result').textContent = result;
}