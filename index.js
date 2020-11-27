let xList = [0, 1, 2 ,3 ,4];
let fxList = [5.29, 2.31, 0.01, 1.69, 5.72];

for (let x of xList) {

    console.log("f(" + x + ") = " + eitken(x, xList.length, xList, fxList));
}
for (let x of xList) {
    console.log("f(" + x + ") = " + laGrange(x, xList.length, xList, fxList));
}
for (let x of xList) {
    console.log("f(" + x + ") = " + splain(x, xList.length, xList, fxList));
    console.log("Inaccuracy = " + inaccuracy(x + .1, xList.length, xList, fxList, splain(x, xList.length, xList, fxList)));
}


function laGrange(x, n, xArr, fxArr) {
    let ln = 0.;
    for (let i = 0; i < n; i++) {
        let l = 1.;
        for (let j = 0; j < n; j++) {
            if (i != j) {
                l *= (x - xArr[j]) / (xArr[i] - xArr[j]);
            }
        }
        ln += fxArr[i] * l;
    }

    return ln;
}

function eitken(x, n, xArr, fxArr) {
    let P = [];
    for (let i = 0; i < n; i++) P[i] = fxArr[i];
    for (let j = 0; j < n - 1; j++) {
        for (let i = j + 1; i < n; i++) {
            P[i] = ((x - xArr[j]) * P[i] - (x - xArr[i]) * P[j]) / (xArr[i] - xArr[j]);
        }
    }
    return P[P.length - 1];
}

function splain(x, n, xArr, fxArr) {
    let Y = 0.;
    for (let i = 0; i < n; i++) {
        if (x < xArr[i] || (x == xArr[i] && i != 0)) {
            let a = 1.0 * (fxArr[i] - fxArr[i - 1]) / (xArr[i] - xArr[i - 1]);
            let b = fxArr[i - 1] - a * xArr[i - 1];
            Y = a * x + b;
            break;
        }
    }
    return Y;
}

function inaccuracy(x, n, xArr, fxArr, F) {
    let w = 1;
    for (let i = 0; i < n; i++) {
        w = w * (x - xArr[i]);
    }
    let R = F / w;
    let xNew = [];
    xNew.push(x);
    for (let i = 0; i < n; i++) {
        xNew.push(String.valueOf(xArr[i]));
    }
    for (let i = 1; i < xNew.length; i++) {
        let v = 1;
        for (let j = 0; j < xNew.length; j++) {
            if (j != i) {
                v = v * (xNew[i] - xNew[j]);
            }
        }
        R = R + (fxArr[i - 1] / v);
    }
    return Math.abs(w * R);
}
