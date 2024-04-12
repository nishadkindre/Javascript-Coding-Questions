function diamondPattern(num) {
  let str = "* ";
  let space = "  ";

  for (let i = 1; i <= num; i++) {
    console.log(space.repeat(num - i) + str.repeat(i * 2 - 1));
  }
  for (let i = num - 1; i >= 1; i--) {
    console.log(space.repeat(num - i) + str.repeat(i * 2 - 1));
  }
}

diamondPattern(15);
