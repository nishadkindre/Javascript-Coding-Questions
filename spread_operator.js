let a = [1, 2, 3, 4];
b = [...a];

let c = { a: 1, b: 2, c: 3 };
let d = { ...c };

console.log(b);
console.log(a === b);

console.log(d);
console.log(c === d);

// with spread operator we can created deep copies of arrays and objects upto depth of 1
