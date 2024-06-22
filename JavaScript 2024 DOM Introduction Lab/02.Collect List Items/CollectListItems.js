// function extractText() {

//     let liEl = document.querySelectorAll('li');


//     const items = Array.from(liEl)
//         .map(liEl => liEl.textContent);


//     let resultTextAria = document.getElementById('result');

//     resultTextAria.value = items.join('\n');

// }

function extractText() {
    // Select the list element
    const list = document.getElementById('items');
    // Get all list items
    const items = list.getElementsByTagName('li');
    // Initialize an array to hold the text content
    let textContent = [];
    // Iterate through the list items
    for (let item of items) {
        // Add the text content of each item to the array
        textContent.push(item.textContent);
    }
    // Join the array into a single string separated by newlines
    const resultText = textContent.join('\n');
    // Set the text content of the textarea
    document.getElementById('result').value = resultText;
}