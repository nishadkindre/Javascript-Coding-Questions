// Fibonacci Sequence is the sequence in which a number is the sum of its preceeding two numbers

// recursion
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// regular
function fibSequence(n) {
  fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  //   console.log(fib[n]);
  return fib;
}

console.log(fibSequence(5));
