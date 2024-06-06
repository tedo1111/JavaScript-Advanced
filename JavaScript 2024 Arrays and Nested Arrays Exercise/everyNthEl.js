function everyNthEl(arr, num) {

    let newArr = [];

    for (let i = 0; i < arr.length; i += num) {
        // console.log(arr[i]);
        newArr.push(arr[i]);
    }

    return newArr;

}
everyNthEl(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);
// everyNthEl(['dsa',
//     'asd',
//     'test',
//     'tset'],
//     2

// );