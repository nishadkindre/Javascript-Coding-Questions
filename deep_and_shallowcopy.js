// spread operator creates a shallow copy where the nested objects are referenced.
// whereas in regular scope are copied

let employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};
console.log("Employee=> ", employee);

let newEmployee = employee; // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
