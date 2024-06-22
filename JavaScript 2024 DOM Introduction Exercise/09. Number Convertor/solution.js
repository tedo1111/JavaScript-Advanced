function solve() {
    const selectMenuFrom = document.getElementById('selectMenuFrom');
    const selectMenuTo = document.getElementById('selectMenuTo');

    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    selectMenuTo.appendChild(binaryOption);

    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';
    selectMenuTo.appendChild(hexadecimalOption);

    const convertButton = document.querySelector('button');

    convertButton.addEventListener('click', () => {
        const inputValue = parseInt(document.getElementById('input').value);

        const conversionType = selectMenuTo.value;

        let result;
        if (conversionType === 'binary') {
            result = inputValue.toString(2);
        } else if (conversionType === 'hexadecimal') {
            result = inputValue.toString(16).toUpperCase();
        }

        document.getElementById('result').value = result;
    });
}