function sumOfArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 1);
}

console.log(sumOfArray([1, 2, 3, 4, 5]));
