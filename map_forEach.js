// What is difference between map and forEach
/*
Difference 1: map returns a new array while forEach doesnt
Difference 2: map can be used chain other methods such as filter, reduce
              sice forEach doesnt return new array we cant chain methods
*/

let arr = [1, 2, 3, 4, 5];

let mapResult = arr.map((i) => i + 2);

let forEachResult = arr.forEach((i) => i + 2); // foraEach does not return a new array

console.log(mapResult, forEachResult, arr);
