function biggerHalf(input) {

    let sorted = input.sort((a, b) => a - b);

    let half = sorted.length / 2;

    let res = sorted.splice(half,);

    return res;

}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);