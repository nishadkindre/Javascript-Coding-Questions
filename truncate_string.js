function truncateString(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

let str =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi harum dignissimos voluptas magnam ipsam officiis!";
let len = 20;
console.log(truncateString(str, len));
