//Method bisection
let fx = 0., x = 0., e = 0.001;
let a = -1., b = 2.;
let amount = 0;

for (; ;) {
    x = (a + b) / 2.;
    fx = myFunc(x);
    amount++;
    if (fx == 0 || fx < e || (b - a) < 2 * e) {
        break;
    } else {
        if (fx > 0) {
            b = x;
        } else {
            a = x;
        }
    }

}

console.log("Method bisection");
console.log("x = " + x);
console.log("fx = " + fx);
console.log("amount = " + amount);

//Method chord
a = -1.;
b = 2.;
amount = 0;
let X = [];
X[0] = (a + b) / 2;
X[1] = X[0] - (myFunc(X[0]) * (b - X[0])) / (myFunc(b) - myFunc(X[0]));
while (Math.abs(X[amount + 1] - X[amount]) > e) {
    amount++;
    X[amount + 1] = X[amount] - (myFunc(X[amount]) * (b - X[amount])) / (myFunc(b) - myFunc(X[amount]));
}

console.log("\nMethod chord");
console.log("x = " + X[amount + 1]);
console.log("Fx = " + myFunc(X[amount + 1]));
console.log("Amount = " + amount + 1);

function myFunc(x) {
    return 2 * Math.pow(Math.cos(x), 4) - 4 * Math.cos(x);
}
