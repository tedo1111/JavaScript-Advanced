function townPopulation(input) {

    let townRegistry = {};

    for (let line of input) {
        let [town, population] = line.split(" <-> ");

        if (!townRegistry[town]) {
            townRegistry[town] = 0;
        }

        townRegistry[town] += Number(population);

    }

    for (let town in townRegistry) {
        console.log(`${town} : ${townRegistry[town]}`);
    }

}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);