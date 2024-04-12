function sum(num) {
  if (num > 0) return num + sum(num - 1);
  return num;
}

console.log(sum(5));
// 5 + 4 + 3 + 2 + 1  = 15
