// Dynamic properties
// objects can only take strings as keys any other value is then converted into string

let property = "firstName";
let name = "nishad";

const user = {
  [property]: name, // any new objects created will also point towards same key unless changed
};
// [] is used to provide dynamic props

let b = { key: "a" };
user[b] = 101;
console.log(user);

// Stringify a object
// only stringified objects can be stored in localstorage
console.log(JSON.stringify(user));

let newObj = JSON.parse(JSON.stringify(user));
newObj.firstName = "John";
console.log(newObj);

// By Default all object keys are strings under the hood even we dont type, it doesnt work same for Set

const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

console.log(
  obj.hasOwnProperty("1"),
  obj.hasOwnProperty(1),
  set.has("1"),
  set.has(1)
);

// any object given as key is turned into "[object Object]" as objects only accept strings as keys
{
  const a = {};
  const b = { key: "b" };
  const c = { key: "c" };

  a[b] = 123; // "[object Object]": 123
  a[c] = 456; // "[object Object]": 456 , shadows the key

  console.log(a[b]);
}

//
{
  let a = 3;
  ++a;
  console.log(a);
  let b = {
    a: 9,
    b: ++a, // will reference a in
  };
  console.log(a + b.a + ++b.b); // 5 + 9 + 6
}
