let a = [[1.5, -2], [3, -1]];
let b = [4, 5];
let x = [0, 0];
let e = 0.0001;
let k = 0;

console.log("true");
let xx = x;
while (true) {
    x[0] = (b[0] - a[0][1] * xx[1]) / a[0][0];
    x[1] = (b[1] - a[1][0] * xx[0]) / a[1][1];
    k++;
    if (Math.abs(x[0] - xx[0]) < e && Math.abs(x[1] - xx[1]) < e) {
        break;
    } else {
        xx = x;
    }
}
console.log("k = " + k);
for (let i = 0; i < x.length; i++) {
    console.log(`x[${i + 1}] = ${x[i]}`);
}

