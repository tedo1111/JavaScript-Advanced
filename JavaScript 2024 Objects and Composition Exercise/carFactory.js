function carFactory(order) {

    let res = {
        model: order.model,
        engine: undefined,

        carriage: undefined,

        wheels: undefined,
    }


    if (order.power <= 90) {
        res.engine = { power: 90, volume: 1800 };
    }
    else if (order.power <= 120) {
        res.engine = { power: 120, volume: 2400 };
    }
    else {
        res.engine = { power: 200, volume: 3500 };
    }

    if (order.carriage === 'hatchback') {
        res.carriage = { type: 'hatchback', color: order.color };
    }
    else {
        res.carriage = { type: 'coupe', color: order.color };
    }

    let wheelSize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;

    res.wheels = new Array(4).fill(wheelSize);

    return res;
}


let res = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}

console.log(res);
// carFactory({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// }
// );