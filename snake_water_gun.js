let arr = ["S", "W", "G"];
let rounds = 1;
let myscore = 0;
let pcscore = 0;
// let playAgain = true

while (rounds <= 5) {
  let rand = arr[Math.floor(Math.random() * arr.length)];
  let ent = prompt("Enter S, W, or G : ");
  let inp = ent.toUpperCase();

  condtn1 = inp == rand;
  condtn2 =
    (inp == "W" && rand == "S") ||
    (inp == "S" && rand == "G") ||
    (inp == "G" && rand == "W");
  condtn3 = !arr.includes(ent.toUpperCase());

  if (condtn1) {
    alert("Draw");
  } else if (condtn2) {
    alert("You lost, computer selected " + rand);
    pcscore++;
  } else if (condtn3) {
    alert("Please enter valid input!!!");
    break;
  } else {
    alert("You won, computer selected " + rand);
    myscore++;
  }
  rounds++;
}
alert("Score: Player-" + myscore + " | Computer-" + pcscore);
// playAgain = confirm("D0 you want to play again?") --optional change
