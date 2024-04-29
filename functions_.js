function abc() {
  console.log(" hello");
  return "Hi"; // has no effect -> a will be empty object
  //   return { name: "Nishad" }; // has effect
  //   return [1, 2, 3]; // has effect
  //   return () => {}; // returns anonymous function
}

let a = new abc();
// If abc function is returning any non-primitive datatype it will accept that and assign it as its value

// a.name = "John";
console.log(a);
console.log(typeof a);

{
  function func() {
    const a = (b = c = 1);
  }
  func();
  console.log(typeof a, typeof b, typeof c);
}
