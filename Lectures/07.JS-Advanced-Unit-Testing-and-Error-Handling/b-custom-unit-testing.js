function sortNumbers(arr) {
    return arr.slice().sort((a, b) => a - b);
}

function testSortNumbers() {
    // Arrange
    const input = [2, 5, 1, 9, 3];
    const expectedResult = [1, 2, 3, 5, 9];

    // Act
    const actualResult = sortNumbers(input);

    // Assert
    if (JSON.stringify(actualResult) === JSON.stringify(expectedResult)) {
        console.log('Success');
    } else {
        console.error('Fail');
        console.log(`Expected ${JSON.stringify(actualResult)} to be equal to ${JSON.stringify(expectedResult)}`);
    }
}

testSortNumbers();
