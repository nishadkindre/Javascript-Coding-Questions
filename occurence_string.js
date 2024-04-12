function findOcurrences(word, str) {
  let count = 0;
  for (let item of str.split(" ")) {
    word.includes(item) && count++;
  }
  return count;
}

function findOcurrences2(word, str) {
  let regex = new RegExp(word, "g"); // create a new reg ex
  return str.match(regex)?.length;
}

let word = "this";
let text = "this This this This this this this.";
console.log(findOcurrences2(word, text));
