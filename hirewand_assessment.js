// Q1
console.log((() => [...[...[...[...[...[...[...[..."..."]]]]]]]]).length);

// Q2
function main() {
  try {
    const arr = [1, 2, 3, 5];
    arr.forEach((num) => {
      console.log(parseInt(num / (num - 3)));
    });
  } catch (e) {
    console.log(e);
  }
}
main(); // -0 -2 NaN 2

// Q3
const groceries = ["banana", "apple", "peanuts"];
if (groceries.indexOf("banana")) {
  console.log("Yes");
} else {
  console.log("No"); //
}

// Q4
function printArray(a) {
  var len = a.length,
    i = 0;
  if (len == 0) console.log("Empty Array");
  else {
    do {
      console.log(a[i]);
    } while (++i < len);
  }
}
printArray(5);

// Q5
let num1 = 10;
function outer() {
  var num2 = 20;
  var inner = function () {
    console.log("num1 is: ", num1);
    console.log("num2 is: ", num2);
    num2 += 10;
  };
  return inner;
}
var innerFun = outer();
innerFun();
innerFun(); // will increment the num2 in lexical scope

// Q6
let text = "We are here to test regex";
let n = text.search("re");
console.log(n); //  4

// Q7
function animals(animal) {
  animal.className = "cow";
}
var myAnimal = { className: "cat" };
var a;
// animals(myAnimal);
a = myAnimal.className;
console.log(a); // cat

// Q8
function f1(a, b = 100) {
  return a + b;
}
console.log(f1(100)); // 200

// Q9
let a = 10;
function closures(c) {
  console.log(a);
  var inner = function inner1() {
    let b = 20;
    console.log(c);
    console.log(a + b);
    a += 10;
  };
  var innerFun = function inner2() {
    let d = 10;
    console.log(d);
  };
  innerFun();
  return inner;
}
var innerFun = closures(30);
innerFun();
console.log(a + b + c + d); // undefined

//
console.log(
  (() => [...[...[...[...[...[...[...[...[...[..."..."]]]]]]]]]].length)()
); // 3
