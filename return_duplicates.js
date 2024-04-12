function removeSpecialChars(str) {
  return str
    .replace(/[.,~!@#$%^&*()_+<>:;]/g, "")
    .trim()
    .split(/\s+/gi);
}

function returnDuplicates(data) {
  let input = Array.isArray(data) ? data : removeSpecialChars(str);
  let duplicates = [];
  let unique = [];

  input.forEach((item) => {
    if (
      input.indexOf(item) !== input.lastIndexOf(item) &&
      !duplicates.includes(item)
    ) {
      duplicates.push(item);
    } else if (!duplicates.includes(item)) {
      unique.push(item);
    }
  });
  return { duplicates, unique };
}

let arr = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 10];
let str =
  "This, this and this also This then.,~!@#$%^&*()_+<>:; this and This so this or This, This.";
console.log(returnDuplicates(arr));
console.log(returnDuplicates(str));
