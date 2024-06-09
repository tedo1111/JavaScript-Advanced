// Array literal
const names = ['Pesho', 'Gosho', 'Mariyka', 'Stamat'];

// Mixed array
const mixed = [10, 3.14, true, 'Pesho'];
console.log(mixed);

// Sparse array
const sparseArr = [];
sparseArr.length = 1000;
console.log(sparseArr);
sparseArr[0] = 'Pesho';
sparseArr[999] = 'Gosho';
console.log(sparseArr);

// Dense array
const denseArray = [undefined, undefined, 'Pesho'];
console.log(denseArray);

// Get first and last elements
const firstElement = names[0];
const lastElement = names[names.length - 1];
console.log(firstElement);
console.log(lastElement);
console.log(names);

// Access non exisitng index
console.log(names[10]);
console.log(names[-1]);
console.log(names['First']);

// For-of
for (const name of names) {
    console.log(name);
}

// Iterator ***
const iterator = names[Symbol.iterator]();

let result = iterator.next();
while (!result.done) {
    console.log(result.value);

    result = iterator.next();
}

// Array destructuring assignment
const [firstName, secondName] = names;
console.log(firstName);
console.log(secondName);
console.log(names);

// Array destructuring assignemnt rest operator
const [fName, sName, ...others] = names;
console.log(fName);
console.log(others);

