function removeItemFromArray(arr, item) {
  let newList = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== item) newList.push(arr[i]);
  }
  return newList;
}

function removeItemFromArray2(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let item = 5;

console.log(removeItemFromArray2(arr, item));
console.log(arr);
