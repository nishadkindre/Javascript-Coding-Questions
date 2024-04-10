// Guess the output

function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data); // Success
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat"; // throws Error
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data); // Defeat
  })
  .catch(function (error) {
    console.log(error);
    return job(false);
  })
  .then(function (data) {
    console.log(data); // Success
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
    return "Error Caught";
  })
  .then(function (data) {
    console.log(data); // Success
    return new Error("test");
  })
  .then(function (data) {
    console.log("Success: ", data.message);
  })
  .catch(function (data) {
    console.log("Error: ", data.message);
  });

/*
Success

*/
