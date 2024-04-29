function nonRepeatChar(str) {
  let char = "";
  for (let i of str) {
    if (str.indexOf(i) === str.lastIndexOf(i)) {
      char = i;
      break;
    }
  }
  return char;
}
console.log(nonRepeatChar("abcabd"));
