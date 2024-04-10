/*
When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called “empty slots”. 
These actually have the value of undefined
*/

let a = [1, 2, 3];
a[10] = 10;
console.log(a);

const arrTest = [10, 20, 30, 40, 50][(1, 3)]; // the last element from second array is used to get value from first array
console.log(arrTest); // return item at index 3
