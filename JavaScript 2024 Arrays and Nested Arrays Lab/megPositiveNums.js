function negativPositiveNums(input) {

    let arr = [];

    for (let el of input) {
        if (el < 0) {
            arr.unshift(el);
        }
        else {
            arr.push(el);
        }
    }


    for (let ell of arr) {
        console.log(ell);
    }

}
negativPositiveNums([7, -2, 8, 9]);
negativPositiveNums([3, -2, 0, -1]);