let a = 53;
let b = 36;

function whoHasMore() {
    let result;
    if (a < b) {
        result = 1;
    }
    else if (a > b) {
        result = -1;
    }
    else {
        result = 0;
    }
    alert(result);
}
// whoHasMore();

///2

let x = 58;

function factorial() {
    let i = 1;
    let result;
    do {
        result = i * ++i;
    } while (i < x);
    alert(result);
}
// factorial();

// 3



function numeric() {
    let a = 3;
    let b = 2;
    let c = 9;
    let d;
    d = String(a) + String(b) + String(c);
    alert(Number(d));
}
// numeric();

// 4

function square() {
    let a = 26;
    let b = 11;
    let s;

    if (a == undefined) {
        s = b * b;
    }
    else if (b == undefined) {
        s = a * a;
    }
    else {
        s = a * b;
    }
    alert(s);
}
