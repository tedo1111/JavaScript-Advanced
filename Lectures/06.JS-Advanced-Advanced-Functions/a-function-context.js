function sayHi() {
    console.log(`Hello my name is ${this.name}!`);
}

// Invoke as global function
sayHi(); // There is no name property in the global context

// Invoke as inner function
function outer() {
    sayHi();
}

outer();

// Invoke as method
let person = {
    name: 'Pesho',
    sayHi,
};

person.sayHi();

// Invoke as inner function of method
let anotherPerson = {
    name: 'Stamat',
    saySomething() {
        sayHi();
    }
}

anotherPerson.saySomething(); // sayHi is executed as normal function so the context is global

// Invoke as inner arrow function of method
let person2 = {
    name: 'Georg',
    saySomething() {
        // let that = this;
        
        // function sayHi() {
            //     console.log(`Hello my name is ${that.name}!`);
        // }
        
        // Context will be passed on arrow function creation
        let sayHiArrow = () => console.log(`Hello my name is ${this.name}!`);

        sayHiArrow();
    }
} 

person2.saySomething();
