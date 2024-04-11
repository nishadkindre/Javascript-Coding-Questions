/*
Slice method: returns a portion of an array
              doesnt mutate the array
              creates a ashallow copy of the array
              syntax: array.slice(optional first parameter, optional second parameter)
              returns the sliced array from start index to last index before given index
*/

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.slice(1, 5)); // array from 1 to 4 index
console.log(arr.slice(4)); // array starting for 4 index
console.log(arr); // as it is

/*
Splice method: changes the content of an array
               returns updated version of array
               used to add/remove items of an array
               Syntax: splice(start, optional delete count, optional items to add)

*/

arr.splice(2, 1, "two", "three"); // add these starting at 2 index by replacing the item at index
arr.splice(4, 0, "five"); // add this without deleting item at index
arr.splice(1, 2); // second argument is the number of elements to delete after start index
console.log(arr); // changed
