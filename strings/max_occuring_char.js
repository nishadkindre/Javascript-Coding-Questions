function maxChar(str) {
  let charMap = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i of str.split(" ").join("")) {
    charMap[i] = (charMap[i] | 0) + 1;
    if (charMap[i] > maxCount) {
      maxChar = i;
      maxCount = charMap[i];
    }
  }
  console.log(charMap);

  return `Char: ${maxChar}; Count: ${maxCount}`;
}
let str = "hello world";
console.log(maxChar(str));
