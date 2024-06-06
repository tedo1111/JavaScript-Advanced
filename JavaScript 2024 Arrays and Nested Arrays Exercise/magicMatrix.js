function magicMatrix(matrix) {
    const rowSum = matrix[0].reduce((a, b) => a + b, 0);

    // Check if all rows have the same sum
    for (let row = 1; row < matrix.length; row++) {
        const currentRowSum = matrix[row].reduce((a, b) => a + b, 0);
        if (currentRowSum !== rowSum) {
            return false;
        }
    }

    // Check if all columns have the same sum
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== rowSum) {
            return false;
        }
    }

    return true;
}
magicMatrix([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);
magicMatrix([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);