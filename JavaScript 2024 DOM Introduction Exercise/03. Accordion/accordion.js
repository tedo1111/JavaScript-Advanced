function toggle() {
    const button = document.getElementsByClassName('button')[0];

    const extraDiv = document.getElementById('extra');

    if (extraDiv.style.display === 'none' || extraDiv.style.display === '') {
        extraDiv.style.display = 'block';
        button.textContent = 'Less';
    } else {
        extraDiv.style.display = 'none';
        button.textContent = 'More';
    }
}