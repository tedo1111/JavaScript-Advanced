let student = {
    name: 'Pesho',
    age: 20,
    grades: [2, 3, 4, 2, 4, 6],
    location: {
        lat: 123,
        long: 324,
    }
};

// Convert object to single line json
let studentJson = JSON.stringify(student);
console.log(studentJson);

// Convert object to multiline json
let multilineStudentJson = JSON.stringify(student, null, 2);
console.log(multilineStudentJson);

// Convert json to data
let studentData = JSON.parse(multilineStudentJson);
console.log(studentData);
