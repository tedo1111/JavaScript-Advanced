function townsToJSON(input) {
    // Skip the header row and process each subsequent row
    let result = input.slice(1).map(row => {
        // Split the row by '|' and trim the resulting strings
        let [empty, town, latitude, longitude, empty2] = row.split('|').map(x => x.trim());

        // Create an object with the required properties
        return {
            Town: town,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2))
        };
    });

    // Convert the array of objects to a JSON string
    return JSON.stringify(result);
}
let res = townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
console.log(res);