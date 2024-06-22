function outer() {
    let name = 'Pesho';

    return function () {
        let age = 20;
        console.log(name);
    }
}

const inner = outer();

inner();
