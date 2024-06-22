// First class function
function execute(operation, operandA, operandB) {
    const result = operation(operandA, operandB);

    console.log(result);
}

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

execute(sum, 10, 20);
execute(subtract, 20, 10);

// Higher order function
function greetingBuilder(salutation, title) {
    return (name) => {
        console.log(`${salutation} ${title} ${name}!`)
    }
}

const formalGreeting = greetingBuilder('Hello', 'Mr.');
formalGreeting('Peter');
formalGreeting('Georgi');

const informalGreeting = greetingBuilder('Maraba', 'brato');
informalGreeting('Pesho');

// Function predicate
function isOdd(number) {
    return number % 2 !== 0;
}
