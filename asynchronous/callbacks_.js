console.log("Start");

// Example of asynchronous code
function importantFunction(username) {
  setTimeout(() => {
    return "Hello " + username;
  }, 1000);
}
const message = importantFunction("Nishad"); // doesnt return instantly
// console.log(message); // undefined

// With callback
function callbackFunction(username, cb) {
  setTimeout(() => cb(`Hello ${username}`), 1000);
}

const message1 = callbackFunction("Nishad", function (msg) {
  console.log(msg);
});
// console.log(message1);

console.log("End");
