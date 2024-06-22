function sayHi(obr, name) {
    console.log(`Hello ${obr} ${name}, my name is ${this.name}!`);
}

// Use call
let newContext = {
    name: 'Mariyka'
};

sayHi.call(newContext, 'Mr.', 'Gosho');

// Use apply
sayHi.apply(newContext, ['Mr.', 'Gosho']);

// Bind
const modifiedSayHi = sayHi.bind(newContext);
modifiedSayHi('Mr.', 'Gosho');

// Partial application
const partialApplicationSayHi = sayHi.bind(newContext, 'Mr.');

partialApplicationSayHi('Stamat');
