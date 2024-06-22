function solve(area, vol, input) {
    let data = JSON.parse(input);

    const totalRes = [];

    for (let points of data) {
        let res = {
            x: Number(points.x),
            y: Number(points.y),
            z: Number(points.z)
        };

        totalRes.push({
            area: area.call(res),
            volume: vol.call(res),
        });
    }

    return totalRes;
}


function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);

