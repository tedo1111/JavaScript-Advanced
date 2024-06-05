function biggestEl(numbers) {
    let oddP = numbers.filter((number, index) => index % 2 !== 0);
    let double = oddP.map(number => number * 2);
    let rev = double.reverse();

    return rev.join(' '); 
}
biggestEl([10, 15, 20, 25]);
biggestEl([3, 0, 10, 4, 7, 3]);