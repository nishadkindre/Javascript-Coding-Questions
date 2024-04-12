console.log("Start");

const promise1 = new Promise((resolve, reject) => {
  console.log("4"); // will log even without consuming the promise, it is synchronous operation
  resolve("5");
  console.log("6");
});

const fn = () =>
  new Promise((resolve, reject) => {
    console.log("1"); // will log only when function is invoked
    resolve("2");
    console.log("3");
  });

console.log("Middle");

fn().then((res) => {
  // if no resolve logic given in promise it wont enter this chain
  console.log(res);
});

console.log("End");
