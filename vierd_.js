console.log(+true, +false, !"Nishad");
// Since the + operator tries to convert an operand to number

function sayHi() {
  return (() => 0)();
}
console.log(typeof sayHi()); // number

console.log(typeof typeof 1); // string,  since typeof 1 returns type in string: "number"
