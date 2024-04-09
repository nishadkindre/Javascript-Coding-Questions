// What does delete do where can it be used?

let arr = [1, 2, 3, 4, 5];
delete arr[3];

console.log(arr.length); // 5
console.log(arr);

// Delete sets the item to undefined rather than completely removing
// delete can be used only with array and object
