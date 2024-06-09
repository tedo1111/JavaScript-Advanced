function heroicInventory(input) {

    let heroes = [];


    for (let data of input) {
        let [name, level, items] = data.split(" / ");

        if (!name || !level) continue;

        items = items ? items.split(", ") : [];

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };

        heroes.push(hero);
    }

    return JSON.stringify(heroes);

}
let res = heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
console.log(res);