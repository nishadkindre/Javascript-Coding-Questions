let num = [3, 5, 1, 2, 4];

let len = num.length; // optimized method
// for(let i=0; i<len;i++){
//   console.log(num[i])
// }

// ForEach Loop
num.forEach((element) => {
  console.log(element * element);
});

// Array.from
let name = "Harry";
let arr = Array.from(name);
console.log(arr);

// for...of
for (let item of num) {
  console.log(item);
}

// for...in
for (let i in num) {
  console.log(num[i]);
}
