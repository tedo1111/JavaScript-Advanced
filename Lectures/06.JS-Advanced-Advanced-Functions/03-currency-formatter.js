// Bind
function createFormatter(separator, symbol, symbolFirst) {
    return currencyFormatter.bind(null, separator, symbol, symbolFirst)
}

// Function wrapper
function createFormatter2(separator, symbol, symbolFirst) {
    return function (value) {
        return currencyFormatter(separator, symbol, symbolFirst, value)
    }
}

// Function wrapper with arrow function
const createFormatter3 = (separator, symbol, symbolFirst) => (value) => 
    currencyFormatter(separator, symbol, symbolFirst, value)

const bgFormatter = createFormatter(',', 'лв.', false);

console.log(bgFormatter(20));
console.log(bgFormatter(200));

const usFormatter = createFormatter2('.', '$', true);
console.log(usFormatter(10));

// Curry currency fomatter
const curryCurrency = separator => symbol => symbolFirst => value => currencyFormatter(separator, symbol, symbolFirst, value);
const gbpFomatter = curryCurrency('.')('GBP')(false); 
console.log(gbpFomatter(5));

const dotCurrencyFormatterBuilder = curryCurrency('.');


function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

const result = currencyFormatter(',', 'лв.', false, 10);
console.log(result);
