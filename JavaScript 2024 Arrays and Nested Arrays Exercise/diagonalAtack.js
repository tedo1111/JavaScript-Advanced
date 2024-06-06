function diagonalAtack(input) {
    // Parse the input into a matrix of numbers
    let matrix = input.map(row => row.split(' ').map(Number));

    // Calculate the sum of the main diagonal (top-left to bottom-right)
    let mainDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
    }

    // Calculate the sum of the secondary diagonal (top-right to bottom-left)
    let secondaryDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
    }

    // Check if the sums are equal
    if (mainDiagonalSum === secondaryDiagonalSum) {
        // Modify the matrix
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && row !== matrix.length - 1 - col) {
                    matrix[row][col] = mainDiagonalSum;
                }
            }
        }
    }

    // Print the matrix
    matrix.forEach(row => console.log(row.join(' ')));
}
diagonalAtack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
diagonalAtack(['1 1 1',
    '1 1 1',
    '1 1 0']
);