let a = {
  name: "Nishad",
  surname: "Kindre",
};

function changeObj(obj, val) {
  obj = val;
  return obj;
}

// newObj = changeObj(a, { name: "John", surname: "Doe" });
console.log(changeObj(a, { name: "John", surname: "Doe" }));
console.log(a);
