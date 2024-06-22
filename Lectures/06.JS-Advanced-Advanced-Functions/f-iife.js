// IIFE
(function () {
    console.log('Hi ');
})()

// More complex IIFE
const result = (function (name) {
    console.log('Hi ' + name);

    return 'Mr.' + name;
})('Pesho')

console.log(result);

// IIAF
(() => console.log('asdasd'))();
