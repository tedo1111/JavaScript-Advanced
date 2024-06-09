function printSqaure(size = 5) {
    for (let i = 0; i < size; i++) {
        const row = '* '.repeat(size);

        console.log(row.trim());
    }
}

printSqaure(10);
