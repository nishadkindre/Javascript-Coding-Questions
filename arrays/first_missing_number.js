// missing odd number

let arr = [5, 7, 9, 11, 15, 17];
let n = 2;

function firstMissingNumber(arr, n) {
  for (let i = 0; i <= arr.length; i++) {
    let current = arr[i];
    let next = current + n;
    if (arr[i + 1] !== next) {
      return next;
    }
  }
}
let fn = firstMissingNumber(arr, n);
console.log(fn);
