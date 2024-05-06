// array destructuring

const [e, ...f] = [1, 2, 3, 4, 5];
console.log(f[2]); // 4

// destructuring specific index of array

const { 3: g } = [1, 2, 3, 4, 5];
console.log(g); // 4
