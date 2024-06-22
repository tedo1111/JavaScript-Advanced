function addItem() {
    // Get related elements from DOM
    const inputElement = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    // Create new li element
    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    // APpend li element to dom
    ulElement.append(liElement);

    // Clean up input
    inputElement.value = '';

    // Focus on input
    inputElement.focus();
}
