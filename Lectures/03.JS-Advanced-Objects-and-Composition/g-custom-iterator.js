let phonebook = {
    'Ivan Ivanov': '+3598812301231',
    'Georgi Ivanov': '+359881230141',
    'Petar Georgiev': '+359883430141',
    'Stamat Petrov': '+359886530141',
    [Symbol.iterator]() {
        let names = Object.keys(this);
        let index = 0;

        return {
            next() {
                return {
                    value: names[index++],
                    done: index > names.length
                }
            }
        }
    }
};

// Compare same string
let nameOne = 'Pesho';
let nameTwo = 'Pesho';
console.log(nameOne === nameTwo);

// Compare same symbols
let symbolOne = Symbol('Pesho');
let symbolTwo = Symbol('Pesho');
console.log(symbolOne == symbolTwo);

// Create custom iterator
// phonebook[Symbol.iterator] = function () {
//     let names = Object.keys(this);
//     let index = 0;

//     return {
//         next() {
//             return {
//                 value: names[index++],
//                 done: index > names.length
//             }
//         }
//     }
// }

for (const name of phonebook) {
    console.log(name);
}
