const myPromise = new Promise((res, rej) => {
  res("Hello");
});

const abc = async () => {
  console.log("Start");
  const msg = await myPromise; // halts/ suspends further function execution
  console.log("Using Await: ", msg);
  myPromise.then((msg) => {
    console.log(msg);
  }); // doesnt halt executions of other code
  console.log("End");
};
abc();
