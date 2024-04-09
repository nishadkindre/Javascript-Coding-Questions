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

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "subtract") return a - b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else return "Invalid Operation";
    };
  };
}

// Usage of the curried function
// const curriedAddition = curriedAdd(2)(3)(4);
// console.log(curriedAddition); // Output: 9

let op = evaluate("sum");
// This way we initialise our funuction once and not providing it mutiply again
// we can use op multiple times
console.log(op(2)(3));

// DOM manipulation with currying

function updateElement(id) {
  return function (text) {
    document.querySelector("#" + id).textContent = text;
  };
}

const updateHeader = updateElement("heading");
// updateHeader("Currying...")
