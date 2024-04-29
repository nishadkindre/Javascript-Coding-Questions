// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

function a() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
    setTimeout(() => console.log(i), 1000);
    // no delay between each 3, but 1 second delay at beginning
  }
}
a(); // returns 333 right away

// solution with var and closure
function b() {
  for (var i = 1; i <= 3; i++) {
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

/*
  Since setTimeout is asynchronouns operation, it gets executed after loop completes 
  as loop gets executed in microseconds
  loop takes minimal microseconds to created these setTimeouts
  5 setTimeouts are created, each with 1 second delay
  All are executed right away
*/
