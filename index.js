console.log(customCosinus(2.2));

function customCosinus(x) {
    x = Math.pow(x, 2);
    let cos = 0.;
    for (let i = 0; i < 100; i++) {
        cos += (Math.pow(-1, i)*(Math.pow(x, 2*i)))/factorial(2*i);
    }
    return cos;
}

function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res = res*i;
    }
    return res;
}
