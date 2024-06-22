function calc() {

    const num1El = document.getElementById('num1');
    const num2El = document.getElementById('num2');
    const sum = document.getElementById('sum');

    let firstNum = Number(num1El.value);
    let secNum = Number(num2El.value);


    sum.value = firstNum + secNum;

}
