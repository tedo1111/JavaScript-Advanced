function solve(input) {
    let sum = 0;
    let invertedSum = 0;
    let concatSum = '';

    for (let i = 0; i < input.length; i++) {
        const currentNumber = input[i];

        sum += currentNumber;
        invertedSum += 1 / currentNumber;
        concatSum += currentNumber;
    }

    console.log(sum);
    console.log(invertedSum);
    console.log(concatSum);
}

solve([2, 4, 8, 16]);
