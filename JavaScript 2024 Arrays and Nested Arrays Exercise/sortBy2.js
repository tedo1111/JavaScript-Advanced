function sortBy2(arr) {

    arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    arr.forEach(str => console.log(str));

}
sortBy2(['alpha',
    'beta',
    'gamma']
);
sortBy2(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);