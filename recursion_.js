function sum(num) {
  if (num > 0) return num + sum(num - 1);
  return num;
}

// console.log(sum(5));

// multiply all items of an array and return the result
function multiplyArray(arr) {
  console.log(arr);
  if (arr.length < 1) {
    return 1; // base case or exit condition
  }
  return arr[arr.length - 1] * multiplyArray(arr.slice(0, arr.length - 1));
}

let arr = [1, 2, 3, 4, 5];
// console.log(multiplyArray(arr));

// Create an array with range of numbers

function rangeOfNumbers(start, end) {
  let arr = [];
  if (end < start) {
    return [];
  }
  return arr.push(...[start, rangeOfNumbers(start + 1)]);
}

console.log(rangeOfNumbers(1, 5));
