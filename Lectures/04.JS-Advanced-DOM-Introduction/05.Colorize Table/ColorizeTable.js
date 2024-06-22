function colorize() {
    const evenRowElements = document.querySelectorAll('table tr:nth-child(even)')

    for (const rowElement of evenRowElements) {
        rowElement.style.backgroundColor = 'teal';   
    }
}
