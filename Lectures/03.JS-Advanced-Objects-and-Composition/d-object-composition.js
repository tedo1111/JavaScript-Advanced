// Nested object
let student = {
    firstName: 'Maria',
    lastName: 'Lopez',
    age: 22,
    location: { lat: 42.698, lng: 23.322 }
}

// Access property of nested object
console.log(student.location.lat);

// Composing Objects With Behavior
function print() {
    console.log(`${this.name} is printing page`);
}

function scan(){
    console.log(`${this.name} is scanning page`);
}

const printer = {
    name: 'Brother',
    print,
};

const scanner = {
    name: 'HP Scanner',
    scan,
};

const copier = {
    name: 'Copier Machine',
    print,
    scan,
};

copier.scan();
copier.print();

// Factory function
function catFactory(name, breed) {
    let cat = {
        name,
        breed,
    };

    cat.sleep = () => console.log('ZzzZzzZz');

    return cat;
};

const cat = catFactory('Navcho', 9);
const simpleCat = catFactory('Simple', 2);
cat.sleep();
simpleCat.sleep();
