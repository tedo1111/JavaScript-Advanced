function solve(area, vol, input) {
    const data = JSON.parse(input);
    const result = [];

    for (const line of data) {
        // const points = Object.keys(line)
        //     // .reduce((result, key) => ({...result, [key]: Number(points[key])}), {})
        //     .reduce((result, key) => {
        //         result[key] = Number(line[key]);

        //         return result;
        //     }, {});

            result.push({
                area: area.call(line),
                vol: vol.call(line),
            });
    }

    return result;
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};

const r = solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
)

console.log(r);
