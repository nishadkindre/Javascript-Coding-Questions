function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}

console.log(hasUniqueChars("QWERTY"));
