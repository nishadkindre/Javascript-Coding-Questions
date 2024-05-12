/*
Array.map((num, i, array) => {})
*/
// Map returns each value and modifies it according to the callback
// dont use arrow function

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

Array.prototype.myMap2 = function (cb) {
  let newArr = [];
  this.forEach((value, index, array) => {
    newArr.push(cb(value, index, array));
  });
  return newArr;
};

let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.myMap2((num) => num ** 2);
console.log(newArr);
