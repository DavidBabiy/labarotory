const plotlib = require('nodeplotlib');

let x = [-5,3,-3,13,-2,9,6,19,-7,3,-2,14,-6,-1,-2,11,-8,-3,-4,13,7,8,4,16,8,5,4,21,5,8,9,9];
let y = [1,-1,1,1,-1,-1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,1,-1,-1,1,-1,1,1,1,-1,1];
let X = [];
let Y = [];

for (let i = 0; i < x.length; i++) {
    X[i] = x[i];
    Y[i] = y[i];
    X[i + x.length] = x[i];
    Y[i + y.length] = y[i];
}

let FxxList = [];
let FxyList = [];
let graph = []
let counter = 0;

for (let j = 0; j < x.length; j++) {
    counter++;
    graph.push(counter);
    counter++;
    graph.push(counter);
    let Fxx = 0., Fxy = 0.;
    let z = 0., zY = 0.;
    for (let i = 0; i < y.length; i++) {
        if (x[i] <= X[i + j]) {
            z = x[i];
        } else {
            z = X[i + j];
        }
        if (x[i] <= Y[i + j]) {
            zY = x[i];
        } else {
            zY = Y[i + j];
        }
        Fxx += z;
        Fxy += zY;
    }

    Fxx = Fxx / x.length;
    Fxy = Fxy / y.length;
    FxxList.push(Fxx);
    FxyList.push(Fxy);
}
const dataFxx = [{
    x: graph,
    y: FxxList,
    type: 'Pie charts'
}];
const dataFxy = [{
    x: graph,
    y: FxyList,
    type: 'Pie charts'
}];

plotlib.plot(dataFxx);
plotlib.plot(dataFxy);
console.log("Fxx = " + FxxList);
console.log("Fxy = " + FxyList);
