function addItem() {

    const inputEl = document.getElementById('newItemText');
    const ulEl = document.getElementById('items');

    let liEl = document.createElement('li');
    liEl.textContent = inputEl.value;

    ulEl.append(liEl);

    inputEl.value = '';

    inputEl.focus();
}