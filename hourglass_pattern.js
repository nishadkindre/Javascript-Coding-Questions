function hourglassPattern(num) {
  let str = "* ";
  let space = "  ";

  for (let i = num; i > 1; i--) {
    console.log(space.repeat(num - i) + str.repeat(2 * i - 1));
  }

  for (let i = 1; i <= num; i++) {
    console.log(space.repeat(num - i) + str.repeat(2 * i - 1));
  }
}

hourglassPattern(5);
