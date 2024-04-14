/*
Array.reduce((acc, curr, i, array) => {}, initialValue)
*/

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    // provide first item of array as avalue to accumulator in case no initalValue provided
  }
  return accumulator;
};

let arr = [1, 2, 3];
let newArr = arr.myReduce((acc, curr) => acc + curr);
console.log(newArr);
