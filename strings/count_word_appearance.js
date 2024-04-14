function countWordAppearance(text, word) {
  let count = 0;
  for (let char of text.split(/\s+/)) {
    // split by any number of spaces
    if (char === word) {
      count++;
    }
  }
  return count;
}

let text =
  "The quick brown fox jumps over the lazy dog. The dog barks, but the fox ignores it.";
let word = "The";

const wordCount = countWordAppearance(text, word);
console.log(wordCount);
