function extractText() {
    // get ul list element
    let liElements = document.querySelectorAll('li');

    // extract list item texts
    const items = Array.from(liElements)
        .map(liElement => liElement.textContent);

        console.log(items);

    // Get result element
    let resultTextArea = document.getElementById('result');
        
    // populate in result element
    resultTextArea.value = items.join('\n');
}
