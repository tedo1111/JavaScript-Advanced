function solve(input) {
    let result = [];

    for (const number of input) {
        if (number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }
    }

    for (const number of result) {
        console.log(number);
    }
}

solve([7, -2, 8, 9]);
