console.log(a); // undefined
var a = 4;
console.log(a); // 4

greet();
function greet() {
  console.log(a); // undefined
  var a = 99;
  console.log(a); // 99
  console.log("greet"); // greet
}

/*
var variables and function statements are hoisted
let, const variables and function expressions are hoisted but are not initialised with a undefined value
*/
