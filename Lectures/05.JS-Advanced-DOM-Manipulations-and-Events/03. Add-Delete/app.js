function addItem() {
    const itemListElement = document.getElementById('items');
    const newItemInput = document.getElementById('newItemText');

    // create li elemetn
    const liElement = document.createElement('li');
    liElement.textContent = newItemInput.value;

    // create a element for delete
    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = 'Delete';

    // Add event handler to the delete element
    deleteButton.addEventListener('click', (event) => {
        // Delete by reference
        liElement.remove();

        // Delete by parent
        // event.currentTarget.parentElement.remove();
    });

    // Append a element to li element
    liElement.append(deleteButton);

    // Append li element
    itemListElement.append(liElement);

    // Clean up
    newItemInput.value = '';
}
