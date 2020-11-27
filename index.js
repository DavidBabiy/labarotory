let a = -2.;
let b = 1.;
let e = .005;

let x = .0;
let s = 0;

let h = (b - a);

for (; ;) {
    x = a + (h / 2);
    s = sign(x);
    if (s === 0) {
        break;
    } else {
        b = x;
        h = x - a;
        if (h < e) {
            break;
        }
    }
}
console.log("x = " + x);

function Fx(x) {
    return 15*Math.pow(x, 4) - 3*x*x;
}

function fx(x) {
    return 3*Math.pow(x, 5) - Math.pow(x, 3) + 12;
}

function sign(x) {
    let res = Fx(x);
    if (res === 0) return 0;
    else if (res > 0) return 1;
    else return -1;
}


