function sameNums(input) {
    input = String(input);
    let areTheSame = true;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        if (i < input.length - 1) {
            if (input[i] !== input[i + 1]) {
                areTheSame = false;
            }
        }
        sum += Number(input[i]);
    }
    console.log(areTheSame);
    console.log(sum);

}
// sameNums(2222222);
sameNums(1234);