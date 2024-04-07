function diamondPattern(num) {
  for (let i = 1; i <= num; i++) {
    let str = "*";
    let space = " ";
    console.log(space.repeat(num - i) + str.repeat(i * 2 - 1));
  }
  for (let i = num - 1; i >= 1; i--) {
    let str = "*";
    let space = " ";
    console.log(space.repeat(num - i) + str.repeat(i * 2 - 1));
  }
}

diamondPattern(2);
