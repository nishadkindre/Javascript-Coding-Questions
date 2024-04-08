/* 
The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two integers is the largest integer
that can exactly divide both integers (without a remainder).
*/

function findHCF(num1, num2) {
  let hcf;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      hcf = i; // every factor will get overwritten till last factor remains
    }
  }
  return hcf;
}

console.log(findHCF(90, 120));
