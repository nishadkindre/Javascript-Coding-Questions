foo();
console.log(foo);

var foo = 22;
console.log(typeof foo, foo);

function foo() {
  console.log("Foo");
}

console.log(foo);

foo();

/*
In Memory Creation phase JS will create:
a varible foo & initialize as undefined
function foo as it is
*/
