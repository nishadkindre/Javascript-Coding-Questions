function reverseArray(arr) {
  let newArr = [];
  for (const item of arr) {
    newArr.unshift(item);
  }
  return newArr;
}

function reverseArray2(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArray2(arr));
