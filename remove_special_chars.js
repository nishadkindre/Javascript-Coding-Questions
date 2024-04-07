// With For Loop
function removeSpecialChars(str) {
  const special = "~!@#$%^&*(){}";
  const newStr = [];
  for (let item of str.split("")) {
    if (!special.includes(item)) {
      newStr.push(item);
    }
  }
  return newStr.join("");
}

// With filter method
function removeSpecialChar(str) {
  const special = "~!@#$%^&*(){}";
  const newStr = str
    .split("")
    .filter((item) => !special.includes(item))
    .join("");
  return newStr;
}

// With regex method
function removeSpecialChar(str) {
  return str.replace(/[^\w\s]/gi, "");
}

// without using split and join method
function removeSpecialChar2(str) {
  const special = "~!@#$%^&*(){}";
  let newStr = "";
  for (let item of str) {
    if (!special.includes(item)) {
      newStr += item;
    }
  }
  return newStr;
}

const str = "TRY%^GVYI^RGUHB*&^*%#$$@#$";
console.log(removeSpecialChar(str));
