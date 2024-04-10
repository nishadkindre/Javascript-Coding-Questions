console.log("Start");

function callbackFunction(username, cb) {
  setTimeout(() => cb(`Hello ${username}`), 1000);
}

function callbackFunction2(lastName, cb) {
  setTimeout(() => cb(`Hello ${lastName}`), 500);
}

function callbackFunction3(location, cb) {
  setTimeout(() => cb(`I am from ${location}`), 5);
}

callbackFunction("Nishad", function (msg) {
  console.log(msg);
  callbackFunction2("Kindre", function (msg) {
    console.log(msg);
    callbackFunction3("Pune", function (msg) {
      // event hough this callback takes least time it is executed only after it s parent functions
      console.log(msg);
    });
  });
});

console.log("End");
