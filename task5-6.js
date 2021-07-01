function main(a = 8128) {
    let b = [];
    function perfect() {
        for (i = 1; i < a; i++) {

            if (a % i == 0) {
                b.push(i);
            }
        }
        return b;
    }
    perfect();

    let x = b.reduce(function (a, b) {
        return a + b;
    });

    // console.log(x === a);
    return (x === a);
}

// main();

//6

function minMax(min, max) {
    for (let i = min; i <= max; i++) {
        let y = main(i);
        if (y === true) {
            console.log(i);
        }
    }
}

minMax(490, 520);