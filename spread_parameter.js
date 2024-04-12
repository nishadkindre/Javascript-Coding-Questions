function add(b, c, ...args) {
  console.log(typeof args); // object
  let a = 1;
  for (let i of args) {
    a += i;
  }
  return a;
}

console.log(add(1, 2, 3, 4, 5));
