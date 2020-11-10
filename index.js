const plotlib = require('nodeplotlib');

let array = [4.10, 6.17, 2.50, 2.24, 6.19, 2.37, 2.44, 1.78, 4.98, 8.41, 6.89, 2.64, 1.63, 0.05, 4.59, 2.65, 0.33, 1.45, 6.76, 9.46, 7.99, 6.38, 2.72, 2.92];
let arrayOfPos = [];
let map = new Map();

for (let i = 0; i < array.length; i++) {
    let amount = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
            amount++;
        }
    }
    arrayOfPos.push(amount/array.length);
    map.set(array[i], amount/array.length);
}

console.log(`Кількість значень в масиві: ${array.length}`);
console.log(`Кількість унікальних значень в масиві: ${map.size}`)

let mx = 0.;
for (let el of map) {
    mx += el[0] * el[1];
}

console.log("Mx: " + mx);

let avgX = 0., avgX2 = 0.;

for (let el of map) {
    avgX2 += el[0] * el[0];
    avgX += el[0];
}
avgX = avgX / array.length;
avgX2 = avgX2 / array.length;

console.log("Average x: " + avgX);
console.log("Average x^2: " + avgX2);

let dx = 0.;
for (let el of map) {
    dx += Math.pow(el[0] - mx, 2) * el[1];
}
console.log("Dx: " + dx);

let sx = 0.;
for (let el of map) {
    sx += Math.pow(el[0] - avgX, 2);
}
sx = Math.sqrt(sx / (array.length - 1));
console.log("sx: " + sx);

let hx = 0.;
for (let el of map) {
    hx += el[1] * Math.log10(el[1]);
}
hx = hx * (-1);
console.log("Hx: " + hx);

const data = [{
    x: array,
    y: arrayOfPos,
    type: 'Pie charts'
}];

plotlib.plot(data);
