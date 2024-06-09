// Simple nested array
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];

let nested = [a, b, c];

// access first element
console.log(nested[0]);

// access number 5
let result = nested[1][1];
console.log(result);

// Traverse nested array
for (let i = 0; i < nested.length; i++) {
    console.log('New array');
    for (let j = 0; j < nested[i].length; j++) {
        console.log(nested[i][j]);
    }
}

console.log('Foreach traverse');
// Traverse with foreach
nested.forEach(arr => {
    arr.forEach(element => {
        console.log(element);
    })
})
