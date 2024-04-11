// Program to remove word/ text from a string

function removeWord(str, word) {
  return str.replace(word, "");
}

function removeWord2(str, word) {
  return str.split(word).join("");
}

let str = "The quick brown fox jumps over the lazy dog.";
let word = "lazy";

let newStr = removeWord2(str, word);
console.log(newStr);
