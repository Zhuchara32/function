function setTime(h) {
    return function setMinutes(m = '00') {
        return function setSeconds(s = '00') {
            return `${h}:${m}:${s}`;
        }
    }
}

let time = setTime(22)()(11);
// console.log(time);

//8

function setSum(h) {
    h = h * 3600;
    return function setMinutes(m) {
        m = m * 60;
        return function setSeconds(s) {
            return h + m + s;
        }
    }
}

let timeSum = setSum(2)(33)(13);
// console.log(timeSum);

//9

function setHour(sec) {
    h = Math.round(sec / 3600);
    if (h < 10) {
        h = '0' + h;
    }
    return function setMinutes() {
        m = Math.round((sec % 3600) / 60);
        if (m < 10) {
            m = '0' + m;
        }
        return function setSeconds() {
            s = Math.round((sec % 3600) % 60);
            if (s < 10) {
                s = '0' + s;
            }
            return `${h}:${m}:${s}`;
        }
    }
}

let timeBreak = setHour(17844)()();
console.log(timeBreak);


