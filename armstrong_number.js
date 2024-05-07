// An Armstrong Number is an n-digit number that is the sum of the nth power of its all digits.
// Eg: 153, 370, 371, 407
// such that 153 = 1**3 + 5**3 + 3**3

function isArmstrongNumber(num) {
  if (num <= 9) return true;
  let numList = num.toString().split("");
  let sum = numList.reduce(
    (acc, curr) => acc + parseInt(curr) ** numList.length,
    0
  );

  return sum === num;
}

function isArmstrongNumber2(num){
    if (num <= 9) return true;
    let str = num.toString().split("");
    let result = 0;
    str.forEach((num) => {
        result += parseInt(num)**(str.length);
    })
    return result === num;
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
