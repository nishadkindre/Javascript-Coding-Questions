function secondLargestNumber(arr) {
  return [...new Set(arr)].sort().reverse()[1];
}

console.log(secondLargestNumber([1, 4, 2, 7, 85, 55, 99]));
