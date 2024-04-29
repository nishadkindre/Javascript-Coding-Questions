func3();
func1(); // ReferenceError: Cannot access func before initialisation
func2(); // TypeError: fun is not a function

var func1 = () => {
  console.log("1");
};
let func2 = () => {
  console.log("2");
};
function func3() {
  console.log("3");
}
