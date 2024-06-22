function deleteByEmail() {
    const email = document.querySelector('input[name="email"]').value;
    const rows = document.querySelectorAll('#customers tbody tr');
    let found = false;

    for (const row of rows) {
        const emailCell = row.children[1];

        if (emailCell.textContent === email) {
            row.remove();
            found = true;
            document.getElementById('result').textContent = 'Deleted.';
            break;
        }
    }

    if (!found) {
        document.getElementById('result').textContent = 'Not found.';
    }
}