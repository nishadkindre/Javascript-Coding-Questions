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

//
