// An Armstrong Number is an n-digit number that is the sum of the nth power of its all digits.

function isArmstrongNumber(num) {
  if (num <= 9) return true;
  let numList = num.toString().split("");
  let sum = numList.reduce(
    (acc, curr) => acc + parseInt(curr) ** numList.length,
    0
  );

  return sum === num;
}

function findArmstrongNumbersTill(num) {
  let armstrongList = [];
  for (let i = 1; i <= num; i++) {
    if (isArmstrongNumber(i)) armstrongList.push(i);
  }
  return armstrongList;
}

console.log(isArmstrongNumber(9474));
console.log(findArmstrongNumbersTill(100000));
