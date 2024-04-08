function intersection(arr1, arr2) {
  let setA = new Set(arr1);
  let setB = new Set(arr2);

  let intersectionResult = [];

  for (let item of setB) {
    if (setA.has(item)) {
      intersectionResult.push(item);
    }
  }
  return intersectionResult;
}

let arr1 = [1, 3, 6, 2, 8, 9];
let arr2 = [1, 3, 6, 93, 5];

console.log(intersection(arr1, arr2));
