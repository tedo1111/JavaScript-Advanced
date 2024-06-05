function biggestEl(matrix) {

    let maxElement = matrix[0][0]; // Initialize maxElement with the first element of the matrix

    // Iterate through each row of the matrix
    for (let i = 0; i < matrix.length; i++) {
        // Iterate through each element of the current row
        for (let j = 0; j < matrix[i].length; j++) {
            // Update maxElement if the current element is greater
            if (matrix[i][j] > maxElement) {
                maxElement = matrix[i][j];
            }
        }
    }

    return maxElement;

}
biggestEl([[20, 50, 10],
[8, 33, 145]]
);
