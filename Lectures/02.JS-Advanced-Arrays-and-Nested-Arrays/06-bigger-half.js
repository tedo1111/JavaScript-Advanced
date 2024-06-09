function solve(input) {
    input.sort((a, b) => a - b);

    const halfIndex = Math.floor(input.length / 2);
    const secondHalf = input.splice(halfIndex);

    return secondHalf;
}

const result = solve([3, 19, 14, 7, 2, 19, 6]);
console.log(result);
