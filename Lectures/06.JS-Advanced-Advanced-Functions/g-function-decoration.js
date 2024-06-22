// Partial application
function sayHi(title, name) {
    console.log(`Hello, ${title} ${name}!`);
}

// Using function wrapper
const sayHiMr = (name) => sayHi('Mr.', name);
sayHiMr('Beast');

// Using bind
const sayHiMr2 = sayHi.bind(null, 'Mr.');
sayHiMr2('President');
