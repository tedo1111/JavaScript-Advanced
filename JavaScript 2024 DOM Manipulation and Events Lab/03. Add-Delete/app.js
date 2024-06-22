function addItem() {
    const newItemText = document.getElementById('newItemText').value;

    if (newItemText.trim() !== '') {
        const li = document.createElement('li');

        li.textContent = newItemText;

        const deleteLink = document.createElement('a');
        deleteLink.href = '#';
        deleteLink.textContent = '[Delete]';
       

       
        deleteLink.addEventListener('click', function (e) {
            e.preventDefault();
            li.remove();
        });

        li.appendChild(deleteLink);

        document.getElementById('items').appendChild(li);

        document.getElementById('newItemText').value = '';
    }
}