// Primitives
let number = 5;
let text = 'Az sym bylgarche';
let isActive = true;
let notSet;
let missing = null;

console.log(notSet);
console.log(missing);

// Variable name identifier 
let variableName = 'Some Value';

// Function name identifier
function someName() {
    console.log('Result');
}

// Property identifier
let obj = {
    identifierName: 'Some value'
}

let numer8 = 8;


// Undefined 
let notDefined;
console.log(notDefined);

// Undeclared
// console.log(notDeclared);

// Declare variables
let age = 18;
age++;
console.log(age);

// Constant variable
const fullName = 'Ivaylo Papazov';

// Old school / deprecated
var firstName = 'Pesho';
console.log(firstName);

// Funciton scope hoisting

// global scope
function calculate() {
    // function scope
    console.log(someVarName);

    var someVarName = 'Pesho';

    if (true) {
        // block scope
        let lastName = 'Goisho';
    }
}

calculate();
