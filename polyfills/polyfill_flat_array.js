// Dont use arrow function as it cannot bind "this" value inside function
function flatten(depth = 1) {
  let newArr = [];

  this.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      newArr.push(...item.flatten(depth - 1));
    } else newArr.push(item);
  });

  return newArr;
}

Array.prototype.flatten = flatten;

let input = [
  1,
  [2],
  [3],
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11,
  12,
  13,
  [14, [[[[[15, [16]]]]]]],
  17,
  18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]],
];

console.log(input.flatten(Infinity));
