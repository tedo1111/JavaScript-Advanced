function subsequenceForArr(arr) {

    let res = [];
    let curBigg = Number.NEGATIVE_INFINITY;

    for (let num of arr) {
        if (num >= curBigg) {
            res.push(num);
            curBigg = num;
        }
    }

    return res;


}
subsequenceForArr([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
// subsequenceForArr([1,
//     2,
//     3,
//     4]
// );