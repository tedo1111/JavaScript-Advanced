function listOfNames(arr) {


    arr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];

        console.log(`${i + 1}.${a}`);
    }

}
listOfNames(["John", "Bob", "Christina", "Ema"]);
