function calorieObject(input) {

    let res = {};

    for (let i = 0; i < input.length; i += 2) {
        let key = input[i];
        let value = Number(input[i + 1]);

        res[key] = value;
    }
    console.log(res);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);