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

function promiseRecursion(promiseArr) {
  if (promiseArr.length === 0) return;

  let promise = promiseArr.shift(); // first promise

  promise.then((res) => console.log(res)).catch((err) => console.error(err));

  promiseRecursion(promiseArr); // recall with updated array
}

promiseRecursion([
  promiseFunction1("Nishad"),
  promiseFunction2("Kindre"),
  promiseFunction3("Pune"),
]);
// Will execute promises in the order of least time taken
