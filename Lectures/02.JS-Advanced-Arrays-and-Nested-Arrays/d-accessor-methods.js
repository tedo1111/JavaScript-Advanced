let cars = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Audi', 'Alfa'];

// Join
let carList = cars.join(', ');
console.log(carList);

// Concat
let moreCars = ['Porsche', 'McLaren', 'Lamborghini'];
let allCars = cars.concat(moreCars);
console.log(allCars);

// Slice
let firstCars = cars.slice(0, 3);
let lastCars = cars.slice(3);
let carsCopy = cars.slice();
console.log(firstCars);
console.log(lastCars);
console.log(carsCopy == cars);

// Includes
let hasAudi = cars.includes('Audi');
console.log(hasAudi);

// IndexOf
let audiIndex = cars.indexOf('Audi');
console.log(audiIndex);
let resultIndex = cars.indexOf('Trabant');
console.log(resultIndex);
if (resultIndex < 0) {
    console.log('sorry cannot find this car');
}

// LastIndexOf
let lastAudiIndex = cars.lastIndexOf('Audi');
console.log(lastAudiIndex);
