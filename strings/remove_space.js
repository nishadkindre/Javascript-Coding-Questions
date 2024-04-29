function removeSpace(str) {
  return str.replace(/\s+/g, "");
}

function removeSpace2(str) {
  return str.split(" ").join("");
}

console.log(removeSpace2("Nishad Gajanan Kindre"));
