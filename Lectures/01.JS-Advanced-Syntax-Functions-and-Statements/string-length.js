function solve(first, second, third) {
    let totalLength = 0;

    totalLength += first.length;
    totalLength += second.length;
    totalLength += third.length;

    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');
