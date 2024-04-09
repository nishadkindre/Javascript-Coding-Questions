function find(index) {
  let a = [];
  for (let i = 1; i <= 10000000; i++) {
    a[i] = i * i;
  }

  console.log(a[index]);
}

function find2() {
  let a = [];
  for (let i = 1; i <= 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find2();
console.time("6");
closure(6);
// find(6)
console.timeEnd("6");

console.time("100");
closure(100);
// find(100)
console.timeEnd("100");
