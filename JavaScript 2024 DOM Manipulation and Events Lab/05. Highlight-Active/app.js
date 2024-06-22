function focused() {
    const inputFields = document.querySelectorAll('input[type="text"]');

    inputFields.forEach(input => {
        input.addEventListener('focus', (event) => {
            event.target.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', (event) => {
            event.target.parentElement.classList.remove('focused');
        });
    });
}