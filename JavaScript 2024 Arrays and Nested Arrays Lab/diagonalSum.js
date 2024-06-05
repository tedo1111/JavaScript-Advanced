function diagonalSum(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    // Iterate through each row of the matrix
    for (let i = 0; i < matrix.length; i++) {
        // Sum up the elements on the main diagonal (i, i)
        mainDiagonalSum += matrix[i][i];

        // Sum up the elements on the secondary diagonal (i, n-i-1)
        secondaryDiagonalSum += matrix[i][matrix.length - i - 1];
    }

    console.log(mainDiagonalSum, secondaryDiagonalSum);

}
diagonalSum([[20, 40],
[10, 60]]
);