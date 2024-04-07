// Polymorphism and Method Overriding
class firstClass {
  add() {
    console.log("First Method");
  }
}
class secondClass extends firstClass {
  add() {
    console.log(30 + 40);
  }
}
class thirdClass extends secondClass {
  add() {
    console.log("Last Method");
  }
}
let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();
ob.add();
ob2.add();
ob3.add();
