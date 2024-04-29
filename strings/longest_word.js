function longestWord(str) {
  return str
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}

function longestWord2(str) {
  let longest = "";
  for (const word of str.split(" ")) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

let str = "My Name is Nishad Gajanan Kindre.";
console.log(longestWord2(str));
