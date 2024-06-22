function sumTable() {
    const sumTdElement = document.getElementById('sum');
    const priceTdElements = document.querySelectorAll('table tr td:nth-of-type(2):not(#sum)');
    let totalPrice = 0;

    for (const tdElement of priceTdElements) {
        let price = Number(tdElement.textContent);

        totalPrice += price;
    }

    sumTdElement.textContent = totalPrice;
}
