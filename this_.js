// this points towards the execting/ parent object

let user = {
  name: "Nishad",
  age: 22,
  //   getDetails: () => {
  //     console.log(this.name); // returns undefined since it points to global scope
  //   },

  getDetails() {
    const nestedArrow = () => console.log(this.name);
    nestedArrow();
  },
};

user.getDetails();

function makeUser() {
  return {
    name: "Nishad",
    age: this,
  };
}
{
  let you = "Yourself";
  let user1 = makeUser(); // this will point to global object
  console.log(user1);
}

{
  // run this in browser
  window.globalVariable = "Can access this with arrow function";
  (() => console.log(this.globalVariable))();
}

{
  let x = 5;
  let obj = {
    x: 2,
    getX: () => {
      console.log(this.x);
    },
  };

  obj.getX();
}

function squareOff() {
  return this.map((i) => i ** 2);
}
let ar = [1, 2, 3, 4, 5];
console.log(squareOff.call(ar));
