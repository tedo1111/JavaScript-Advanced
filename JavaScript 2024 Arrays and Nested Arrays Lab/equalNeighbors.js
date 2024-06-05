function equalNeighbors(matrix) {
    let equalPairs = 0;

    // Iterate through each row of the matrix
    for (let i = 0; i < matrix.length; i++) {
        // Iterate through each element of the current row (except the last one)
        for (let j = 0; j < matrix[i].length - 1; j++) {
            // Check if the current element is equal to its right neighbor
            if (matrix[i][j] === matrix[i][j + 1]) {
                equalPairs++;
            }
        }
    }

    // Iterate through each column of the matrix
    for (let j = 0; j < matrix[0].length; j++) {
        // Iterate through each row (except the last one)
        for (let i = 0; i < matrix.length - 1; i++) {
            // Check if the current element is equal to its bottom neighbor
            if (matrix[i][j] === matrix[i + 1][j]) {
                equalPairs++;
            }
        }
    }

    return equalPairs;

}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);