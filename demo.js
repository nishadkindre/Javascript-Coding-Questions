function counter() {
  let i = 121;
  console.log(i);
}

// counter();

let students = [
  { name: "Nishad", age: 22, marks: 50 },
  { name: "Tushar", age: 23, marks: 60 },
  { name: "Vaibhav", age: 21, marks: 70 },
  { name: "Anil", age: 24, marks: 40 },
];

console.log(students);
let os = students.map((i) => i.name);
console.log(os);
