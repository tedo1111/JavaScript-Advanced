function solve(numbers) {
    const oddPositionNumbers = numbers.filter((number, index) => index % 2 !== 0);
    const doubledNumbers = oddPositionNumbers.map(number => number * 2);
    const reversedNumbers = doubledNumbers.reverse();

    return reversedNumbers;
}

function fancySolve(numbers) {
    const result = numbers
        .filter((number, index) => index % 2 !== 0)
        .map(number => number * 2)
        .reverse();

    return result;
}

fancySolve([3, 0, 10, 4, 7, 3]);
