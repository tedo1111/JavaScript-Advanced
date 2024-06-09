function lowestPricesInCities(input) {
    let products = {};

    for (let entry of input) {
        let [town, product, price] = entry.split(' | ');
        price = Number(price);

        if (!products[product]) {
            products[product] = { town, price };
        } else {
            if (price < products[product].price) {
                products[product] = { town, price };
            }
        }
    }

    let result = [];
    for (let product in products) {
        result.push(`${product} -> ${products[product].price} (${products[product].town})`);
    }

    return result.join('\n');
}
let res = lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);

console.log(res);

