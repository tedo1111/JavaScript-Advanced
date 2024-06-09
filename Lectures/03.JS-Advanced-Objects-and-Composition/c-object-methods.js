// Add method to object with functino espression
let cat = {
    name: 'Navcho',
    age: 9,
    sleep: function () {
        console.log('ZzzZzZzz...');
    }
}

// Invoke object method
cat.sleep();

// Add method with arrow function
let bird = {
    type: 'Pidgeon',
    fly: () => console.log('I believe I can flyy....'),
};

bird.fly();

// Add method using method notation
let car = {
    model: 'Tesla 3',
    drive() {
        console.log('Brummmm');
    },
    year: 2023,
}
car.drive();

// Sorting helpers
const compareNumbers = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a,
};

let numbers = [1, 4, 1, 2, 3, 4, 56, 21];
numbers.sort(compareNumbers.descending)
console.log(numbers);

// Replace switch with object
let command = 'increment';
let count = 5;

switch (command) {
    case 'increment':
        count++;
        break;
    case 'decrement':
        count--;
        break;
    case 'reset':
        count = 0;
        break;
}
let commands = {
    increment() { count++ },
    decrement() { count-- },
    reset() { count = 0 },
}

commands[command]();

// Method context
let person = {
    name: 'Gosho',
    introduce() {
        console.log(`Hello my name is ${this.name}`);
    }
}

person.introduce();

let introduce = person.introduce;
console.log(introduce === person.introduce);

// Execute without context*
introduce();

let anotherPerson = {
    name: 'Stamat'
};
anotherPerson.greet = introduce;
anotherPerson.greet();
