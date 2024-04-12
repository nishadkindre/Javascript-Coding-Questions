function removeNumberFromString(str) {
  return str.replace(/\d/g, "");
  // return str.replace(/[0-9]/g, ""); OR
}

console.log(removeNumberFromString("MH 12 LV 6968"));
