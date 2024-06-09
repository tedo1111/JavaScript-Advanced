function canPrint(device) {
    device.print = function () {
        console.log(`${this.name} is printing page`);
    };
}

function canScan(device) {
    device.scan = function () {
        console.log(`${this.name} is scanning page`);
    };
}

let printer = { name: 'Lexmark' };
canPrint(printer);
printer.print();

let scanner = { name: 'HP Scanner' };
canScan(scanner);
scanner.scan();

let copier = { name: 'Brother Copier' };
canScan(copier);
canPrint(copier);


