function smallest2Nums(input) {

    let sorted = input.sort((a, b) => a - b);

    let res = sorted.splice(0, 2);

    console.log(res.join(" "));

}
smallest2Nums([30, 15, 50, 5]);
smallest2Nums([3, 0, 10, 4, 7, 3]);