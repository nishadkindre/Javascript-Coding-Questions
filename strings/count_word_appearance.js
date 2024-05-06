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

function countWordAppearance2(text, word) {
  let arr = text.split(/s+/);
  return arr.reduce((acc, curr) => {
    if (curr === word) {
      acc += 1;
    }
    return acc;
  }, 0);
}

let text =
  "The quick brown fox jumps over the lazy dog. The dog barks, but the fox ignores it.";
let word = "The";

const wordCount = countWordAppearance2(text, word);
console.log(wordCount);
