function removeCapitalLetters(str) {
  return str
    .split("")
    .filter((char) => char === char.toLowerCase())
    .join("");
}

// With Regex

function removeCapitalLetters2(str) {
  return str.replace(/[a-z]/g, "");
}

let str = "NishadK1020indre";
console.log(removeCapitalLetters2(str));
