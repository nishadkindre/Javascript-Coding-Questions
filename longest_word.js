function longestWord(str) {
  return str
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}

console.log(longestWord("My Name is Nishad Gajanan Kindre."));
