// Reasons to use map over object
// * frequent property deletion or clear
// * different than string value type for keys
// * strict insertion order

// Declare map
let map = new Map();

// Add elements to map
map.set('name', 'Pesho');
map.set(10, true);
map.set(true, 'Gosho');

console.log(map);

// Iterate map
for (const [key, value] of map) {
    console.log(typeof key);
    console.log(`${key} -> ${value}`);
}

// Get specific value
console.log(map.get('name'));

// Get map size
console.log(map.size);

// Check if key exists
console.log(map.has('name'));

// iterate keys
for (const key of map.keys()) {
    console.log(key);
}

// iterate values
for (const value of map.values()) {
    console.log(value);
}

// Delete key
console.log(map.delete('name'));
console.log(map);

// Clear
map.clear();
console.log(map);

// Sort 
let phonebook = new Map();
phonebook.set('Pesho', '123123');
phonebook.set('Gosho', '2312312');
phonebook.set('Stamat', '3213');
phonebook.set('Angel', '12321312123');

let sortedEntries = Array.from(phonebook)
    .sort((a, b) => a[0].localeCompare(b[0]));

let sortedPhonebook = new Map(sortedEntries);
console.log(sortedPhonebook);
