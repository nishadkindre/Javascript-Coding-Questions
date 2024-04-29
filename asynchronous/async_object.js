/*
throw return rejected Promise
return means resolved Promise
*/

async function foo() {
  // return; // returns Promise fulfilled undefined
  // return new Promise(() => {}); // returns Promise pending

  // throw "Hello";
  return "Hello World!";
}

const ab = foo();
// console.log(ab);

// let nb = foo().then((msg) => console.log(msg));

// ab.then(() => {
//   throw "Hello";
// }).catch((msg) => console.log(msg));

// ab.catch((err) => console.log(err));

async function bear() {
  try {
    const result = await foo(); // returns the resolved value by promise
    console.log(result);
    // console.log("Hi");
    // console.log("Hello");
  } catch (error) {
    console.log(error);
  }
}

// const res2 = bear();
// console.log(res2);
bear();
