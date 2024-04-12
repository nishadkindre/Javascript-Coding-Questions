let obj = {
  name: "Nishad",
  lastName: "Kindre",
};

let copy1 = obj; // shallow copy
let copy2 = Object.assign({}, obj);
let copy3 = { ...obj };
let copy4 = JSON.parse(JSON.stringify(obj));

copy1.name = "Appa";
copy2.name = "Anna";

console.log("Actual:", obj);
console.log("Copy1: ", copy1);
console.log("Copy2: ", copy2);
console.log("Copy3: ", copy3);
console.log("Copy4: ", copy4);
