let cars = ['BMW', 'Mercedes', 'Audi', 'Toyota'];

// Pop
let lastElement = cars.pop();
console.log(lastElement);
console.log(cars);

// Push
cars.push('Mazda');
console.log(cars);

// Shift
let firstElement = cars.shift();
console.log(firstElement);
console.log(cars);

// Unshift
cars.unshift('Toyota');
console.log(cars);

// Splice 
let removedElements = cars.splice(1, 2);
console.log(removedElements);
console.log(cars);
cars.splice(1, 0, 'Mercedes', 'Audi');
console.log(cars);

// Fill
let numbers = [1, 2, 3, 4, 5];
numbers.fill(0);
console.log(numbers);

// let empty = new Array(10);
let empty = [];
empty.length = 10
empty.fill(0);
console.log(empty);

// Reverse
let nums = [1, 2, 3, 4, 5, 6];
nums.reverse();
console.log(nums);
