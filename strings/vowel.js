const str = "Hello My name is Nishad Gajanan Kindre";
const vowels = ["a", "e", "i", "o", "u"];

function countVowels(data) {
  let count = 0;
  data
    .toLowerCase()
    .split("")
    .forEach((item) => {
      if (vowels.includes(item)) {
        count++;
      }
    });
  return count;
}

function countVowels_(data) {
  let count = 0;
  for (item of data) {
    if (vowels.includes(item.toLowerCase())) {
      count++;
    }
  }
  //   for (item in data) {
  //     if (vowels.includes(data[item].toLowerCase())) {
  //       count++;
  //     }
  //   }
  return count;
}

function countVowels2(str) {
  let count = str.match(/[aeiou]/gi).length; // for global case & insensitive matching
  return count;
}

const numOfVowels = countVowels2(str);
console.log(numOfVowels);
// console.log(typeof countVowels.prototype);
// console.log(countVowels.name);
