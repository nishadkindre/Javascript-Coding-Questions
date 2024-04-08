function multiplicationTable(num) {
  console.log("Multiplication table of " + num);
  for (let i = 1; i <= 10; i++) {
    console.log(num + " X " + i + " = " + i * num);
  }
}

multiplicationTable(17);
