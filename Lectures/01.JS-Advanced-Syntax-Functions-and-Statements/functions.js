// Prints stars
function printStars(count) {
    console.log('*'.repeat(count));
}

for (let i = 10; i > 0; i--) {
    printStars(i);
}

print('Before initialization');

// Function declaration
function print(text) {
    console.log(text);
} 

// Function expression
const print2 = function(text) {
    console.log(text);
};

// arrow funciton statement body
const print3 = (text) => {
    console.log(text);
}
print3('arrow function');

// arrow function expression body
const squared = a => a * a;

console.log(squared(4));

// String methods
let text = 'Some text here';
console.log(text.toUpperCase());

// Default parameters
function hello(name = 'guest') {
    console.log(`Hello ${name}`);
}

hello('PEsho');
hello();
