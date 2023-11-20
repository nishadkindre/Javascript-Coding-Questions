// console.time("ad")
// console.timeEnd("ad")
let arr = ["S", "W", "G"];

while (true) {
  let ent = prompt("Enter S, W, or G : ");
  if (!arr.includes(ent.toUpperCase())) {
    alert("No");
  } else {
    alert("Yes");
  }
}
