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

// since setTimeout is asynchronous operation by the time it executes the var is hoisted and then also gets initialised with its value
function x() {
  setTimeout(() => {
    console.log(i);
  }, 1000);
  function inner() {
    console.log(i);
  }
  inner();
  var i = 10;
}
x();

{
  var rate = 10;
  function getRate() {
    console.log(rate); // log 6 since we declare var rate = 6
    // var rate = undefined --> hoisted
    if (rate == undefined) {
      // let rate = 6; // will hoist but not initialise as undefined
      var rate = 6;
      return rate;
    } else {
      return 10;
    }
  }
  console.log("Rate is: ", getRate());
}
