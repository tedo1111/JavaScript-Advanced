function sortingN(arr) {



    let resArr = [];

    let sorted = arr.slice().sort((a, b) => a - b);


    while (sorted.length) {
        // Take the smallest element
        let first = sorted.shift();
        resArr.push(first);

        // Take the largest element if the array is not empty
        if (sorted.length) {
            let last = sorted.pop();
            resArr.push(last);
        }
    }

    // console.log(resArr);
    return resArr;

}
sortingN([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// sortingN([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);