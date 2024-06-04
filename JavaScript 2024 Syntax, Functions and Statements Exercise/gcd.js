function gcd(a, b) {

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }


    console.log(a);
}
gcd(15, 5);
gcd(2154, 458);