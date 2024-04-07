function removeNumberFromString(str) {
  return str.replace(/[0-9]/g, "");
}

console.log(removeNumberFromString("MH 12 LV 6968"));
