/*
The Least Common Multiple (LCM) of two integers is the smallest positive integer 
that is perfectly divisible by both integers.
*/

function findLCM(num1, num2) {
  if (!num1 || !num2) {
    return 0;
  }

  let lcm;
  for (let i = 1; i <= num1 * num2; i++) {
    if (i % num1 == 0 && i % num2 == 0) {
      lcm = i;
      break;
    }
  }

  return lcm;
}

console.log(findLCM(12, 53));
