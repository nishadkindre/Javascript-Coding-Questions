function reverseString(str) {
  let reversed = str.split("").reverse().join("");
  return reversed;
}

function reverseString2(str) {
  let newStr = [];
  for (let i of str) {
    newStr.unshift(i);
  }
  return newStr.join("");
}

console.log(reverseString2("Nishad"));
