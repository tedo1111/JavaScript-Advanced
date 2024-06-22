// Declare set
const uniqueNumbers = new Set();

// Add values to set
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(4);

console.log(uniqueNumbers);

// Add existing value
uniqueNumbers.add(1);
console.log(uniqueNumbers);

// Check if value exist
console.log(uniqueNumbers.has(1));

// Declare with values
let numbers = [1, 1, 2, 3, 4, 512, 3, 4, 5];
let uniqNumbers = new Set(numbers);

console.log(uniqNumbers);

// Iteration
for (const value of uniqueNumbers) {
    console.log(value);
}

// Create array with unique values;
let uNum = Array.from(new Set([1,2,3,3,1,1,2]))
console.log(uNum);




