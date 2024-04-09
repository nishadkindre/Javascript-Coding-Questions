// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
}
// a(); // returns 10

// solution with var and closure
function b() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(() => console.log(i), i * 1000);
    }
    inner(i);
  }
}
b();

/*
This is due to:
  var has function level scope, same variable is used for all iterations
  by the time setTimeout executes its callbacks, the value is already 3

  solution is to use let instead of var
  since for each iteration a new block is created with let

  or can use closure
*/
