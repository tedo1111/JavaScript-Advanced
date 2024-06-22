// Sum of 3 numbers
const sum = (a, b, c) => a + b + c;
console.log(sum(1, 2, 3));

const currySum = a => b => c => a + b + c;
console.log(currySum(1)(2)(3));

// Recursive function
let results = new Map();
const factorial = (num) => {
    // memoization
    if (results.has(num)) {
        return results
    }

    if (num == 1) {
        return 1;
    }

    const result = num * factorial(num - 1);

    results.set(num, result);
    
    return result;
}

const result = factorial(5);
console.log(result);
