let numbers = [1, 2, 3, 4, 5];

// Sum with reduce
let sum = numbers.reduce((acc, number) => {
    return acc + number;
}, 0);

let shorterSum = numbers.reduce((a, x) => a + x, 0);

console.log(shorterSum);
