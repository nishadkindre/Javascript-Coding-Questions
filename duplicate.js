var arr = [1, 2, 3, 4, 1, 22, 3, 2];
console.log(removeDuplicate(arr));

function removeDuplicate(arr) {
  newArray = [...new Set(arr)];
  return newArray;
}
