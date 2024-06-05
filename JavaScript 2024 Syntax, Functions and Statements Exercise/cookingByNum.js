function cookingByNum(num, c1, c2, c3, c4, c5) {

    let start = Number(num);


    let arr = [];

    arr.push(c1, c2, c3, c4, c5);



    for (let commnad of arr) {
        if (commnad === `chop`) {
            start /= 2;
            console.log(start);
        }
        else if (commnad === `dice`) {
            start = Math.sqrt(start);
            console.log(start);
        }
        else if (commnad === `spice`) {
            start += 1;
            console.log(start);
        }
        else if (commnad === `bake`) {
            start *= 3;
            console.log(start);
        }
        else if (commnad === `fillet`) {
            start *= 0.8;
            console.log(start);
        }
    }


}
// cookingByNum('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNum('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
