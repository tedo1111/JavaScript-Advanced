function rotateArr(arr, num) {

    let rot = num % arr.length;

    for (let i = 0; i < rot; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(" "));
}
// rotateArr(['1',
//     '2',
//     '3',
//     '4'],
//     2
// );
rotateArr(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
);