// Define simple class
class Cat {
    constructor(name) {
        this.name = name;
    }

    // Define instance method
    sleep() {
        console.log(`${this.name}: ZzzzzzZZZzz...`);
    }

    eat() {
        console.log(`${this.name}: Omnomnomnom...`);
    }

    // Define static method
    static staticMethod() {
        console.log(`This can be called only through the class ${this.name}`);
    }

    static secondStaticMethod() {
        //this.sleep() // Cannot call instance method from static
        this.staticMethod(); // But we can call another static method
    }
}

// Create instance from class
const myCat = new Cat('Navuhodonosor');
const yourCat = new Cat('Pepi');

console.log(myCat);
console.log(yourCat);

// Call instance method
myCat.sleep();
yourCat.sleep();
myCat.eat();
yourCat.eat();

// Instance of
console.log(myCat instanceof Cat);
console.log(myCat instanceof Object);

let cat = {
    name: 'CopyCat',
    sleep() {
        console.log(`${this.name}: ZzzzzzZZZzz...`);
    },
    eat() {
        console.log(`${this.name}: Omnomnomnom...`);
    }
};
console.log(cat instanceof Cat); // Not created from cat

// Call static method
Cat.staticMethod();
Cat.secondStaticMethod();
