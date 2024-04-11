function removeItemFromArray(arr, item) {
  let newList = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== item) newList.push(arr[i]);
  }
  return newList;
}

// Mutate actual array
function removeItemFromArray2(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function removeItemFromArray3(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1) {
    delete arr[index]; // deletes the item but doesnt remove it the item is set to undefined
  }
  return arr;
}

// filter method
function remove(arr, item) {
  return arr.filter((val) => val !== item);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let item = 3;

// console.log(remove(arr, item));
// console.log(removeItemFromArray(arr, item));
console.log(removeItemFromArray2(arr, item)); // using splice
// console.log(removeItemFromArray3(arr, item)); // set item to undefined
console.log(arr);
