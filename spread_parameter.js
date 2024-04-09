function add(b, c, ...args) {
  let a = 1;
  for (let i of args) {
    a += i;
  }
  return a;
}

console.log(add(1, 2, 3, 4, 5));
