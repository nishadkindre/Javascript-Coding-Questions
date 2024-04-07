// Anagram are two words containing same letters

var firstWord = "Mary";
var secondWord = "Army";

console.log(isAnagram(firstWord, secondWord));

function isAnagram(first, second) {
  let a = first.toLowerCase();
  let b = second.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}
