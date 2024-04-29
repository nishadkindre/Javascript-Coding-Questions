var name = "nishda";

var globalObj = { name: "ravan" };

const obj = {
  name: "ram",
  sayHello: function () {
    // Regular function expression
    console.log("Hello, " + this.name + ", regular function!");
  },
  sayHelloArrow: () => {
    // Arrow function
    console.log("Hello, " + this.name + ", arrow function!");
  },
};

obj.sayHello(); // Output: Hello, Alice! (this refers to obj)
obj.sayHelloArrow(); // Output: Hello, undefined!

{
  // arrow functions are expressions which are hoisted as undefined
  // while reular functions are hoisted with its definition

  console.log(say); // undefined if var say
  sayName();
  say(); // error

  var say = () => {
    console.log("Hello");
  };
  // let say, const say --> also wont work
  function sayName() {
    console.log("World");
  }
}
