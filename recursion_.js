function sum(num) {
  if (num > 0) return num + sum(num - 1);
  return num;
}

console.log(sum(4));
