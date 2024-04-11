function removeIndex(index) {
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
}

function removeItem(item) {
  let index = this.indexOf(item);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
}

Array.prototype.removeIndex = removeIndex;
Array.prototype.removeItem = removeItem;

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.removeIndex(3); // remove index 3 item
arr.removeItem(3); // remove item of value 3
console.log(arr);
