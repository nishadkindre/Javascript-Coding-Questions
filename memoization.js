/*
Memoization: 
    it is the process of storing the results of a calculation in cache.
    so that it can avoid re-performing of the function if the inputs are not changed.
    we store the value in cache so it need not be recalculated.
*/

function memoizeFunction(fn) {
  const cache = new Map(); // store the results of functions

  // this is a decision making function which returns either a new function result or cached value
  // where we pass arguments to child function

  return function (...args) {
    // access the args as key in cache
    const key = args.join("_");
    if (cache.has(key)) {
      // console.log("Cache Value");
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}

const add = (a, b) => a + b;

const memoizeAdd = memoizeFunction(add);
const memoizeSub = memoizeFunction((a, b) => a - b);

console.log("ADD: ", memoizeAdd(1, 2));
console.log("ADD: ", memoizeAdd(2, 1));
console.log("ADD: ", memoizeAdd(3, 4));

console.log("SUB: ", memoizeSub(1, 2));
console.log("SUB: ", memoizeSub(3, 4));
console.log("SUB: ", memoizeSub(1, 2));

console.log("ADD: ", memoizeAdd(1, 2));
console.log("SUB: ", memoizeSub(1, 2));
