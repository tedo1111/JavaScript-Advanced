function deleteByEmail() {
    // Select elements
    const resultElement = document.getElementById('result');
    const inputElement = document.querySelector('input[name=email]');

    // Select all rows
    const trElements = document.querySelectorAll('#customers tbody tr');

    // Find matching row
    const resultRow = Array.from(trElements)
        .find(tr => tr.getElementsByTagName('td')[1].textContent === inputElement.value);

    // Remove row and append result
    if (resultRow) {
        resultRow.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
    
    // Clean up
    inputElement.value = '';
}
