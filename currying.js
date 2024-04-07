// Original function with multiple arguments
function add(a, b, c) {
  return a + b + c;
}

// Curried version of the add function
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Usage of the curried function
const curriedAddition = curriedAdd(2)(3)(4);
console.log(curriedAddition); // Output: 9
