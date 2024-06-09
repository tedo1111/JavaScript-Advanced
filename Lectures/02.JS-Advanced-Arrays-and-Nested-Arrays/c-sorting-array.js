let numbers = [10, 2, 8, 1, 23, 9, 11, 7];

// Default sort
numbers.sort();
console.log(numbers);

// Sort numbers ascending
// numbers.sort((a, b) => {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

// Shorter ascending sort
numbers.sort((a, b) => a - b);
console.log(numbers);

// Shorter descending sort
numbers.sort((a, b) => b - a);
console.log(numbers);

// Sort strings
let cars = ['BMW', 'Mercedes', 'audi', 'Toyota'];
cars.sort((a, b) => a.localeCompare(b));
console.log(cars);
