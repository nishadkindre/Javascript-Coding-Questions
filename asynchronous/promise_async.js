// This function simulates aynchronous behaviour
function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = "Result of asyncOperation1";
      resolve(result);
    }, 1000);
  });
}

function asyncOperation2(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = `${input} => Result of asyncOperation2`;
      resolve(result);
    }, 1000);
  });
}

function asyncOperation3(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = `${input} => Result of asyncOperation3`;
      resolve(result);
    }, 1000);
  });
}

// Using promises
asyncOperation1()
  .then(asyncOperation2)
  .then(asyncOperation3)
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

async function runAsyncOperations() {
  try {
    const result1 = await asyncOperation1();
    const result2 = await asyncOperation2(result1);
    const result3 = await asyncOperation3(result2);
    console.log("Result:", result3);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Using async/await
runAsyncOperations();
