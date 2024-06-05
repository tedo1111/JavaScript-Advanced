function roadRadar(speed, area) {

    let diff = 0;
    let status;
    switch (area) {
        case `motorway`:
            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a ${130} zone`);
            }
            else {
                diff = speed - 130;
                if (diff <= 20) {
                    status = `speeding`;
                }
                else if (diff <= 40) {
                    status = `excessive speeding`
                }
                else if (diff > 40) {
                    status = `reckless driving`;
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${130} - ${status}`);
            }
            break;
        case `interstate`:
            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a ${90} zone`);
            } else {
                diff = speed - 90;
                if (diff <= 20) {
                    status = `speeding`;
                }
                else if (diff <= 40) {
                    status = `excessive speeding`
                }
                else if (diff > 40) {
                    status = `reckless driving`;
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${90} - ${status}`);
            }
            break;
        case `city`:
            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a ${50} zone`);
            }
            else {
                diff = speed - 50;
                if (diff <= 20) {
                    status = `speeding`;
                }
                else if (diff <= 40) {
                    status = `excessive speeding`
                }
                else if (diff > 40) {
                    status = `reckless driving`;
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${50} - ${status}`);
            }
            break;
        case `residential`:
            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a ${20} zone`);
            } else {
                diff = speed - 20;
                if (diff <= 20) {
                    status = `speeding`;
                }
                else if (diff <= 40) {
                    status = `excessive speeding`
                }
                else if (diff > 40) {
                    status = `reckless driving`;
                }
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${20} - ${status}`);
            }
            break;


    }

}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');