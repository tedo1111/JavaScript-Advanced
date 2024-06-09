function storeCatalogue(input) {
    // Parse the input and create a product list
    let products = [];
    for (let entry of input) {
        let [name, price] = entry.split(' : ');
        price = Number(price);
        products.push({ name, price });
    }

    // Sort the products by name
    products.sort((a, b) => a.name.localeCompare(b.name));

    // Group the products by their initial letter
    let catalog = {};
    for (let product of products) {
        let initial = product.name[0];
        if (!catalog[initial]) {
            catalog[initial] = [];
        }
        catalog[initial].push(product);
    }

    // Format the output
    let result = [];
    for (let initial in catalog) {
        result.push(initial);
        for (let product of catalog[initial]) {
            result.push(`  ${product.name}: ${product.price}`);
        }
    }

    return result.join('\n');
}
let res = storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
console.log(res);