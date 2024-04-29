/*
Object.assign({}, obj) --> creates a clone without nesting
{...obj} --> also creates clone wihtout deep nesting

JSON.parse(JSON.stringify(obj)) --> creates a deeply nested clone
*/

const user1 = {
  name: "Nishad",
  age: 22,
  location: {
    city: "Pune",
    state: "Maharashtra",
  },
  interest: ["Chess", "Gym"],
};

const user2 = JSON.parse(JSON.stringify(user1));

// const user2 = {
//   ...user1,
//   location: { ...user1.location },
//   interest: [...user1.interest],
// };

// OR

// user2 = structuredClone(user1);

user2.name = "John";
user2.location.city = "Mumbai";
user2.interest[0] = "Football";

console.log("User1: ", user1);
console.log("User2: ", user2);
