class Car {
    // Set default initialized property
    speed = 0;
    // Set private property
    #isMoving = false;
    // Set static properties
    static tierCount = 4;

    // Static private property
    static #secret = 'secret';

    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    accelerate(speed) {
        this.speed += speed;
        this.#isMoving = true;

        if (this.speed > 200) {
            this.#factoryReset();
        }
    }

    // private method
    #factoryReset() {
        this.speed = 0;
        this.#isMoving = false;
    }

    // static method
    static staticMethod() {
        console.log(this.tierCount); // We can access static properties from static method
        console.log(this.#secret); // we can access private static properties from static method
    }

    // Static private method
    static #privateMethod() {
        console.log('Yey');
    }
}

const tesla = new Car('tesla', 'Y');
console.log(tesla);
tesla.accelerate(100);
console.log(tesla);
tesla.accelerate(200);
console.log(tesla);
console.log(Car.tierCount);
