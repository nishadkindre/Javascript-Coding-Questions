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
