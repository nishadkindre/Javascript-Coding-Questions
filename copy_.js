let a = [1, 2, 3];
let b = a; // shallow copy
// let b = [...a]; // deep copy
console.log("a before", a);
console.log("b before", b);

b[1] = 222;

console.log("a after", a);
console.log("b after", b);
