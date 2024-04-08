function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function primeNumsTill(n) {
  let primeNums = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primeNums.push(i);
  }
  return primeNums.toString();
}

console.log(isPrime(13));
console.log(primeNumsTill(130));
