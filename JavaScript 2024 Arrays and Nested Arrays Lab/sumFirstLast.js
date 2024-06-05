function sumFirstLast(input) {

    let furstEl = Number(input.shift());
    let last = Number(input.pop());

    return furstEl + last;
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);
