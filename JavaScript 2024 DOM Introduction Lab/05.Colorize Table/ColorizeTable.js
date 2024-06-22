function colorize() {
    const rows = document.querySelectorAll('table tr');

    rows.forEach((row, index) => {
        if (index % 2 === 1) {
            row.style.backgroundColor = 'Teal';
        }
    });
}