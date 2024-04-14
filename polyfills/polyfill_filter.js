/*
Array.filter((num, i , arr) => {condition})
*/

// Filter returns each value for which the callback return true
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]); // run callback for each array item
  }
  return temp;
};

let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.myFilter((num) => num % 2 === 0);
console.log(newArr);
