(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 2000);
  setTimeout(
    (function () {
      console.log(3);
    })(),
    3000
  );
  console.log(4);
})();

// Output: 1, 3, error: setTimeout must have first argument as callback

// run in browser
function example() {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      (function () {
        console.log(i);
      })(),
      1000 + i
    );
  }
}
example();
/*
In nodejs throws error after logging 0: TypeError - callback argument must be of type function
In browser return 0, 1, 2
*/

function example2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      (function (k) {
        return function () {
          console.log(k);
        };
      })(i),
      1000 * i
    );
  }
}
example2();
