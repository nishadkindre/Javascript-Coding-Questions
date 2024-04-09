const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Jane",
  lastName: "Smith",
};

function greet(message) {
  console.log(`${message}, ${this.firstName} ${this.lastName}!`);
}

// Using call
greet.call(person1, "Hello"); // Output: Hello, John Doe!
greet.call(person2, "Hi"); // Output: Hi, Jane Smith!

// Using apply
const args = ["Hey"];
greet.apply(person1, args); // Output: Hey, John Doe!
greet.apply(person2, args); // Output: Hey, Jane Smith!

// Using bind
const greetPerson1 = greet.bind(person1);
const greetPerson2 = greet.bind(person2);

greetPerson1("Hola"); // Output: Hola, John Doe!
greetPerson2("Bonjour"); // Output: Bonjour, Jane Smith!

greet.bind(
  {
    firstName: "Nishad",
    lastName: "Kindre",
  },
  "Sup!"
)();
