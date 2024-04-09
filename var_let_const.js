// Variable Shadowing

function test() {
  var a = 10;
  let b = 50;

  if (true) {
    let a = 111;
    // var b = 555; // illegal shadowing
    console.log(a);
    console.log(b);
  }
}
// test();

// We can shadow var with let but cannot shadow let with var

/*
Variables declared with:
var can be redeclared and reinitialised
let cannot be redeclared but reinitialised
const can neither be redeclared nor reinitialised
*/

(function () {
  var name = "nishad"; // restricts it from being accessed outside scope
})();
// {
//   var name = "Nishad"; // can access outside scope
// }
console.log(name);
