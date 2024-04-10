console.log("Start");

function promiseFunction1(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Hello ${username}`), 1000);
  });
}

function promiseFunction2(lastName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Hello ${lastName}`), 10);
  });
}

function promiseFunction3(location) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`I am from ${location}`), 100);
  });
}

//! This is an example of Promise Hell
// promiseFunction1("Nishad").then((msg) => {
//   console.log(msg);
//   promiseFunction2("Kindre").then((msg) => {
//     console.log(msg);
//     promiseFunction3("Pune").then((msg) => {
//       console.log(msg);
//     });
//   });
// });

//! Soltion for this is Promise Chaining
// promiseFunction1("Nishad")
//   .then((res) => {
//     console.log(res);
//     return promiseFunction2("Kindre"); // return the Promise Object
//   })
//   .then((res) => {
//     console.log(res);
//     return promiseFunction3("Pune"); // return the Promise Object
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? Promise Combinators

//! 1. Promise.all()
//! this works only when all promises are resolved

// returns resolved output in an array
Promise.all([
  promiseFunction1("Nishad"),
  promiseFunction2("Kindre"),
  promiseFunction3("Pune"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error("Promise Rejected due to message: ", err));

//! 2. Promise.race() - executes the promise that gets resolved first

Promise.race([
  promiseFunction1("Nishad"),
  promiseFunction2("Kindre"),
  promiseFunction3("Pune"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error("Promise Rejected due to message: ", err));

//! 3. Promise.allSettled([]) - returns the rejected as well as resolved promises
//! 4. Promise.any([]) - returns the first resolved promise

console.log("End");
