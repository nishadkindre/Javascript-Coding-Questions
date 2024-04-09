// Push items to an array with apply

let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c"];

arr1.push.apply(arr1, arr2);
// arr1.push(...arr2); // or can use spread operator
console.log(arr1);
