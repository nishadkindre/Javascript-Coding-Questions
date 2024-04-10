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

// Using async await
// Use try catch for error handling

const result = async () => {
  try {
    const message1 = await promiseFunction1("Nishad");
    const message2 = await promiseFunction2("Kindre");
    const message3 = await promiseFunction3("Pune");
    console.log({ message1, message2, message3 });
  } catch (error) {
    console.error(error); // return the error message from the promise
  }
};
result();

console.log("End");
