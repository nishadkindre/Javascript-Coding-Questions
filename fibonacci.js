// Fibonacci Sequence is the sequence in which a number is the sum of its preceeding two numbers

// recursion
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
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
const nTerms = 5;

if (nTerms <= 0) {
  console.log("Enter a positive integer.");
} else {
  for (let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
  }
}
