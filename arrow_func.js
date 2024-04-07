var name = "nishda";

const obj = {
  name: "Alice",
  sayHello: function () {
    // Regular function expression
    console.log("Hello, " + this.name + "!");
  },
  sayHelloArrow: () => {
    // Arrow function
    console.log("Hello, " + this.name + "!");
  },
};

obj.sayHello(); // Output: Hello, Alice! (this refers to obj)
obj.sayHelloArrow(); // Output: Hello, undefined!
