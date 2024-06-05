function isDistanceValid(x1, y1, x2, y2) {
    function checkDistance(x1, y1, x2, y2) {
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(distance);
    }

    function printValidity(x1, y1, x2, y2) {
        if (checkDistance(x1, y1, x2, y2)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    printValidity(x1, y1, 0, 0);

    // Check (x2, y2) to (0, 0)
    printValidity(x2, y2, 0, 0);

    // Check (x1, y1) to (x2, y2)
    printValidity(x1, y1, x2, y2);

}
isDistanceValid(3, 0, 0, 4);
isDistanceValid(2, 1, 1, 1);