function addAndRemove(input) {

    let res = [];
    let currN = 1;

    for (let el of input) {
        if (el === `add`) {
            res.push(currN);
        }
        else if (el === `remove`) {
            res.pop();
        }
        currN++;
    }

    if (res.length === 0) {
        console.log(`Empty`);
    }
    else {
        res.forEach(n => console.log(n));
    }

   

}
// addAndRemove(['add',
//     'add',
//     'add',
//     'add']
// );
addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add']
);
// addAndRemove(['remove',
//     'remove',
//     'remove']
// );