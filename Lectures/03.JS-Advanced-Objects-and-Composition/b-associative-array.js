let phonebook = {
    'Ivan Ivanov': '+3598812301231',
    'Georgi Ivanov': '+359881230141',
    'Petar Georgiev': '+359883430141',
};

// Access specific number
console.log(phonebook['Ivan Ivanov']);

// Iterate through all numbers with for-in
for (const name in phonebook) {
    console.log(name);
    console.log(phonebook[name]);
}

// Iterate with Object.values
let phoneNumbers = Object.values(phonebook);
console.log(phoneNumbers);

// Iterate with Object.keys
let names = Object.keys(phonebook);
console.log(names);
for (const name of names) {
    console.log(`${name}: ${phonebook[name]}`);
}

// Object entires
let phonebookEntries = Object.entries(phonebook);
console.log(phonebookEntries);
for (const kvp of phonebookEntries) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
}
