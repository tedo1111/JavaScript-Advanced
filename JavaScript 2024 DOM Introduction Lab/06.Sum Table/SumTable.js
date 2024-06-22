function sumTable() {
    const rows = document.querySelectorAll('table tbody tr');
    let sum = 0;

    for (let i = 1; i < rows.length - 1; i++) { 
        const cells = rows[i].children;
        const value = parseFloat(cells[cells.length - 1].textContent);
        if (!isNaN(value)) {
            sum += value;
        }
    }

    document.getElementById('sum').textContent = sum.toFixed(2);
}