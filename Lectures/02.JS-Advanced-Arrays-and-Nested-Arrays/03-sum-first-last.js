function solve(input) {
    const firstNumber = Number(input.shift());
    const lastNumber = Number(input.pop());

    console.log(firstNumber + lastNumber);
}

solve(['20', '30', '40']);
