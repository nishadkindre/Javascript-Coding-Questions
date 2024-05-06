/*
Array.map((num, i, array) => {})
*/
// Map returns each value and modifies it according to the callback
Array.prototype.myMap = function (cb) {
  // dont use arrow function
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.myMap((num) => num ** 2);
console.log(newArr);
