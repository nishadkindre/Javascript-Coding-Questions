let arr = [[1], 2, [[3, [4]]], 5, 6];

// console.log("Array flat: ", arr.flat()); // this works for nested array with depth 1 but cannot include further
// console.log("Array flat with Infinity depth: ", arr.flat(Infinity)); // Infinity is the recursion depth

// Correct example using recursion
function flattenArray(arr) {
  let newArr = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArr.push(...flattenArray(item));
      // we push the item if its a array
      // we have destructured the recursive function as it returns the updated newArr
      console.log(newArr);
    } else {
      newArr.push(item);
    }
  });

  return newArr;
}
function flattenArray2(arr) {
  let flat = arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.concat(flattenArray2(curr));
    } else {
      acc.push(curr);
    }
    return acc; // important
  }, []);
  return flat;
}

console.log("Custom Array flat: ", flattenArray2(arr));

// Custom flat function with depth parameter
function customFlat(arr, depth = 1) {
  let flat = [];

  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      flat.push(...customFlat(ar, depth - 1));
    } else flat.push(ar);
  });

  return flat;
}

// With reduce:

function customFlat2(arr, depth = 1) {
  let flat = arr.reduce((acc, curr) => {
    if (Array.isArray(curr) && depth > 0) {
      acc.push(...customFlat2(curr, depth - 1)); // subtract the depth for each function call
    } else acc.push(curr);
    return acc;
  }, []);

  return flat;
}

console.log("Custom Array flat with depth: ", customFlat2(arr, Infinity));
