function lastKNums(n, k) {

    let sequence = [1]; // Start with the first element as 1

    for (let i = 1; i < n; i++) {
        // Determine the range for the sum (from i-k to i-1)
        let start = Math.max(0, i - k);
        let end = i;

        // Calculate the sum of the previous k elements
        let sum = sequence.slice(start, end).reduce((acc, num) => acc + num, 0);

        // Add the calculated sum to the sequence
        sequence.push(sum);
    }

    return sequence;
}


// Example usage:
console.log(lastKNums(6, 3)); // Output: [1, 1, 2, 4, 7, 13]
console.log(lastKNums(8, 2)); // Output: [1, 1, 2, 3, 5, 8, 13, 21]