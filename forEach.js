let a = [1, 2, 3, 4, 5];
console.log("a before: ", a);

// a.forEach((num, index, array) => (array[index] = num * 2));
a = a.map((i) => i * 2);
console.log("a after: ", a);
