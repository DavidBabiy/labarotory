console.log("Area equals: " + getArea(5, 25, 30));

let n;
let e = 0.0001;
let I1;
let I2;

for (n = 1; n > 0; n++) {
    I1 = getArea(5, 25, n);
    I2 = getArea(5, 25, n * 2);
    if (Math.abs(I2 - I1) / 3 < e) break;
}

console.log("Minimal amount of intervals is: " + n);

function getArea(a, b, n) {
    let I = 0.;
    let h = (b - a) / n;
    for (let x = a; x < b - h; x += h) {
        let d = 1. / 3.;
        I += (Math.PI - Math.pow(x + h / 2, 2)) * Math.sin(Math.pow(2.1 + x + h / 2, d));
    }
    I = I * h;
    return I;
}
