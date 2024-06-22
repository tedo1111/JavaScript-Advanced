export function sum(a, b) {
    return a + b;
}

export function mult(a, b) {
    return a * b;
}

const calc = {
    sum,
    mult,
};

console.log('calculator module');

export default calc;

