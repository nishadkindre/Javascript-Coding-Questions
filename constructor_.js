function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Ayush", "Verma");

// This method gets added to the constructor and cannot be accessed by its objects
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// If you want a method to be available to all object instances, you have to add it to the prototype property:
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// console.log(Person.getFullName());
console.log(member.getFullName());
