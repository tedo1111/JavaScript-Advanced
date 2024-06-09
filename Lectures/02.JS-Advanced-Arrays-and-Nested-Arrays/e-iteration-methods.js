let cars = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Alfa'];

// ForEach
cars.forEach((element, index) => {
    console.log(index);
    console.log(element.toUpperCase());
});

// Map
let upperCars = cars.map(car => car.toUpperCase());
console.log(upperCars);
console.log(cars);

// Includes
let hasAudi = cars.includes('Audi');
console.log(hasAudi);

// Some
let hasCarWithT = cars.some(car => car.startsWith('T'));
console.log(hasCarWithT);

// Find
let carWitA = cars.find(car => car.startsWith('A'));
console.log(carWitA);

// Filter
let carsWithA = cars.filter(car => car.startsWith('A'));
console.log(carsWithA);
console.log(cars);

