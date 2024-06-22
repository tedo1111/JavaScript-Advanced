function addItem() {
    const text = document.getElementById('newItemText').value;
    const value = document.getElementById('newItemValue').value;

    const selectMenu = document.getElementById('menu');

    const option = document.createElement('option');
    option.textContent = text;
    option.value = value;

    selectMenu.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}