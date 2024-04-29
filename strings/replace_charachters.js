function replaceChars(str) {
  return str.replace(/[a-z]/g, (char) => char.toUpperCase());
}

const txt = "Nishad Gajanan Kindre";
console.log(txt);
console.log(replaceChars(txt));
