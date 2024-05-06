// PROBLEM: For a sorted array of said pattern, return all the missing numbers

function returnAllMissingNumbers(arr, num) {
  const newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== num) {
      newArr.push(arr[i] + num);
    }
  }
  return newArr;
}

const arr = [1, 2, 3, 5, 6, 8, 9, 11, 13, 15, 17];
const num = 1;

console.log(returnAllMissingNumbers(arr, num));
