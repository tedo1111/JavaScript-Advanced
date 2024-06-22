class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }
}

const circle = new Circle(5);
console.log(circle.diameter);

circle.radius = 10;
console.log(circle.diameter);

circle.diameter = 100;
console.log(circle.radius);
console.log(circle.diameter);
