// Basic syntax
const cat = {
    name: 'Navcho',
    age: 9,
    isMale: true,
}

// Set new property
cat.eyeColor = 'Amber';

// shorthand syntax
let firstName = 'Pesho';
let person = {
    firstName,
    age: 20,
}
console.log(person);

// Access proprty with dot notation
console.log(person.firstName);

// Access property value with bracket notation
console.log(person['age']);

// Access property value with bracket notaion using variable
let dynamicPropertyName = 'firstName';
console.log(person[dynamicPropertyName]);

// Set property name that doesn't comply to identifier rules
let employee = {
    'first-name': 'Pesho',
}
console.log(employee);

// Access that property
console.log(employee['first-name']);

// Access non existing property
console.log(employee.department);

// Object Destructuring Assignment
let { name } = cat;
console.log(name);

// Rest operator
let { age, ...rest } = cat;
console.log(rest);

// Delete property
let simpleObj = { first: 1, second: 2, third: 3 };
delete simpleObj.first;
console.log(simpleObj);

// Reference value
let anotherObj = simpleObj;
console.log(simpleObj === anotherObj);
let simpleObj2 = {second: 2, third: 3};
console.log(simpleObj2 === simpleObj);
simpleObj.second = 20;
console.log(anotherObj.second);

// Use dynamic property name in object literal
let propName = 'isEco';
let house = {
    color: 'Pink',
    isMultiFamily: true,
    [propName]: true,
}

console.log(house);
