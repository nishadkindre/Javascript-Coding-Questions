// Accessing functions before definition

func3(); // 3

console.log(typeof func1); // undefined
func1();

func2();

/*
Error for func1 & func2:
  ReferenceError: Cannot access function before initialisation
  TypeError: fun is not a function
*/

var func1 = () => {
  console.log("1");
};
let func2 = () => {
  console.log("2");
};
function func3() {
  console.log("3");
}
