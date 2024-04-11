function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursive(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialRecursive(num - 1);
  }
}

console.log(factorial(4));
console.log(factorialRecursive(4));
